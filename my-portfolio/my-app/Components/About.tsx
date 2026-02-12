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
    <section className="space-y-8">
      <header className="space-y-3">
        <p className="text-[0.65rem] uppercase tracking-[0.4em] text-slate-500">About</p>
        <h1 className="text-3xl font-semibold text-slate-900">A builder who loves pairing clarity with craft</h1>
        <p className="text-sm text-slate-600">
          I am Shivam Mittal, a full-stack developer focused on designing smooth user journeys backed by solid engineering.
          Every project is treated as a mini product—from research and UX states to deployment and monitoring.
        </p>
      </header>

      <div className="overflow-x-auto pb-1">
        <div className="flex min-w-max gap-4">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="w-64 shrink-0 rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-card)] p-4"
            >
              <p className="text-[0.6rem] uppercase tracking-[0.35em] text-slate-500">Focus</p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">{area.title}</h3>
              <p className="mt-1.5 text-[0.72rem] text-slate-600">{area.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--bg-card)] p-4">
        <div className="mb-4 flex flex-wrap justify-between gap-2">
          <div>
            <p className="text-[0.55rem] uppercase tracking-[0.35em] text-slate-500">Trail</p>
            <h2 className="text-lg font-semibold text-slate-900">Selected highlights</h2>
          </div>
          <span className="rounded-full border border-[var(--border-soft)] px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.3em] text-slate-500">
            evolving
          </span>
        </div>

        <div className="space-y-4">
          {timeline.map((entry) => (
            <div
              key={entry.title}
              className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-3.5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-[0.6rem] uppercase tracking-[0.28em] text-slate-500">{entry.period}</p>
                <div className="flex flex-wrap gap-1.5 text-[0.6rem] text-slate-600">
                  {entry.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-[var(--border-soft)] px-2.5 py-0.5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="mt-2 text-base font-semibold text-slate-900">{entry.title}</h3>
              <p className="mt-1.5 text-[0.72rem] text-slate-600">{entry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About