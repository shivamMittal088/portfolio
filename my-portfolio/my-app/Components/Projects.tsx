import { useState } from "react"
import { Calendar, Github, ExternalLink, X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react"

type Project = {
  title: string
  period?: string
  description: string
  highlights: string[]
  techStack: string[]
  images: string[]
  frontendGithub?: string
  backendGithub?: string
  liveLink?: string
}

const projects: Project[] = [
  {
    title: "Expense Tracker",
    period: "Ongoing",
    images: [
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Full-stack expense intelligence platform with hardened authentication, logging, and analytics-first dashboards.",
    highlights: [
      "JWT auth, middleware-based route guards, session tracking, and Axiom structured logging keep accounts secure.",
      "Recurring payment detection plus spending trend APIs deliver proactive financial insights beyond CRUD.",
      "Interactive heatmap and preference-aware views visualize how habits shift over time.",
      "Centralized logging service pipes auth, billing, and anomaly events into Axiom dashboards for fast triage.",
      "Profile uploads, MongoDB persistence, and a typed Node/Express backend keep data consistent across devices.",
    ],
    techStack: [
      "Node.js",
      "Express",
      "TypeScript",
      "MongoDB",
      "React",
      "Tailwind",
      "JWT",
      "Axiom",
    ],
    frontendGithub: "https://github.com/shivamMittal088/Expense-Tracker",
    backendGithub: "https://github.com/shivamMittal088/ExpenseTracker-backend",
    liveLink: "https://www.track-expense.com/",
  },
  {
    title: "DevTinder",
    period: "Oct 2025 – Nov 2025",
    images: [
      "devTinder/Login.png",
      "devTinder/Profile.png",
      "devTinder/Feed.png",
      "devTinder/Connections.png",
      "devTinder/Requests.png",
      "devTinder/WebChat.png",
    ],
    description:
      "Developer matchmaking platform with curated feeds, profile discovery, and real-time request management.",
    highlights: [
      "Designed modular controllers for feed, auth, profile, connection requests, and mutual matches.",
      "Implemented JWT auth with HTTP-only cookies, input sanitization, and bcrypt hardening.",
      "Shipped to AWS EC2 with NGINX reverse proxy, PM2, and MongoDB Atlas for dependable uptime.",
    ],
    techStack: ["MongoDB", "Express", "React", "Node.js", "AWS", "JWT"],
    frontendGithub: "https://github.com/shivamMittal088/devFrontend",
    backendGithub: "https://github.com/shivamMittal088/DevBackend",
    liveLink: "http://13.234.204.27",
  },
  {
    title: "NetflixGPT",
    period: "2025",
    images: [
      "NetflixGPT/Login.png",
      "NetflixGPT/Offline.png",
      "NetflixGPT/Search.png",
      "NetflixGPT/State.png",
    ],
    description:
      "AI-assisted streaming companion that mixes TMDB data with OpenAI prompts for tailored watchlists.",
    highlights: [
      "Built shimmer states, memoized selectors, and Redux Toolkit slices for fluid browsing.",
      "Connected TMDB and ChatGPT APIs to offer multilingual, conversational suggestions.",
      "Hardened Firebase auth flows and synced user preferences for consistent sessions.",
    ],
    techStack: ["React", "Firebase", "Redux", "OpenAI", "TMDB"],
    frontendGithub: "https://github.com/shivamMittal088/netflix-gpt",
    liveLink: "https://netflixgpt-9c971.web.app/",
  },
]

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeImages, setActiveImages] = useState<string[]>([])
  const [activeTitle, setActiveTitle] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const openGallery = (images: string[], title: string, index = 0) => {
    setActiveImages(images)
    setCurrentIndex(index)
    setActiveTitle(title)
    setIsOpen(true)
  }

  const closeGallery = () => setIsOpen(false)

  const next = () => setCurrentIndex((prev) => (prev + 1) % activeImages.length)

  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + activeImages.length) % activeImages.length)

  return (
    <section className="space-y-6">
      <header className="space-y-3 text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.4em] text-slate-500">Projects</p>
        <h1 className="text-3xl font-semibold text-slate-900">Products that taught me the most</h1>
        <p className="text-sm text-slate-600">
          Every build sharpened a different muscle—auth architecture, API orchestration, or UI storytelling.
        </p>
      </header>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-card)] p-5"
          >
            <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-[0.65rem] uppercase tracking-[0.35em] text-slate-500">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {project.period ?? "2025"}
                  </span>
                  <span className="rounded-full border border-[var(--border-soft)] px-3 py-1 text-[10px]">
                    0{index + 1}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-slate-900">{project.title}</h2>
                <p className="text-xs text-slate-600 leading-relaxed">{project.description}</p>

                <ul className="space-y-2 text-xs text-slate-700">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border-soft)] px-2.5 py-0.5 text-[0.65rem] text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-1 text-xs">
                  {project.frontendGithub && (
                    <a
                      href={project.frontendGithub}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] px-3.5 py-1.5 text-slate-900"
                    >
                      <Github size={16} /> Frontend
                    </a>
                  )}
                  {project.backendGithub && (
                    <a
                      href={project.backendGithub}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] px-3.5 py-1.5 text-slate-900"
                    >
                      <Github size={16} /> Backend
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] px-3.5 py-1.5 text-slate-900"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => openGallery(project.images, project.title)}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] px-3.5 py-1.5 text-slate-600"
                  >
                    <ImageIcon size={16} /> Preview shots
                  </button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-[var(--border-soft)] bg-[var(--bg-surface)]">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-full bg-white/90 px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm">
                  <span>Snapshots</span>
                  <button
                    type="button"
                    onClick={() => openGallery(project.images, project.title)}
                    className="rounded-full border border-[var(--border-soft)] px-3 py-0.5 text-[11px] uppercase tracking-[0.35em] text-slate-700"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-3">
          <div className="relative w-full max-w-3xl rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-card)] p-4 shadow-xl">
            <button
              onClick={closeGallery}
              className="absolute right-5 top-5 rounded-full border border-[var(--border-soft)] p-1.5 text-slate-600"
              aria-label="Close gallery"
            >
              <X size={18} />
            </button>

            <div className="mb-3 flex items-center justify-between pr-8 text-xs text-slate-600">
              <p>{activeTitle}</p>
              <span>
                {currentIndex + 1} / {activeImages.length}
              </span>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-[var(--border-soft)] bg-slate-50">
              <img
                src={activeImages[currentIndex]}
                className="max-h-[65vh] w-full object-contain"
                alt={`${activeTitle} preview`}
              />

              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-[var(--border-soft)] bg-white/90 p-2.5 text-slate-900"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={22} />
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-[var(--border-soft)] bg-white/90 p-2.5 text-slate-900"
                aria-label="Next screenshot"
              >
                <ChevronRight size={22} />
              </button>
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
