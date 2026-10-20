import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Start with a useful slice",
    detail: "I clarify the problem, decide what the first working version needs, and leave room to learn as I build.",
  },
  {
    number: "02",
    title: "Explore, then verify",
    detail: "I use documentation, small experiments, and LLMs to explore options. I test the result and make the final engineering decisions myself.",
  },
  {
    number: "03",
    title: "Ship and refine",
    detail: "I connect the pieces, deploy the product, and keep improving what feels slow, confusing, or unreliable.",
  },
]

const About = () => {
  return (
    <div className="about-page page-stack">
      <section className="page-intro section-shell space-y-4">
        <p className="section-label">About me</p>
        <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
          The interesting part starts when I don’t know how.
        </h1>
        <div className="max-w-3xl space-y-3 text-base text-slate-600">
          <p>
            I’m Shivam, a full-stack developer who enjoys taking an idea from early planning to a working release.
            The challenges I remember most begin with a problem that feels beyond my current skills.
          </p>
          <p>
            I break it into smaller pieces, learn what’s missing, and build toward something I can test and ship.
            Each finished project gives me more confidence to take on the next unfamiliar problem.
          </p>
        </div>
      </section>

      <section className="approach-section section-shell space-y-6" aria-labelledby="approach-title">
        <div>
          <p className="section-label">My approach</p>
          <h2 id="approach-title" className="mt-2 text-2xl font-semibold text-slate-900">
            How I move through uncertainty
          </h2>
        </div>

        <ol className="approach-grid grid gap-3 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="rounded-2xl border border-[var(--border-soft)] bg-white/85 p-5">
              <span className="text-xs font-semibold tracking-[0.18em] text-blue-700">{step.number}</span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.detail}</p>
            </li>
          ))}
        </ol>

        <div className="approach-example rounded-2xl border border-blue-100 bg-blue-50/70 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">One example</p>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">Making Expense Tracker work offline</h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-700">
            I approached offline support as smaller problems: save expenses locally, handle the disconnected state,
            then sync when the connection returns. The app now uses IndexedDB for offline storage and reconnect sync.
          </p>
          <Link to="/projects" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800">
            Explore the project <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="practice-section section-shell space-y-6" aria-labelledby="practice-title">
        <div className="max-w-2xl">
          <p className="section-label">In practice</p>
          <h2 id="practice-title" className="mt-2 text-2xl font-semibold text-slate-900">
            Learning from work that people use
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Working with real data and real deadlines has taught me to pay attention to the details around the code.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-[var(--border-soft)] bg-white/85 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Internship · goSharpener</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">Making student data easier to work with</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              I’ve automated spreadsheet mapping and file conversion workflows, including a review path for records that don’t match cleanly.
              It’s shown me how much care everyday internal tools deserve.
            </p>
          </article>
          <article className="rounded-2xl border border-[var(--border-soft)] bg-white/85 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Freelance · client website</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">Building for someone else’s audience</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              I built and deployed a responsive website for a legal practice, with clear contact paths and reusable sections.
              That project pushed me to think about trust and clarity from a visitor’s point of view.
            </p>
          </article>
        </div>
        <Link to="/experience" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800">
          See my experience <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </section>

      <section className="next-section section-shell flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between" aria-labelledby="next-title">
        <div className="max-w-2xl">
          <p className="section-label">What’s next</p>
          <h2 id="next-title" className="mt-2 text-2xl font-semibold text-slate-900">The work I want to do more of</h2>
          <p className="mt-3 text-base text-slate-600">
            I want to help build useful products, own features from planning through release, and keep growing in backend reliability and thoughtful uses of AI.
          </p>
        </div>
        <Link to="/contact" className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
          Let’s talk
        </Link>
      </section>
    </div>
  )
}

export default About
