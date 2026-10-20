import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, Moon, Sun, X } from "lucide-react"

type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
]

const NavBar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    // The head script sets the theme before the page paints; sync the button after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light")
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    document.documentElement.dataset.theme = nextTheme
    setTheme(nextTheme)
    try { localStorage.setItem("portfolio-theme", nextTheme) } catch { /* Theme still works for this visit. */ }
  }

  useEffect(() => {
    // Navigation can also happen through browser history or links outside this header.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false)
  }, [location.pathname])

  const isActive = (href: string) => {
    const currentPath = location.pathname.replace(/\/+$/, "") || "/"
    return currentPath === href
  }

  const renderLinks = (isStacked = false) => (
    <nav aria-label={isStacked ? "Mobile navigation" : "Primary navigation"} className={`flex ${isStacked ? "flex-col gap-1.5" : "items-center gap-0.5"}`}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          onClick={() => setIsMenuOpen(false)}
          aria-current={isActive(item.href) ? "page" : undefined}
          className={`site-nav-link rounded-full px-3 py-1.5 font-semibold transition ${
            isActive(item.href)
              ? "bg-blue-50 text-blue-700"
              : "text-slate-700 hover:text-blue-700"
          }`}
        >
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  )

  return (
    <header className="site-nav sticky top-0 z-30 bg-[var(--bg-page)] pb-4 pt-6">
      <div className="site-nav-surface flex items-center justify-between gap-2.5 rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-surface)] px-3 py-1.5 shadow-sm">
        <Link to="/" onClick={() => setIsMenuOpen(false)} aria-current={isActive("/") ? "page" : undefined} className="site-brand flex items-center gap-3 text-slate-900">
          <div>
            <p className="text-xs font-semibold">Shivam Mittal</p>
            <p className="text-[0.75rem] text-slate-500">Full-stack engineer</p>
          </div>
        </Link>

        <div className="hidden md:block">{renderLinks()}</div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-[var(--border-soft)] transition"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
          </button>
          <a
            href="/Resume.pdf"
            download
            className="hidden min-h-10 items-center rounded-full border border-[var(--border-soft)] px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-blue-300 hover:text-blue-700 sm:inline-flex"
          >
            Download CV
          </a>
          <Link
            to="/contact"
            aria-current={isActive("/contact") ? "page" : undefined}
            className="site-contact-cta hidden min-h-10 items-center rounded-full bg-[var(--accent)] px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:inline-flex"
          >
            Let&apos;s talk
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="site-menu-toggle inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] px-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            <span>{isMenuOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation" className="mobile-nav-panel mt-3 rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-4 shadow-sm md:hidden">
          {renderLinks(true)}
          <a
            href="/Resume.pdf"
            download
            onClick={() => setIsMenuOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-[var(--border-soft)] px-4 py-2 text-xs font-semibold text-slate-700"
          >
            Download CV
          </a>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            aria-current={isActive("/contact") ? "page" : undefined}
            className="site-contact-cta mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white"
          >
            Let&apos;s talk
          </Link>
        </div>
      )}
    </header>
  )
}

export default NavBar
