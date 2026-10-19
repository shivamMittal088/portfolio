import { Link } from "react-router-dom"
import { ArrowUpRight, Download } from "lucide-react"
import Interests from "./Interests"
import TechnicalSkills from "./TechnicalSkills"
import AILearning from "./AILearning"
import WorkInMotion from "./WorkInMotion"
import GoSharpenerLogo from "./GoSharpenerLogo"

const highlights = [
  { text: "Building full-stack products with React, TypeScript, Node.js, and MongoDB." },
  { text: "325 data-structure challenges solved to sharpen problem-solving skills." },
  { text: "Currently automating student data workflows at goSharpener.", goSharpener: true },
]

const stats = [
  { value: "3", label: "Featured projects" },
  { value: "325", label: "DSA problems" },
  { value: "1", label: "Ongoing internship" },
]

const standoutChips = ["React", "TypeScript", "Node.js", "MongoDB", "WebSockets"]

const Hero = () => {
  return (
    <div className="space-y-8 sm:space-y-10">
      <section className="hero-section section-shell overflow-hidden">
        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14">
          <div className="hero-copy">
            <p className="section-label mb-5">Full-stack developer · Open to opportunities</p>
            <h1 className="section-title">Hi, I’m Shivam Mittal.</h1>
            <p className="mt-5 max-w-2xl text-xl font-medium leading-snug text-slate-800 sm:text-2xl">
              I build reliable web products with clear, thoughtful interfaces.
            </p>
            <p className="mt-4 max-w-xl text-base text-slate-600">
              I work across frontend, backend, and product details—from the first workflow to a polished release.
            </p>

            <div className="hero-actions mt-7 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="hero-primary inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                View projects <ArrowUpRight className="cta-arrow" size={17} aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="hero-secondary inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--border-soft)] bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-blue-500 hover:text-blue-700"
              >
                Contact me
              </Link>
              <a
                href="/Resume.pdf"
                download
                className="inline-flex min-h-11 items-center gap-2 px-3 py-2.5 text-sm font-semibold text-slate-600 transition hover:text-blue-700"
              >
                <Download size={17} aria-hidden="true" /> Download CV
              </a>
            </div>

            <ul className="hero-highlights mt-9 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <li key={highlight.text} className="hero-highlight border-l-2 border-blue-500 pl-3">
                  {highlight.goSharpener && <GoSharpenerLogo className="go-logo-hero mb-2" alt="" />}
                  {highlight.text}
                </li>
              ))}
            </ul>
          </div>

          <aside className="hero-portrait rounded-3xl bg-gradient-to-br from-blue-50 via-white to-slate-100 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] sm:p-7">
            <div className="mx-auto aspect-square max-w-64 overflow-hidden rounded-2xl bg-slate-200 shadow-lg">
              <img src="/shivam.jpeg" alt="Shivam Mittal" className="h-full w-full object-cover" />
            </div>
            <div className="mt-6">
              <p className="text-lg font-bold text-slate-900">Shivam Mittal</p>
              <p className="mt-1 text-sm text-slate-600">Full-stack developer</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {standoutChips.map((chip) => (
                  <span key={chip} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <WorkInMotion />

      <section className="hero-stats grid gap-3 sm:grid-cols-3" aria-label="Portfolio highlights">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card section-surface">
            <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
            <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
          </div>
        ))}
      </section>

      <TechnicalSkills />
      <AILearning />
      <Interests />
    </div>
  )
}

export default Hero
