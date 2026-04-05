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

type CaseStudy = {
  problem: string
  role: string
  techChoices: string[]
  challenges: string[]
  tradeoffs: string[]
  outcome: string[]
}

type Project = {
  title: string
  period?: string
  description: string
  caseStudy: CaseStudy
  highlights: string[]
  techStack: string[]
  images: string[]
  previewMode?: "default" | "portrait"
  screenshotSections?: ScreenshotSection[]
  frontendGithub?: string
  backendGithub?: string
  liveLink?: string
}

type MiniProject = {
  title: string
  period?: string
  summary: string
  learnings: string[]
  techStack: string[]
  github: string
}

const featuredProjects: Project[] = [
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
    caseStudy: {
      problem:
        "Users needed a single place to track spending, inspect monthly patterns, and export structured reports without manual spreadsheet work.",
      role:
        "Owned full-stack delivery across product scoping, backend API design, frontend implementation, and deployment hardening.",
      techChoices: [
        "MERN + TypeScript for faster delivery with type-safe contracts.",
        "Cloudinary + Multer for secure, scalable media uploads.",
        "Axiom logging to monitor production API behavior in real time.",
        "ExcelJS for dynamic report exports with custom date windows.",
      ],
      challenges: [
        "Keeping feeds and profile interactions performant with growing data.",
        "Avoiding redundant calls during rapid UI interactions.",
        "Maintaining observability while shipping quickly.",
      ],
      tradeoffs: [
        "Used session-based auth to simplify browser security and lower token handling complexity.",
        "Shipped analytics depth in phases to prioritize reliability and clean data flow first.",
      ],
      outcome: [
        "Reduced front-end bundle pressure through lazy loading and modal prefetching.",
        "Delivered downloadable monthly and custom-range financial reports.",
        "Improved production debugging speed with centralized request and error logging.",
      ],
    },
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
    caseStudy: {
      problem:
        "Developers needed a focused way to discover relevant peers, connect intentionally, and manage requests without noisy social graph behavior.",
      role:
        "Built both frontend and backend modules including auth, feed ranking logic, connection workflows, and deployment infrastructure.",
      techChoices: [
        "JWT + HTTP-only cookies for secure session handling.",
        "MongoDB for flexible profile and request models.",
        "AWS EC2 + NGINX + PM2 for stable production runtime.",
      ],
      challenges: [
        "Preventing duplicate or invalid connection interactions.",
        "Designing modular controllers without tight coupling between features.",
        "Keeping deployment simple but resilient for continuous updates.",
      ],
      tradeoffs: [
        "Prioritized robust core request/connection workflows before advanced recommendation tuning.",
        "Kept architecture monorepo-friendly to iterate quickly over strict service decomposition.",
      ],
      outcome: [
        "Shipped a production-ready matchmaking flow with reliable request state transitions.",
        "Improved security posture with input sanitization and bcrypt hardening.",
        "Achieved dependable uptime on EC2 with reverse proxy and process management setup.",
      ],
    },
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
    caseStudy: {
      problem:
        "Traditional browsing made it hard to discover content quickly, especially across languages and changing preferences.",
      role:
        "Led frontend architecture and API integrations to combine conversational recommendations with fast browsing UX.",
      techChoices: [
        "Redux Toolkit for predictable state handling and scalable slices.",
        "Firebase Auth for low-friction secure sign-in flows.",
        "TMDB + OpenAI integration for data-rich and context-aware recommendations.",
      ],
      challenges: [
        "Balancing recommendation latency with smooth UI interactions.",
        "Handling offline/loading states while preserving user trust.",
        "Keeping state complexity manageable as feature count grew.",
      ],
      tradeoffs: [
        "Focused first on recommendation quality and UX reliability before social features.",
        "Used curated prompt flows over open-ended chat to keep responses consistent.",
      ],
      outcome: [
        "Delivered multilingual recommendation flows from natural language prompts.",
        "Improved browsing smoothness with shimmer states and memoized selectors.",
        "Maintained consistent sessions by syncing preferences with auth state.",
      ],
    },
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

const miniProjects: MiniProject[] = [
  {
    title: "WebSockets Chat App",
    period: "Mar 2026",
    summary:
      "Small real-time chat app to understand live communication patterns beyond HTTP request-response.",
    learnings: [
      "Online/offline user detection flow",
      "Bidirectional communication using WebSockets",
      "Typing indicator behavior with low-latency updates",
      "HTTP handshake and TCP-backed WebSocket workflow",
    ],
    techStack: ["React", "Node.js", "WebSockets", "Express", "HTTP/TCP"],
    github: "https://github.com/shivamMittal088/WebSockets-ChatApp",
  },
  {
    title: "Redis Practice Mini Project",
    period: "Mar 2026",
    summary:
      "Mini backend practice build focused on performance and scaling fundamentals in distributed systems.",
    learnings: [
      "Redis caching to reduce repeated work",
      "Session-based authentication with server-managed state",
      "Rate limiting for traffic protection and API stability",
      "Practical understanding of scaling-oriented backend patterns",
    ],
    techStack: ["Node.js", "Express", "Redis", "Session Auth", "Rate Limiting"],
    github: "https://github.com/shivamMittal088/redii-prac",
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
        {featuredProjects.map((project) => (
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
                  <span>Key Highlights</span>
                  <span>{Math.min(project.highlights.length, 3)} of {project.highlights.length}</span>
                </header>
                <ul className="mt-3 space-y-2 text-[0.84rem] text-slate-700">
                  {project.highlights.slice(0, 3).map((highlight) => (
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
                    <div className="flex h-44 items-center justify-center sm:h-52">
                      <img
                        src={project.images[0]}
                        alt={`${project.title} primary screenshot`}
                        className={`h-full rounded-xl border-2 border-slate-900 bg-black p-1 object-contain ${
                          project.previewMode === "portrait" ? "w-auto max-w-[8.5rem] sm:max-w-[9.5rem]" : "w-full max-w-full"
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

            <section className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-card)] p-3.5 sm:p-4">
              <div className="flex items-center justify-between">
                <p className="text-[0.58rem] uppercase tracking-[0.32em] text-slate-500">Case Study Snapshot</p>
                <p className="text-[0.58rem] uppercase tracking-[0.25em] text-slate-500">Essential only</p>
              </div>

              <div className="mt-3 grid gap-2.5 md:grid-cols-3">
                <article className="rounded-xl border border-[var(--border-soft)] bg-white p-3">
                  <p className="text-[0.58rem] uppercase tracking-[0.25em] text-slate-500">Problem</p>
                  <p className="mt-1 text-[0.82rem] text-slate-700">{project.caseStudy.problem}</p>
                </article>

                <article className="rounded-xl border border-[var(--border-soft)] bg-white p-3">
                  <p className="text-[0.58rem] uppercase tracking-[0.25em] text-slate-500">Role</p>
                  <p className="mt-1 text-[0.82rem] text-slate-700">{project.caseStudy.role}</p>
                </article>

                <article className="rounded-xl border border-[var(--border-soft)] bg-white p-3">
                  <p className="text-[0.58rem] uppercase tracking-[0.25em] text-slate-500">Outcome</p>
                  <ul className="mt-1.5 space-y-1.5 text-[0.82rem] text-slate-700">
                    {project.caseStudy.outcome.slice(0, 2).map((result) => (
                      <li key={result} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </section>

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

      <section className="section-shell space-y-4">
        <div className="space-y-2">
          <p className="section-label">Mini Projects</p>
          <h2 className="text-xl font-semibold text-slate-900">Focused Learning Builds</h2>
          <p className="section-subtitle text-sm">
            Small projects I built to deeply understand real-time communication, caching, and scaling concepts.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {miniProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-4 space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-slate-900">{project.title}</h3>
                {project.period && (
                  <p className="inline-flex items-center gap-1 rounded-full border border-[var(--border-soft)] px-2 py-0.5 text-[0.58rem] uppercase tracking-[0.12em] text-slate-600">
                    <Calendar size={12} /> {project.period}
                  </p>
                )}
              </div>

              <p className="text-sm text-slate-600">{project.summary}</p>

              <ul className="space-y-1.5 text-[0.82rem] text-slate-700">
                {project.learnings.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 text-[0.65rem] text-slate-600">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--border-soft)] px-2 py-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-1">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-soft)] px-3 py-1 text-[0.72rem]"
                >
                  <Github size={13} /> GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
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
