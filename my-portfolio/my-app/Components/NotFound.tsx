import { Link } from "react-router-dom"

const NotFound = () => (
  <section className="page-intro section-shell space-y-4">
    <p className="section-label">404 · Page not found</p>
    <h1 className="text-2xl font-semibold text-slate-900">This page doesn&apos;t exist.</h1>
    <p className="text-sm text-slate-600">
      The link may have changed. Head back to the homepage or browse my projects.
    </p>
    <div className="flex flex-wrap gap-3">
      <Link to="/" className="inline-flex min-h-11 items-center rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-white">
        Back to home
      </Link>
      <Link to="/projects" className="inline-flex min-h-11 items-center rounded-full border border-[var(--border-soft)] bg-white px-5 py-2 text-sm font-semibold text-slate-800">
        View projects
      </Link>
    </div>
  </section>
)

export default NotFound
