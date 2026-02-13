type SkillItem = {
  title: string
  items: string[]
  focus: string
}

const skills: SkillItem[] = [
  {
    title: "Programming Languages",
    focus: "Daily drivers",
    items: ["JavaScript", "TypeScript", "C++", "Python", "OOP"],
  },
  {
    title: "Web Development",
    focus: "Frontend + backend",
    items: ["React", "Tailwind", "Node.js", "Express", "REST", "Redux"],
  },
  {
    title: "Databases",
    focus: "Persistence",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    focus: "Productivity",
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    title: "Concepts",
    focus: "Architecture",
    items: ["DSA", "Authentication", "API Design"],
  },
]

const TechnicalSkills = () => {
  return (
    <section className="section-shell space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="section-label">Stack</p>
          <h2 className="text-xl font-semibold text-slate-900">Technical Skills</h2>
        </div>
        <p className="text-[0.8rem] text-slate-500">Fast scan of the tools I rely on.</p>
      </div>

      <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-3">
        <ul className="grid gap-3 sm:grid-cols-2">
          {skills.map((skill) => (
            <li
              key={skill.title}
              className="rounded-xl border border-[var(--border-soft)] bg-white/80 px-3 py-2.5 shadow-[0_4px_12px_rgba(15,23,42,0.04)]"
            >
              <p className="text-sm font-semibold text-slate-900">{skill.title}</p>
              <p className="text-[0.6rem] uppercase tracking-[0.3em] text-slate-500">{skill.focus}</p>
              <p className="mt-1 text-[0.82rem] leading-relaxed text-slate-600">
                {skill.items.join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default TechnicalSkills
