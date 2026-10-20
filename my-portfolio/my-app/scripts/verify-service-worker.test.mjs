import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import path from "node:path"
import { test } from "node:test"
import { fileURLToPath } from "node:url"
import { runInNewContext } from "node:vm"

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const worker = await readFile(path.join(appRoot, "dist", "sw.js"), "utf8")

const dispatchFetch = async ({ request, fetchResponse, fetchResource, cache, cacheOpen = async () => cache }) => {
  const listeners = new Map()
  const background = []
  let responsePromise

  runInNewContext(worker, {
    URL,
    Response,
    caches: { open: cacheOpen },
    fetch: fetchResource ?? (async () => fetchResponse),
    self: {
      location: { origin: "https://www.theshivam.dev" },
      addEventListener: (name, callback) => listeners.set(name, callback),
    },
  })

  listeners.get("fetch")({
    request,
    respondWith: (promise) => { responsePromise = promise },
    waitUntil: (promise) => { background.push(promise) },
  })

  const response = await responsePromise
  await Promise.all(background)
  return response
}

test("install finishes without requesting gallery images or the resume", { timeout: 1000 }, async () => {
  const listeners = new Map()
  const requests = []
  const saved = []
  let installation
  let activated = false

  const config = runInNewContext(`${worker}\nconfig`, {
    URL,
    Response,
    caches: { open: async () => ({ put: async (url) => saved.push(url) }) },
    fetch: async (url) => {
      requests.push(url)
      // A media request would stay pending and block the old install handler.
      if (/\.(png|pdf)$/i.test(url) && !url.endsWith("/gosharpener-logo.png") && !url.endsWith("/favicon.png")) {
        return new Promise(() => {})
      }
      return new Response("core file")
    },
    self: {
      addEventListener: (name, callback) => listeners.set(name, callback),
      skipWaiting: async () => { activated = true },
    },
  })

  listeners.get("install")({ waitUntil: (promise) => { installation = promise } })
  await installation

  assert.equal(activated, true)
  assert.deepEqual(new Set(requests), new Set(config.coreUrls))
  assert.deepEqual(new Set(saved), new Set(config.coreUrls))
  assert.ok(!requests.some((url) => /\/(expenseTracker|devTinder|NetflixGPT)\//.test(url) || url.endsWith("/Resume.pdf")))
})

test("a requested gallery image is returned and saved for offline use", async () => {
  const request = { url: "https://www.theshivam.dev/NetflixGPT/Login.png", method: "GET", mode: "no-cors" }
  let savedRequest
  let savedBody

  const response = await dispatchFetch({
    request,
    fetchResponse: new Response("gallery image"),
    cache: {
      match: async () => undefined,
      put: async (key, copy) => {
        savedRequest = key
        savedBody = await copy.text()
      },
    },
  })

  assert.equal(await response.text(), "gallery image")
  assert.equal(savedRequest, request)
  assert.equal(savedBody, "gallery image")
})

test("a saved gallery image opens without using the network", async () => {
  const response = await dispatchFetch({
    request: { url: "https://www.theshivam.dev/NetflixGPT/Login.png", method: "GET", mode: "no-cors" },
    fetchResource: async () => { assert.fail("Cached media must not need the network") },
    cache: { match: async () => new Response("saved gallery image") },
  })

  assert.equal(await response.text(), "saved gallery image")
})

test("navigation keeps its network response when a cache write fails", async () => {
  const response = await dispatchFetch({
    request: { url: "https://www.theshivam.dev/about", method: "GET", mode: "navigate" },
    fetchResponse: new Response("fresh page"),
    cache: { put: async () => { throw new Error("quota exceeded") } },
  })
  assert.equal(await response.text(), "fresh page")
})

test("asset keeps its network response when storage is unavailable", async () => {
  const response = await dispatchFetch({
    request: { url: "https://www.theshivam.dev/assets/app.js", method: "GET", mode: "no-cors" },
    fetchResponse: new Response("fresh asset"),
    cacheOpen: async () => { throw new Error("storage unavailable") },
  })
  assert.equal(await response.text(), "fresh asset")
})

test("offline navigation still returns the saved route", async () => {
  const response = await dispatchFetch({
    request: { url: "https://www.theshivam.dev/about", method: "GET", mode: "navigate" },
    fetchResponse: Promise.reject(new Error("offline")),
    cache: { match: async (route) => route === "/about" ? new Response("saved page") : undefined },
  })
  assert.equal(await response.text(), "saved page")
})

test("an unsaved route shows the offline page when disconnected", async () => {
  const response = await dispatchFetch({
    request: { url: "https://www.theshivam.dev/unsaved", method: "GET", mode: "navigate" },
    fetchResponse: Promise.reject(new Error("offline")),
    cache: { match: async (route) => route === "/offline.html" ? new Response("offline page") : undefined },
  })
  assert.equal(await response.text(), "offline page")
})
