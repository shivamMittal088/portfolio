import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
]

const NavBar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    <nav className={`flex ${isStacked ? "flex-col gap-1.5" : "items-center gap-0.5"}`}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          onClick={() => setIsMenuOpen(false)}
          className={`site-nav-link relative rounded-full px-3 py-1.5 text-xs font-medium transition ${
            isActive(item.href)
              ? isStacked ? "bg-blue-50 text-blue-700" : "text-slate-900"
              : "text-slate-500 hover:text-slate-900"
          }`}
        >
          <span>{item.label}</span>
          {!isStacked && isActive(item.href) && (
            <span className="absolute inset-x-4 -bottom-1 h-0.5 rounded-full bg-[var(--accent)]" />
          )}
        </Link>
      ))}
    </nav>
  )

  return (
    <header className="site-nav sticky top-0 z-30 bg-[var(--bg-page)] pb-4 pt-6">
      <div className="site-nav-surface flex items-center justify-between gap-2.5 rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-surface)] px-3 py-1.5 shadow-sm">
        <Link to="/" onClick={() => setIsMenuOpen(false)} className="site-brand flex items-center gap-3 text-slate-900">
          <div>
            <p className="text-xs font-semibold">Shivam Mittal</p>
            <p className="text-[0.75rem] text-slate-500">Full-stack engineer</p>
          </div>
        </Link>

        <div className="hidden md:block">{renderLinks()}</div>

        <div className="flex items-center gap-1">
          <a
            href="/Resume.pdf"
            download
            className="hidden rounded-full border border-[var(--border-soft)] px-2.5 py-1.5 text-[0.75rem] font-semibold text-slate-700 transition hover:text-slate-900 sm:inline-flex"
          >
            Download CV
          </a>
          <Link
            to="/contact"
            className="hidden rounded-full border border-[var(--border-soft)] px-3 py-1.5 text-[0.75rem] font-semibold text-slate-900 transition hover:border-slate-300 sm:inline-flex"
          >
            Let&apos;s talk
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="site-menu-toggle inline-flex items-center rounded-full border border-[var(--border-soft)] p-1.5 text-slate-900 transition hover:border-slate-300 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-nav-panel mt-3 rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-4 shadow-sm md:hidden">
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
            className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-white"
          >
            Let&apos;s talk
          </Link>
        </div>
      )}
    </header>
  )
}

export default NavBar
