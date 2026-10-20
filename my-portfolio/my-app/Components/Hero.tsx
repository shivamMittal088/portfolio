import { useEffect, useRef, type PointerEvent } from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight, ChartNoAxesCombined, Code2, Radio, Sheet, Sparkles, WifiOff } from "lucide-react"
import Interests from "./Interests"
import TechnicalSkills from "./TechnicalSkills"
import AILearning from "./AILearning"
import WorkInMotion from "./WorkInMotion"
import RevealOnScroll from "./RevealOnScroll"
import BuildFlow from "./BuildFlow"

const highlights = [
  { text: "Building full-stack products with React, TypeScript, Node.js, and MongoDB." },
  { text: "325 data-structure challenges solved to sharpen problem-solving skills." },
  { text: "Currently automating student data workflows at goSharpener." },
]

const stats = [
  { value: "3", label: "Featured projects" },
  { value: "325", label: "DSA problems" },
  { value: "1", label: "Ongoing internship" },
]

const featuredStack = ["React", "TypeScript", "Node.js", "MongoDB"]

const capabilities = [
  { name: "WebSockets", detail: "Real-time experiences", icon: Radio },
  { name: "LLM", detail: "AI-assisted workflows", icon: Sparkles },
  { name: "PWA", detail: "Offline availability", icon: WifiOff },
  { name: "Advanced Excel", detail: "Data & automation", icon: Sheet },
]

const handleHeroPointerMove = (event: PointerEvent<HTMLElement>) => {
  if (event.pointerType !== "mouse") return
  const bounds = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`)
  event.currentTarget.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`)
  event.currentTarget.style.setProperty("--spot-opacity", "1")
}

const handlePortraitPointerMove = (event: PointerEvent<HTMLDivElement>) => {
  if (event.pointerType !== "mouse") return
  const bounds = event.currentTarget.getBoundingClientRect()
  const x = (event.clientX - bounds.left) / bounds.width - 0.5
  const y = (event.clientY - bounds.top) / bounds.height - 0.5
  event.currentTarget.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`)
  event.currentTarget.style.setProperty("--tilt-y", `${(x * 5).toFixed(2)}deg`)
}

const Hero = () => {
  const photoFrameRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (photoRef.current && !photoRef.current.complete) {
      photoFrameRef.current?.setAttribute("data-loading", "")
    }
  }, [])

  return (
    <div className="home-page page-stack">
      <section
        className="hero-section section-shell overflow-hidden"
        onPointerMove={handleHeroPointerMove}
        onPointerLeave={(event) => event.currentTarget.style.setProperty("--spot-opacity", "0")}
      >
        <div className="hero-spotlight" aria-hidden="true" />
        <div className="hero-layout grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-10">
          <div className="hero-copy">
            <p className="section-label mb-3">Full-stack developer · Always exploring</p>
            <h1 className="section-title">Thoughtful software.<br /><span className="hero-title-accent">From idea to launch.</span></h1>
            <p className="mt-4 max-w-2xl text-lg font-medium leading-snug text-slate-800 sm:text-xl">
              I enjoy planning, building, and shipping complete products.
            </p>
            <p className="mt-3 max-w-xl text-base text-slate-600">
              When a challenge looks difficult, I break it into smaller problems, learn what’s needed, and use tools like LLMs to keep moving.
            </p>

            <div className="hero-actions mt-5 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="hero-primary inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                View projects <ArrowUpRight className="cta-arrow" size={17} aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="hero-secondary inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--border-soft)] bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-blue-500 hover:text-blue-700"
              >
                Contact me
              </Link>
            </div>

            <BuildFlow />

            <ul className="hero-highlights mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <li key={highlight.text} className="hero-highlight">
                  {highlight.text}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="hero-portrait-tilt"
            onPointerMove={handlePortraitPointerMove}
            onPointerLeave={(event) => {
              event.currentTarget.style.setProperty("--tilt-x", "0deg")
              event.currentTarget.style.setProperty("--tilt-y", "0deg")
            }}
          >
            <aside className="hero-portrait" aria-label="About Shivam and his toolkit">
              <div className="hero-profile-header">
                <span><Code2 size={15} aria-hidden="true" /> Behind the build</span>
                <span className="hero-profile-mark" aria-hidden="true">SM<span>✳</span></span>
              </div>
              <div className="hero-profile-top">
                <div ref={photoFrameRef} className="hero-photo-frame">
                  <img
                    ref={photoRef}
                    src="/shivam.jpeg"
                    alt="Shivam Mittal"
                    className="hero-photo"
                    width={746}
                    height={1328}
                    onLoad={() => photoFrameRef.current?.removeAttribute("data-loading")}
                    onError={() => photoFrameRef.current?.removeAttribute("data-loading")}
                  />
                </div>
                <div className="hero-profile-copy">
                  <h2 className="hero-profile-name">Shivam Mittal<span aria-hidden="true">.</span></h2>
                  <p className="hero-profile-role">Full-stack developer</p>
                  <p className="hero-profile-note">Ideas → useful products</p>
                </div>
              </div>
              <div className="hero-capabilities">
                <p className="hero-capabilities-label">In my toolkit</p>
                <ul className="hero-capability-grid">
                  {capabilities.map(({ name, detail, icon: Icon }) => (
                    <li key={name} className="hero-capability">
                      <Icon size={17} strokeWidth={1.7} aria-hidden="true" />
                      <span><strong>{name}</strong><span>{detail}</span></span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/projects" className="hero-featured-build">
                <span className="hero-build-topline">
                  <span className="hero-build-kicker">Featured build</span>
                  <span className="hero-build-offline"><span aria-hidden="true" /> Offline-ready</span>
                </span>
                <span className="hero-build-heading">
                  <span className="hero-build-icon"><ChartNoAxesCombined size={19} strokeWidth={1.7} aria-hidden="true" /></span>
                  <span className="hero-build-title">Expense Tracker</span>
                  <ArrowUpRight className="cta-arrow" size={19} aria-hidden="true" />
                </span>
                <span className="hero-build-description">Track spending. Sync offline. Export reports.</span>
                <span className="hero-build-stack" aria-label="Built with">
                  {featuredStack.map((chip) => <span key={chip} className="hero-build-chip">{chip}</span>)}
                </span>
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <RevealOnScroll>
        <section className="hero-stats grid gap-3 sm:grid-cols-3" aria-label="Portfolio highlights">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card section-surface">
              <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <WorkInMotion />
      </RevealOnScroll>

      <RevealOnScroll>
        <TechnicalSkills />
      </RevealOnScroll>
      <RevealOnScroll>
        <AILearning />
      </RevealOnScroll>
      <RevealOnScroll>
        <Interests />
      </RevealOnScroll>
    </div>
  )
}

export default Hero
