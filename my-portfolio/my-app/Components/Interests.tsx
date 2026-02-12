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
    <section className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-card)] p-5">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.4em] text-slate-500">Beyond code</p>
          <h2 className="text-xl font-semibold text-slate-900">Interests that fuel my work</h2>
        </div>
        <span className="rounded-full border border-[var(--border-soft)] px-3 py-1.5 text-[11px] uppercase tracking-[0.35em] text-slate-500">
          always curious
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {interests.map((interest, index) => (
          <div
            key={interest.title}
            className="rounded-xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-4"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
              0{index + 1}
            </p>
            <h3 className="text-lg font-semibold text-slate-900">{interest.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{interest.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Interests
