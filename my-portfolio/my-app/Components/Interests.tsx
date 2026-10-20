import { Boxes, Compass, Puzzle, Server, type LucideIcon } from "lucide-react"

type InterestItem = {
  title: string
  description: string
  icon: LucideIcon
}

const interests: InterestItem[] = [
  {
    title: "Building Products",
    icon: Boxes,
    description:
      "I enjoy crafting purposeful web apps—expense tools, collaboration hubs, or anything that removes friction for teams.",
  },
  {
    title: "Backend Engineering",
    icon: Server,
    description:
      "APIs, databases, auth flows, and system diagrams are my happy place. I like when reliability is measurable.",
  },
  {
    title: "Learning & Improving",
    icon: Compass,
    description:
      "Reading docs, running experiments, and dissecting architecture keeps my curiosity wired-in.",
  },
  {
    title: "Problem Solving",
    icon: Puzzle,
    description:
      "I break ambiguous challenges into approachable sprints and validate with instrumentation.",
  },
]

const Interests = () => {
  return (
    <section className="interests-section section-shell space-y-4" aria-labelledby="interests-title">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="section-label">Beyond code</p>
          <h2 id="interests-title" className="text-xl font-semibold text-slate-900">What keeps me curious</h2>
        </div>
        <span className="section-chip">always curious</span>
      </div>

      <div className="content-grid-shell rounded-3xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-3">
        <ul className="grid gap-3 sm:grid-cols-2">
          {interests.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="detail-card interest-card rounded-xl border border-[var(--border-soft)] bg-white/85 px-3 py-2.5 shadow-[0_4px_12px_rgba(15,23,42,0.04)]"
            >
              <span className="interest-icon"><Icon size={18} strokeWidth={1.6} aria-hidden="true" /></span>
              <div><h3 className="text-base font-semibold text-slate-900">{title}</h3>
              <p className="text-[0.875rem] text-slate-600">{description}</p></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Interests
