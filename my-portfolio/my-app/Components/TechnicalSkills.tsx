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
    <section className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-card)] p-4">
      <div className="mb-4 text-center">
        <p className="text-[0.6rem] uppercase tracking-[0.35em] text-slate-500">Stack</p>
        <h2 className="text-xl font-semibold text-slate-900">Technical Skills</h2>
        <p className="mt-1 text-[0.72rem] text-slate-600">
          Tools and concepts I rely on while turning product requirements into working software.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="rounded-xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-3"
          >
            <p className="text-[0.6rem] uppercase tracking-[0.32em] text-slate-500">{skill.focus}</p>
            <h3 className="mt-1 text-base font-semibold text-slate-900">{skill.title}</h3>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border-soft)] px-2 py-0.5 text-[0.68rem] text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnicalSkills
