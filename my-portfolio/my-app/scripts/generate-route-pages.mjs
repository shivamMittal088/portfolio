import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { createServer } from "vite"

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const outputDir = path.join(appRoot, "dist")
const seo = JSON.parse(await readFile(path.join(appRoot, "seo.config.json"), "utf8"))
const template = await readFile(path.join(outputDir, "index.html"), "utf8")

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")

const replaceRequired = (html, pattern, replacement, label) => {
  if (!pattern.test(html)) throw new Error(`Missing ${label} in dist/index.html`)
  return html.replace(pattern, replacement)
}

const setMeta = (html, attribute, key, content) => {
  const pattern = new RegExp(`<meta ${attribute}="${key}" content="[^"]*"\\s*\\/?>`, "i")
  return replaceRequired(
    html,
    pattern,
    `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`,
    `${attribute}=${key}`,
  )
}

const renderPage = (route, page, body, isNotFound = false) => {
  const canonicalUrl = new URL(route, `${seo.siteUrl}/`).href
  let html = replaceRequired(template, /<title>[^<]*<\/title>/i, `<title>${escapeHtml(page.title)}</title>`, "title")
  html = replaceRequired(html, /<link rel="canonical" href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${canonicalUrl}" />`, "canonical link")
  html = setMeta(html, "name", "description", page.description)
  html = setMeta(html, "name", "robots", isNotFound ? "noindex, follow" : "index, follow")
  html = setMeta(html, "property", "og:title", page.title)
  html = setMeta(html, "property", "og:description", page.description)
  html = setMeta(html, "property", "og:url", canonicalUrl)
  html = setMeta(html, "name", "twitter:title", page.title)
  html = setMeta(html, "name", "twitter:description", page.description)
  html = replaceRequired(html, /<div id="root"><\/div>/i, `<div id="root">${body}</div>`, "app root")
  return html
}

const vite = await createServer({
  root: appRoot,
  configFile: path.join(appRoot, "vite.config.ts"),
  server: { middlewareMode: true },
  appType: "custom",
})

try {
  const { renderRoute } = await vite.ssrLoadModule("/src/ssr.tsx")

  for (const [route, page] of Object.entries(seo.routes)) {
    if (route !== "/" && !/^\/[a-z]+(?:-[a-z]+)*$/.test(route)) {
      throw new Error(`Invalid route in seo.config.json: ${route}`)
    }
    if (!page.title || !page.description) {
      throw new Error(`Missing title or description for ${route}`)
    }

    const routeDir = route === "/" ? outputDir : path.join(outputDir, route.slice(1))
    await mkdir(routeDir, { recursive: true })
    await writeFile(path.join(routeDir, "index.html"), renderPage(route, page, renderRoute(route)))
  }

  await writeFile(
    path.join(outputDir, "404.html"),
    renderPage("/", seo.notFound, renderRoute("/404"), true),
  )
} finally {
  await vite.close()
}

console.log(`Generated content and metadata for ${Object.keys(seo.routes).length} routes plus a 404 page.`)
