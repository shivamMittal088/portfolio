const focusAreas = [
  {
    title: "Product-minded engineering",
    detail:
      "I translate ambiguous product briefs into backlog-ready tasks, prototypes, and measurable success metrics.",
  },
  {
    title: "End-to-end ownership",
    detail:
      "From data modeling to design polish, I stay hands-on until the release feels reliable and intentional.",
  },
  {
    title: "Systems that scale",
    detail:
      "I obsess over clean APIs, resilient auth flows, and observability so features stay trustworthy as usage grows.",
  },
  {
    title: "Debugging & observability",
    detail:
      "I lean on structured logs, profilers, and reproducible scripts to isolate issues quickly and protect user trust.",
  },
]

const timeline = [
  {
    period: "2026",
    title: "Expense Tracker — analytics-first finance app",
    description:
      "Building JWT-secured auth, Axiom-powered logging, and heatmap-based spend insights for a full-stack expense platform.",
    stack: ["Node.js", "Express", "TypeScript", "MongoDB", "React"],
  },
  {
    period: "2025",
    title: "NetflixGPT — AI-first streaming assistant",
    description:
      "Blended TMDB and OpenAI APIs to deliver multilingual movie suggestions with Redux-powered personalization.",
    stack: ["React", "Redux", "Firebase", "OpenAI", "TMDB"],
  },
  {
    period: "Ongoing",
    title: "Problem-solving streak",
    description:
      "Over 200 algorithm challenges solved to keep core data-structure patterns sharp when building features.",
    stack: ["DSA", "Code Reviews"],
  },
]

const About = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <section className="section-shell space-y-2">
        <p className="section-label">About</p>
        <h1 className="text-2xl font-semibold text-slate-900">A builder who loves pairing clarity with craft</h1>
        <p className="text-sm text-slate-600">
          I am Shivam Mittal, a full-stack developer focused on designing smooth user journeys backed by solid engineering.
          Every project is treated as a mini product—from research and UX states to deployment and monitoring.
        </p>
      </section>

      <section className="section-shell space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="section-label">Focus Areas</p>
          <span className="text-[0.65rem] text-slate-500">What guides my process</span>
        </div>
        <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-3">
          <ul className="grid gap-3 md:grid-cols-2">
            {focusAreas.map((area) => (
              <li
                key={area.title}
                className="rounded-xl border border-[var(--border-soft)] bg-white/85 px-3.5 py-3 shadow-[0_4px_12px_rgba(15,23,42,0.04)]"
              >
                <p className="text-[0.58rem] uppercase tracking-[0.32em] text-slate-500">Focus</p>
                <h3 className="text-base font-semibold text-slate-900">{area.title}</h3>
                <p className="text-[0.85rem] text-slate-600">{area.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="section-label">Trail</p>
            <h2 className="text-xl font-semibold text-slate-900">Selected highlights</h2>
          </div>
          <span className="section-chip">evolving</span>
        </div>

        <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-3">
          <ul className="grid gap-3 md:grid-cols-2">
            {timeline.map((entry) => (
              <li
                key={entry.title}
                className="rounded-xl border border-[var(--border-soft)] bg-white/85 px-4 py-3 shadow-[0_4px_12px_rgba(15,23,42,0.04)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-[0.6rem] text-slate-500">
                  <span className="uppercase tracking-[0.28em]">{entry.period}</span>
                  <span className="text-[0.55rem] uppercase tracking-[0.3em] text-slate-400">{entry.stack.join(" · ")}</span>
                </div>
                <p className="mt-2 text-base font-semibold text-slate-900">{entry.title}</p>
                <p className="text-[0.85rem] text-slate-600">{entry.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default About