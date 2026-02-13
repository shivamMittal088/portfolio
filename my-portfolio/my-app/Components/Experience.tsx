import type { ReactNode } from "react"

type ExperienceItem = {
  company: string
  role: string
  period: string
  summary: ReactNode
  achievements: string[]
  stack: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: "DSA Intern",
    role: "Coding Blocks",
    period: "Jun 2025 – Sep 2025",
    summary:
      "College-sponsored internship centered on sharpening core data-structure thinking through contests and guided mentorship.",
    achievements: [
      "Solved 100+ LeetCode problems spanning arrays, linked lists, recursion, bit manipulation, and dynamic programming.",
      "Improved problem-solving speed in C++ via weekly mock interviews and timed contest environments.",
      "Documented reusable templates for common patterns to accelerate future interview prep.",
    ],
    stack: ["C++", "DSA", "Problem Solving"],
  },
  {
    company: "Web Development Intern",
    role: "AccioJob",
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
          className="font-semibold text-[var(--accent)] hover:underline"
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
    <div className="space-y-6 sm:space-y-8">
      <section className="section-shell space-y-1">
        <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-[0.35em] text-slate-500">
          <span>Experience</span>
          <span>Focused sprints</span>
        </div>
        <h2 className="text-lg font-semibold text-slate-900">Shipping impactful work through focused sprints</h2>
        <p className="text-[0.8rem] text-slate-600">
          I thrive in zero-to-one stages where clarity, velocity, and thoughtful engineering decisions matter most.
        </p>
      </section>

      <section className="section-shell">
        <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-3">
          <ul className="space-y-3">
            {experiences.map((experience) => (
              <li
                key={experience.company}
                className="rounded-xl border border-[var(--border-soft)] bg-white/85 px-4 py-3 shadow-[0_4px_12px_rgba(15,23,42,0.04)]"
              >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.32em] text-slate-500">{experience.period}</p>
                  <h2 className="text-lg font-semibold text-slate-900">{experience.company}</h2>
                </div>
                <span className="text-[0.6rem] uppercase tracking-[0.3em] text-slate-500">{experience.role}</span>
              </div>

              <p className="mt-2 text-[0.88rem] text-slate-600">{experience.summary}</p>

              <ul className="mt-2 space-y-1.5 text-[0.85rem] text-slate-700">
                {experience.achievements.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

                <div className="mt-3 flex flex-wrap gap-1.5 text-[0.7rem] text-slate-600">
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