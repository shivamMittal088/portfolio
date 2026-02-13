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
  const [galleryProject, setGalleryProject] = useState<Project | null>(null)
  const [galleryIndex, setGalleryIndex] = useState(0)

  const openGallery = (project: Project, index = 0) => {
    setGalleryProject(project)
    setGalleryIndex(index)
  }

  const closeGallery = () => setGalleryProject(null)

  const galleryPrev = () => {
    if (!galleryProject) return
    const total = galleryProject.images.length
    setGalleryIndex((prev) => (prev - 1 + total) % total)
  }

  const galleryNext = () => {
    if (!galleryProject) return
    const total = galleryProject.images.length
    setGalleryIndex((prev) => (prev + 1) % total)
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <section className="section-shell space-y-2 text-center">
        <p className="section-label">Projects</p>
        <h1 className="text-2xl font-semibold text-slate-900">
          Products that taught me the most
        </h1>
        <p className="section-subtitle mx-auto text-sm">
          Each build sharpened a different muscle—auth architecture, API orchestration, UI polish, or growth tooling.
        </p>
      </section>

      <section className="section-shell space-y-4">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="rounded-3xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.35em] text-slate-500">
                  <Calendar size={16} />
                  {project.period ?? "2025"}
                </p>
                <h2 className="text-lg font-semibold text-slate-900">{project.title}</h2>
                <p className="mt-2 text-[0.85rem] text-slate-600 max-w-2xl">
                  {project.description}
                </p>
              </div>
              <span className="section-chip">0{index + 1}</span>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <section className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-card)] p-3.5">
                <header className="flex items-center justify-between text-[0.58rem] uppercase tracking-[0.35em] text-slate-500">
                  <span>Highlights</span>
                  <span>{project.highlights.length} notes</span>
                </header>
                <ul className="mt-3 space-y-2 text-[0.84rem] text-slate-700">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2 text-[0.68rem] text-slate-600">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border-soft)] px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <div className="relative overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-card)]">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="h-56 w-full object-cover"
                    loading="lazy"
                  />
                  <button
                    type="button"
                    onClick={() => openGallery(project, 0)}
                    className="absolute right-2 top-2 inline-flex items-center gap-1.5 rounded-full border border-[var(--border-soft)] bg-white/95 px-2.5 py-0.5 text-[0.6rem] font-semibold text-slate-900"
                  >
                    <ImageIcon size={16} /> View gallery
                  </button>
                </div>

                <div className="flex gap-2 overflow-x-auto pb-1">
                  {project.images.map((image, imgIndex) => (
                    <button
                      key={`${project.title}-thumb-${imgIndex}`}
                      type="button"
                      onClick={() => openGallery(project, imgIndex)}
                      className="h-14 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-[var(--border-soft)]"
                    >
                      <img src={image} alt={`${project.title} screenshot ${imgIndex + 1}`} className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-3 flex flex-wrap gap-2 text-[0.68rem]">
              {project.frontendGithub && (
                <a
                  href={project.frontendGithub}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-soft)] px-3 py-1"
                >
                  <Github size={14} /> Frontend
                </a>
              )}
              {project.backendGithub && (
                <a
                  href={project.backendGithub}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-soft)] px-3 py-1"
                >
                  <Github size={14} /> Backend
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-soft)] px-3 py-1"
                >
                  <ExternalLink size={14} /> Live
                </a>
              )}
            </div>
          </article>
        ))}
      </section>

      {galleryProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/65 px-3 py-6">
          <div className="relative w-full max-w-3xl rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-card)] p-5 shadow-xl">
            <button
              onClick={closeGallery}
              className="absolute right-5 top-5 rounded-full border border-[var(--border-soft)] p-1.5 text-slate-600"
              aria-label="Close gallery"
            >
              <X size={18} />
            </button>

            <div className="mb-3 flex items-center justify-between pr-8 text-xs text-slate-600">
              <p className="font-semibold text-slate-900">{galleryProject.title}</p>
              <span>
                {galleryIndex + 1} / {galleryProject.images.length}
              </span>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-[var(--border-soft)] bg-slate-50">
              <img
                src={galleryProject.images[galleryIndex]}
                className="max-h-[65vh] w-full object-contain"
                alt={`${galleryProject.title} preview`}
              />

              <button
                onClick={galleryPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-[var(--border-soft)] bg-white/90 p-2.5 text-slate-900"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={galleryNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-[var(--border-soft)] bg-white/90 p-2.5 text-slate-900"
                aria-label="Next screenshot"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
