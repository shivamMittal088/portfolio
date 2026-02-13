type InterestItem = {
  title: string
  description: string
}

const interests: InterestItem[] = [
  {
    title: "Building Products",
    description:
      "I enjoy crafting purposeful web apps—expense tools, collaboration hubs, or anything that removes friction for teams.",
  },
  {
    title: "Backend Engineering",
    description:
      "APIs, databases, auth flows, and system diagrams are my happy place. I like when reliability is measurable.",
  },
  {
    title: "Learning & Improving",
    description:
      "Reading docs, running experiments, and dissecting architecture keeps my curiosity wired-in.",
  },
  {
    title: "Problem Solving",
    description:
      "I break ambiguous challenges into approachable sprints and validate with instrumentation.",
  },
]

const Interests = () => {
  return (
    <section className="section-shell space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="section-label">Beyond code</p>
          <h2 className="text-xl font-semibold text-slate-900">Interests that fuel my work</h2>
        </div>
        <span className="section-chip">always curious</span>
      </div>

      <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-3">
        <ul className="grid gap-3 sm:grid-cols-2">
          {interests.map((interest, index) => (
            <li
              key={interest.title}
              className="rounded-xl border border-[var(--border-soft)] bg-white/85 px-3 py-2.5 shadow-[0_4px_12px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-[0.3em] text-slate-500">
                <span>0{index + 1}</span>
                <span>focus</span>
              </div>
              <p className="mt-1 text-base font-semibold text-slate-900">{interest.title}</p>
              <p className="text-[0.85rem] text-slate-600">{interest.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Interests
