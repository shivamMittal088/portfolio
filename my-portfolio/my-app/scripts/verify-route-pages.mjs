import assert from "node:assert/strict"
import { access, readFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const outputDir = path.join(appRoot, "dist")
const seo = JSON.parse(await readFile(path.join(appRoot, "seo.config.json"), "utf8"))
const vercel = JSON.parse(await readFile(path.join(appRoot, "vercel.json"), "utf8"))

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")

for (const [route, page] of Object.entries(seo.routes)) {
  const directory = route === "/" ? outputDir : path.join(outputDir, route.slice(1))
  const html = await readFile(path.join(directory, "index.html"), "utf8")
  const url = new URL(route, `${seo.siteUrl}/`).href

  for (const expected of [
    `<title>${escapeHtml(page.title)}</title>`,
    `<meta name="description" content="${escapeHtml(page.description)}" />`,
    `<meta name="robots" content="index, follow" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta property="og:image" content="${seo.siteUrl}${seo.imagePath}" />`,
  ]) {
    assert.ok(html.includes(expected), `${route} is missing ${expected}`)
  }

  assert.match(html, /<div id="root">[\s\S]*<main\b[\s\S]*<h1\b/i, `${route} is missing prerendered page content`)

  if (route !== "/") {
    assert.ok(
      vercel.rewrites.some(({ source, destination }) =>
        source === route && destination === `${route}/index.html`
      ),
      `${route} is missing its Vercel rewrite`,
    )
  }

  console.log(`Verified ${route}`)
}

const notFoundHtml = await readFile(path.join(outputDir, "404.html"), "utf8")
assert.ok(notFoundHtml.includes(`<title>${escapeHtml(seo.notFound.title)}</title>`), "404 page is missing its title")
assert.ok(notFoundHtml.includes('<meta name="robots" content="noindex, follow" />'), "404 page must not be indexed")
assert.match(notFoundHtml, /<h1\b[^>]*>This page doesn&#x27;t exist\.<\/h1>/i, "404 page is missing its message")
assert.ok(!vercel.rewrites.some(({ source }) => source === "/(.*)"), "A catch-all rewrite would hide HTTP 404s")

await access(path.join(outputDir, seo.imagePath.slice(1)))
console.log("Social preview image is present in the build.")
