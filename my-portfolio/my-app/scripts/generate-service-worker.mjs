import { createHash } from "node:crypto"
import { readFile, readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const outputDir = path.join(appRoot, "dist")
const seo = JSON.parse(await readFile(path.join(appRoot, "seo.config.json"), "utf8"))
const routes = Object.keys(seo.routes)
const template = await readFile(path.join(appRoot, "scripts", "service-worker.template.txt"), "utf8")

const listFiles = async (directory, relative = "") => {
  const entries = await readdir(directory, { withFileTypes: true })
  const nested = await Promise.all(entries.map((entry) => {
    const file = path.join(relative, entry.name)
    return entry.isDirectory() ? listFiles(path.join(directory, entry.name), file) : [file]
  }))
  return nested.flat()
}

const files = (await listFiles(outputDir)).filter((file) => file !== "sw.js").sort()
const toUrl = (file) => `/${file.split(path.sep).map(encodeURIComponent).join("/")}`
const coreFiles = files.filter((file) =>
  file.startsWith(`assets${path.sep}`)
  || ["favicon.png", "offline.html", "shivam.jpeg", "sm_logo.svg"].includes(file),
)
const optionalFiles = files.filter((file) => !file.endsWith(".html") && !coreFiles.includes(file))

for (const route of routes) {
  const file = route === "/" ? "index.html" : path.join(route.slice(1), "index.html")
  if (!files.includes(file)) throw new Error(`Missing generated page for ${route}`)
}
if (!files.includes("offline.html")) throw new Error("Missing offline.html")

const hash = createHash("sha256").update(template)
for (const file of files) {
  hash.update(file)
  hash.update(await readFile(path.join(outputDir, file)))
}

const config = {
  cacheName: `portfolio-offline-${hash.digest("hex").slice(0, 16)}`,
  routes,
  coreUrls: [...routes, ...coreFiles.map(toUrl)],
  optionalUrls: optionalFiles.map(toUrl),
}
const worker = template.replace("/* OFFLINE_CONFIG */ null", JSON.stringify(config))
if (worker === template) throw new Error("Missing service worker config placeholder")
await writeFile(path.join(outputDir, "sw.js"), worker)

console.log(`Generated offline cache for ${routes.length} routes and ${coreFiles.length + optionalFiles.length} static files.`)
