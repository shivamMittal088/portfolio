import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import path from "node:path"
import { test } from "node:test"
import { fileURLToPath } from "node:url"
import { runInNewContext } from "node:vm"

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const worker = await readFile(path.join(appRoot, "dist", "sw.js"), "utf8")

const dispatchFetch = async ({ request, fetchResponse, cache, cacheOpen = async () => cache }) => {
  const listeners = new Map()
  const background = []
  let responsePromise

  runInNewContext(worker, {
    URL,
    Response,
    caches: { open: cacheOpen },
    fetch: async () => fetchResponse,
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
