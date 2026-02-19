import { useState } from "react"
import {
  Calendar,
  Github,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  House,
  ChartColumn,
  User,
  FileDown,
} from "lucide-react"

type ScreenshotSection = {
  title: string
  imageIndexes: number[]
}

type Project = {
  title: string
  period?: string
  description: string
  highlights: string[]
  techStack: string[]
  images: string[]
  previewMode?: "default" | "portrait"
  screenshotSections?: ScreenshotSection[]
  frontendGithub?: string
  backendGithub?: string
  liveLink?: string
}

const projects: Project[] = [
  {
    title: "Expense Tracker",
    period: "Jan 2026 – Feb 2026",
    previewMode: "portrait",
    images: [
      "expenseTracker/localhost_5173_exports(iPhone 12 Pro).png",
      "expenseTracker/www.track-expense.com_(iPhone 12 Pro).png",
      "expenseTracker/www.track-expense.com_(iPhone 12 Pro) (1).png",
      "expenseTracker/www.track-expense.com_(iPhone 12 Pro) (2).png",
      "expenseTracker/www.track-expense.com_(iPhone 12 Pro) (3).png",
      "expenseTracker/www.track-expense.com_analytics(iPhone 12 Pro).png",
      "expenseTracker/www.track-expense.com_analytics(iPhone 12 Pro) (1).png",
      "expenseTracker/www.track-expense.com_profile(iPhone 12 Pro).png",
      "expenseTracker/www.track-expense.com_profile_69959c721e0e4eccf9ff98fa(iPhone 12 Pro).png",
      "expenseTracker/www.track-expense.com_profile_69959c721e0e4eccf9ff98fa(iPhone 12 Pro) (1).png",
      "expenseTracker/www.track-expense.com_transactions(iPhone 12 Pro).png",
    ],
    screenshotSections: [
      { title: "Home · Quick Actions", imageIndexes: [1, 2, 3, 4] },
      { title: "Analytics · Transactions", imageIndexes: [5, 6, 10] },
      { title: "Profile · Public View", imageIndexes: [7, 8, 9] },
      { title: "Export", imageIndexes: [0] },
    ],
    description:
      "Full-stack expense intelligence platform with hardened authentication, logging, and analytics-first dashboards.",
    highlights: [
      "Implemented session-based authentication with centralized logging for API monitoring and error tracking.",
      "Built scalable followers APIs using cursor-based pagination with infinite scroll and private account handling.",
      "Optimized frontend performance using route/component lazy loading and modal prefetching, reducing bundle size and improving Lighthouse scores.",
      "Enhanced efficiency by debouncing frequent state updates to minimize redundant API calls and configured secure profile photo uploads using Multer with Cloudinary storage.",
      "Built data-driven APIs for recurring payments, expense history, advanced filtering, and spending trend analysis, including an interactive expense heatmap for financial insights.",
      "Implemented dynamic Excel export (monthly custom date range) with formatted reports using ExcelJS.",
    ],
    techStack: [
      "MERN",
      "TypeScript",
      "JWT",
      "Axiom",
      "Cloudinary",
      "ExcelJS",
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

  const getSectionIcon = (title: string) => {
    const key = title.toLowerCase()
    if (key.includes("home")) return House
    if (key.includes("analytics") || key.includes("transactions")) return ChartColumn
    if (key.includes("profile")) return User
    if (key.includes("export")) return FileDown
    return ImageIcon
  }

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
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-3xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-4 sm:p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)] space-y-4"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
              <div className="min-w-0">
                <h2 className="text-lg font-semibold text-slate-900">{project.title}</h2>
                <p className="mt-2 text-[0.85rem] text-slate-600 max-w-2xl">
                  {project.description}
                </p>
              </div>

              <div className="flex min-w-0 flex-col items-start gap-2 sm:items-end">
                {project.period && (
                  <p className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-[var(--border-soft)] px-2 py-1 text-[0.52rem] uppercase tracking-[0.12em] text-slate-600 sm:text-[0.58rem]">
                    <Calendar size={14} />
                    {project.period}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-4 lg:grid lg:grid-cols-[1.1fr_0.9fr]">
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
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-3">
                  <div className="rounded-xl border border-zinc-800 bg-black p-2">
                    <div className="flex h-64 items-center justify-center sm:h-72">
                      <img
                        src={project.images[0]}
                        alt={`${project.title} primary screenshot`}
                        className={`h-full rounded-xl border-2 border-slate-900 bg-black p-1 object-contain ${
                          project.previewMode === "portrait" ? "w-auto max-w-[11rem] sm:max-w-[12rem]" : "w-full max-w-full"
                        }`}
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {(project.screenshotSections?.length
                      ? project.screenshotSections
                      : [{ title: "Screenshots", imageIndexes: project.images.map((_, idx) => idx) }]
                    ).map((section) => {
                      const SectionIcon = getSectionIcon(section.title)
                      const sectionStartIndex = section.imageIndexes[0] ?? 0

                      return (
                        <button
                          key={`${project.title}-${section.title}`}
                          type="button"
                          onClick={() => openGallery(project, sectionStartIndex)}
                          className="inline-flex items-center justify-between rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-left text-xs text-zinc-200"
                        >
                          <span className="inline-flex items-center gap-1.5">
                            <SectionIcon size={14} />
                            <span className="font-medium">{section.title}</span>
                          </span>
                          <span className="text-[0.65rem] text-zinc-400">{section.imageIndexes.length}</span>
                        </button>
                      )
                    })}
                  </div>

                  <div className="mt-3 flex justify-end">
                    <button
                      type="button"
                      onClick={() => openGallery(project, 0)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-900 px-2 py-0.5 text-[0.55rem] font-semibold text-zinc-100 sm:px-2.5 sm:text-[0.6rem]"
                    >
                      <ImageIcon size={16} /> View gallery
                    </button>
                  </div>
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
          <div
            className={`relative w-full rounded-2xl border border-zinc-800 bg-zinc-950 p-5 shadow-xl ${
              galleryProject.previewMode === "portrait" ? "max-w-md" : "max-w-3xl"
            }`}
          >
            <button
              onClick={closeGallery}
              className="absolute right-5 top-5 rounded-full border border-zinc-700 bg-zinc-900 p-1.5 text-zinc-200"
              aria-label="Close gallery"
            >
              <X size={18} />
            </button>

            <div className="mb-3 flex items-center justify-between pr-8 text-xs text-zinc-400">
              <p className="font-semibold text-zinc-100">{galleryProject.title}</p>
              <span>
                {galleryIndex + 1} / {galleryProject.images.length}
              </span>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-black">
              <div className="flex h-[65vh] items-center justify-center p-2 sm:p-3">
                <img
                  src={galleryProject.images[galleryIndex]}
                  className="max-h-full max-w-full rounded-xl border-2 border-slate-900 bg-black p-1 object-contain"
                  alt={`${galleryProject.title} preview`}
                />
              </div>

              <button
                onClick={galleryPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-zinc-700 bg-zinc-900/95 p-2.5 text-zinc-100"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={galleryNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-zinc-700 bg-zinc-900/95 p-2.5 text-zinc-100"
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
