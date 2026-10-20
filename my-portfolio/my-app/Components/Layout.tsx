import { useEffect, useLayoutEffect, useRef } from "react"
import { Outlet, useLocation, useNavigationType } from "react-router-dom"
import { WifiOff } from "lucide-react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { useOnlineStatus } from "../src/useOnlineStatus"
import seo from "../seo.config.json"

type PageMetadata = { title: string; description: string }
const routeMetadata = seo.routes as Record<string, PageMetadata>

const updateMeta = (selector: string, content: string) => {
  const element = document.head.querySelector<HTMLMetaElement>(selector)
  if (element) element.content = content
}

const Layout = () => {
  const isOnline = useOnlineStatus()
  const location = useLocation()
  const { pathname } = location
  const navigationType = useNavigationType()
  const scrollPositions = useRef(new Map<string, { x: number; y: number }>())
  const previousLocationKey = useRef(location.key)

  useLayoutEffect(() => {
    // Keep scroll offsets by history entry so Back/Forward can restore them.
    if (previousLocationKey.current !== location.key) {
      const savedPosition = navigationType === "POP" ? scrollPositions.current.get(location.key) : undefined
      window.scrollTo(savedPosition?.x ?? 0, savedPosition?.y ?? 0)
      previousLocationKey.current = location.key
    }

    const savePosition = () => {
      scrollPositions.current.set(location.key, { x: window.scrollX, y: window.scrollY })
    }

    window.addEventListener("scroll", savePosition, { passive: true })
    return () => window.removeEventListener("scroll", savePosition)
  }, [location.key, navigationType])

  useEffect(() => {
    const route = pathname.replace(/\/+$/, "") || "/"
    const isKnownRoute = Boolean(routeMetadata[route])
    const page = routeMetadata[route] ?? seo.notFound
    const canonicalUrl = new URL(isKnownRoute ? route : "/", `${seo.siteUrl}/`).href

    document.title = page.title
    document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", canonicalUrl)
    updateMeta('meta[name="description"]', page.description)
    updateMeta('meta[name="robots"]', isKnownRoute ? "index, follow" : "noindex, follow")
    updateMeta('meta[property="og:title"]', page.title)
    updateMeta('meta[property="og:description"]', page.description)
    updateMeta('meta[property="og:url"]', canonicalUrl)
    updateMeta('meta[name="twitter:title"]', page.title)
    updateMeta('meta[name="twitter:description"]', page.description)
  }, [pathname])

  return (
    <div className="site-frame min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
      <div className="site-content mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        <NavBar />

        {!isOnline && (
          <section className="offline-notice" role="status" aria-live="polite" aria-label="Offline status">
            <span className="offline-notice-icon" aria-hidden="true"><WifiOff size={23} strokeWidth={1.8} /></span>
            <div>
              <p className="offline-notice-label">OFFLINE MODE <span>· Saved pages available</span></p>
              <h2>You&rsquo;re offline. Keep exploring.</h2>
              <p>Your saved portfolio pages still work. To use the site offline on another device, open it once with internet and let it finish loading. Messages and external links need a connection.</p>
            </div>
          </section>
        )}

        {/* Main content area */}
        <main key={pathname} className="site-main page-enter flex-1 space-y-8 pb-16 pt-8 sm:space-y-10">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Layout
