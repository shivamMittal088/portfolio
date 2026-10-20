import type { ReactNode } from "react"
import GoSharpenerLogo from "./GoSharpenerLogo"

type ExperienceItem = {
  company: string
  role: string
  period: string
  started?: string
  summary: ReactNode
  achievements: string[]
  stack: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: "goSharpener",
    role: "On-site Intern",
    period: "Currently working",
    started: "Since August 2026",
    summary:
      "Working on spreadsheet automation and internal workflows while learning the company's codebase through reviews.",
    achievements: [
      "Automated Excel-based student mapping and data analysis, grouping records as matched, review needed, or unmatched using admission number, email, and class plus full name.",
      "Automated conversion from one file format to another and built workflows to keep tabs synchronized.",
      "Currently working on rollback activity and reviewing the existing company code.",
    ],
    stack: ["Excel Automation", "Data Mapping", "Workflows", "Code Review"],
  },
  {
    company: "AccioJob",
    role: "Web Development Intern",
    period: "Jun 2024 – Sep 2024",
    summary:
      "College-sponsored internship focused on building a production-ready restaurant web app end-to-end.",
    achievements: [
      "Delivered a responsive food ordering experience in React with Redux, React Router, and Tailwind CSS.",
      "Implemented search, filtering, sorting, cart management, and dynamic routing for menu categories.",
      "Collaborated with mentors to enforce component-based architecture and accessibility-first UI patterns.",
    ],
    stack: ["React", "Redux", "React Router", "Tailwind"],
  },
  {
    company: "First Freelance Website",
    role: "React Frontend",
    period: "2024",
    summary: (
      <span>
        <a
          href="https://www.advocatenaveengarg.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="font-semibold text-[var(--accent-ink)] hover:underline hover:opacity-100"
        >
          advocatenaveengarg.com
        </a>
        {" — Independent engagement delivering a polished marketing presence for a legal practice."}
      </span>
    ),
    achievements: [
      "Built and deployed a responsive React interface with crisp typography and trust-focused interactions.",
      "Integrated reusable sections, contact CTAs, and SEO-friendly metadata for better reach.",
    ],
    stack: ["React", "Tailwind", "Vercel"],
  },
]

const Experience = () => {
  return (
    <div className="experience-page page-stack">
      <section className="page-intro section-shell space-y-1">
        <div className="flex items-center justify-between text-[0.75rem] uppercase tracking-[0.35em] text-slate-500">
          <span className="section-label">Experience</span>
          <span className="experience-kicker">Learning through building</span>
        </div>
        <h1 className="text-lg font-semibold text-slate-900">Real work. Useful lessons.</h1>
        <p className="text-[0.875rem] text-slate-600">
          I thrive in zero-to-one stages where clarity, velocity, and thoughtful engineering decisions matter most.
        </p>
      </section>

      <section className="experience-section section-shell">
        <div className="content-grid-shell rounded-3xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-3">
          <ul className="experience-list space-y-3">
            {experiences.map((experience) => (
              <li
                key={experience.company}
                className="detail-card experience-card rounded-xl border border-[var(--border-soft)] bg-white/85 px-4 py-3 shadow-[0_4px_12px_rgba(15,23,42,0.04)]"
              >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className={`text-[0.75rem] uppercase tracking-[0.32em] ${experience.started ? "text-emerald-700" : "text-slate-500"}`}>{experience.period}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {experience.company === "goSharpener" && <GoSharpenerLogo className="go-logo-experience" alt="" />}
                    <h2 className="text-lg font-semibold text-slate-900">{experience.company}</h2>
                  </div>
                </div>
                <div className="ml-auto text-right">
                  {experience.started && <p className="text-[0.75rem] font-semibold text-blue-700">{experience.started}</p>}
                  <span className="text-[0.75rem] uppercase tracking-[0.3em] text-slate-500">{experience.role}</span>
                </div>
              </div>

              <p className="mt-2 text-[0.9375rem] text-slate-600">{experience.summary}</p>

              <ul className="mt-2 space-y-1.5 text-[0.875rem] text-slate-700">
                {experience.achievements.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

                <div className="mt-3 flex flex-wrap gap-1.5 text-[0.75rem] text-slate-600">
                  {experience.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-[var(--border-soft)] px-2.5 py-0.5">
                      {tech}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Experience
