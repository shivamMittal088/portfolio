import { Link } from "react-router-dom"
import { ArrowUpRight, Download } from "lucide-react"
import Interests from "./Interests"
import TechnicalSkills from "./TechnicalSkills"

const heroPoints = [
  "Full-stack engineer crafting scalable products with React, TypeScript, Node.js, and MongoDB.",
  "250+ data-structure challenges solved to keep problem-solving instincts sharp.",
  "Shipped DevTinder, NetflixGPT, and other real-world products used by teams and friends.",
]

const stats = [
  { value: "3+", label: "Production builds" },
  { value: "250+", label: "DSA problems" },
  { value: "5", label: "Core stacks" },
]

const standoutChips = ["React", "TypeScript", "Node.js", "MongoDB"]

const Hero = () => {
  return (
    <div className="space-y-5">
      <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <div className="space-y-2.5">
            <p className="text-[0.65rem] uppercase tracking-[0.45em] text-slate-500">
              Available for full-stack opportunities
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-white px-3 py-1 text-[0.7rem] font-semibold text-slate-700">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span>Expense Tracker • ongoing build</span>
            </div>
            <h1 className="text-[1.75rem] font-semibold leading-tight text-slate-900 sm:text-[2.1rem]">
              Designing reliable web experiences with calm, readable interfaces.
            </h1>
            <p className="text-[0.88rem] text-slate-600 sm:text-[0.95rem]">
              I care about clarity, performance, and making every UI transition feel natural.
              My work bridges product thinking and engineering discipline so teams can ship faster.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--bg-card)] p-3.5">
            <ul className="space-y-2 text-[0.85rem] text-slate-700">
              {heroPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-gray-900"
            >
              View Projects
              <ArrowUpRight size={16} />
            </Link>

            <a
              href="/Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.75rem] text-slate-600 underline-offset-4 hover:text-slate-900"
            >
              <Download size={16} /> Resume
            </a>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[var(--border-soft)] bg-[var(--bg-card)] px-3 py-2 text-center"
              >
                <p className="text-xl font-semibold text-slate-900">{stat.value}</p>
                <p className="text-[0.62rem] uppercase tracking-[0.4em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-card)] p-4">
          <div className="flex items-center justify-between text-[0.65rem] text-slate-500">
            <span>Now building</span>
            <span className="text-slate-700">Expense Tracker</span>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="h-44 w-44 overflow-hidden rounded-xl border border-[var(--border-soft)] bg-slate-100">
              <img
                src="/shivam.jpeg"
                alt="Shivam Mittal"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-base font-semibold text-slate-900">Shivam Mittal</p>
            <p className="text-xs text-slate-600">
              Full-stack developer turning product briefs into performant experiences.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {standoutChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[var(--border-soft)] px-2 py-0.5 text-[9.5px] text-slate-600"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Interests />
      <TechnicalSkills />
    </div>
  )
}

export default Hero
