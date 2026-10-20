import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "node:path"
import { readFile } from "node:fs/promises"
import seo from "./seo.config.json"

const pageRoutes = new Set(Object.keys(seo.routes))

export default defineConfig({
  define: {
    "import.meta.env.VITE_BUILD_YEAR": JSON.stringify(new Date().getFullYear()),
  },
  plugins: [
    react(),
    {
      name: "preview-prerendered-routes",
      configurePreviewServer(server) {
        server.middlewares.use((request, response, next) => {
          if (!request.url || !request.headers.accept?.includes("text/html")) return next()

          const url = new URL(request.url, "http://localhost")
          const pathname = url.pathname.replace(/\/+$/, "") || "/"
          const directPage = pathname === "/index.html"
            ? "/"
            : [...pageRoutes].find((route) => route !== "/" && pathname === `${route}/index.html`)

          if (directPage) {
            response.writeHead(308, { Location: `${directPage}${url.search}` })
            response.end()
            return
          }

          if (pathname !== "/" && pageRoutes.has(pathname)) {
            request.url = `${pathname}/index.html${url.search}`
          } else if (pathname !== "/" && pathname !== "/404.html" && pathname !== "/offline.html" && (path.extname(pathname) === "" || path.extname(pathname) === ".html")) {
            const notFoundFile = path.resolve(server.config.root, server.config.build.outDir, "404.html")
            void readFile(notFoundFile)
              .then((html) => {
                response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" })
                response.end(html)
              })
              .catch(next)
            return
          }

          next()
        })
      },
    },
  ],
})
