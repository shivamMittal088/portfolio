import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import {
  Calendar,
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
import { GithubIcon } from "./BrandIcons"

type ScreenshotSection = {
  title: string
  imageIndexes: number[]
}

type ProjectImage = {
  src: string
  alt: string
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
  visibleHighlightCount?: number
  techStack: string[]
  images: ProjectImage[]
  previewMode?: "default" | "portrait"
  previewImageIndex?: number
  previewSecondaryIndex?: number
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
    previewImageIndex: 2,
    previewSecondaryIndex: 10,
    images: [
      { src: "expenseTracker/localhost_5173_exports(iPhone 12 Pro).png", alt: "Expense Tracker report export screen on a phone" },
      { src: "expenseTracker/www.track-expense.com_(iPhone 12 Pro).png", alt: "Expense Tracker home screen on a phone" },
      { src: "expenseTracker/www.track-expense.com_(iPhone 12 Pro) (1).png", alt: "Expense Tracker spending trends and analytics screen" },
      { src: "expenseTracker/www.track-expense.com_(iPhone 12 Pro) (2).png", alt: "Expense Tracker spending breakdown by category and payment method" },
      { src: "expenseTracker/www.track-expense.com_(iPhone 12 Pro) (3).png", alt: "Expense Tracker home quick actions, third view" },
      { src: "expenseTracker/www.track-expense.com_analytics(iPhone 12 Pro).png", alt: "Expense Tracker analytics overview on a phone" },
      { src: "expenseTracker/www.track-expense.com_analytics(iPhone 12 Pro) (1).png", alt: "Expense Tracker analytics detail on a phone" },
      { src: "expenseTracker/www.track-expense.com_profile(iPhone 12 Pro).png", alt: "Expense Tracker profile screen on a phone" },
      { src: "expenseTracker/www.track-expense.com_profile_69959c721e0e4eccf9ff98fa(iPhone 12 Pro).png", alt: "Expense Tracker public profile, first view" },
      { src: "expenseTracker/www.track-expense.com_profile_69959c721e0e4eccf9ff98fa(iPhone 12 Pro) (1).png", alt: "Expense Tracker public profile, second view" },
      { src: "expenseTracker/www.track-expense.com_transactions(iPhone 12 Pro).png", alt: "Expense Tracker transactions screen on a phone" },
    ],
    screenshotSections: [
      { title: "Home · Quick Actions", imageIndexes: [1, 4] },
      { title: "Analytics · Transactions", imageIndexes: [2, 3, 5, 6, 10] },
      { title: "Profile · Public View", imageIndexes: [7, 8, 9] },
      { title: "Export", imageIndexes: [0] },
    ],
    description:
      "Full-stack expense intelligence platform with hardened authentication, logging, and analytics-first dashboards.",
    visibleHighlightCount: 5,
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
        "Used JWTs in HTTP-only cookies to keep credentials out of browser-managed storage.",
        "Shipped analytics depth in phases to prioritize reliability and clean data flow first.",
      ],
      outcome: [
        "Reduced front-end bundle pressure through lazy loading and modal prefetching.",
        "Delivered downloadable monthly and custom-range financial reports.",
        "Improved production debugging speed with centralized request and error logging.",
      ],
    },
    highlights: [
      "Created spending analytics with payment breakdowns, trends, and a calendar heatmap.",
      "Added offline expense storage with IndexedDB and sync after reconnecting.",
      "Generated formatted Excel reports for monthly and custom date ranges.",
      "Added Axiom observability for centralized API request and error logging.",
      "Improved efficiency with debouncing, lazy loading, and cursor-based pagination.",
      "Built secure authentication with JWTs in HTTP-only cookies.",
      "Implemented expense history, recurring payments, advanced filters, and edit/restore flows.",
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
      { src: "devTinder/Login.png", alt: "DevTinder login screen" },
      { src: "devTinder/Profile.png", alt: "DevTinder developer profile screen" },
      { src: "devTinder/Feed.png", alt: "DevTinder discovery feed" },
      { src: "devTinder/Connections.png", alt: "DevTinder connections screen" },
      { src: "devTinder/Requests.png", alt: "DevTinder connection requests screen" },
      { src: "devTinder/WebChat.png", alt: "DevTinder one-to-one chat screen" },
    ],
    description:
      "Developer matchmaking platform with real-time, bidirectional WebSocket chat, deployed on AWS EC2 behind NGINX.",
    caseStudy: {
      problem:
        "Developers needed a focused way to discover relevant peers, connect intentionally, and manage requests without noisy social graph behavior.",
      role:
        "Built both frontend and backend modules including auth, feed ranking logic, connection workflows, and deployment infrastructure.",
      techChoices: [
        "JWT + HTTP-only cookies for secure session handling.",
        "MongoDB for flexible profile and request models.",
        "Socket.IO for bidirectional, real-time messaging between connected developers.",
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
      "Built bidirectional, real-time one-to-one chat with WebSockets (Socket.IO).",
      "Deployed on AWS EC2 with NGINX as a reverse proxy and PM2 for process management.",
      "Implemented JWT sign-in with HTTP-only cookies, input validation, and bcrypt password hashing.",
      "Built developer profiles and a discovery feed centered on skills and relevant peers.",
      "Added connection requests with accept/reject states and mutual connections.",
    ],
    techStack: ["MongoDB", "Express", "React", "Node.js", "Socket.IO", "AWS EC2", "NGINX", "JWT"],
    frontendGithub: "https://github.com/shivamMittal088/devFrontend",
    backendGithub: "https://github.com/shivamMittal088/DevBackend",
  },
  {
    title: "NetflixGPT",
    period: "2025",
    images: [
      { src: "NetflixGPT/Login.png", alt: "NetflixGPT login screen" },
      { src: "NetflixGPT/Offline.png", alt: "NetflixGPT offline state" },
      { src: "NetflixGPT/Search.png", alt: "NetflixGPT movie search screen" },
      { src: "NetflixGPT/State.png", alt: "NetflixGPT recommendation state" },
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
      "Implemented Firebase sign-in and persistent user sessions.",
      "Integrated TMDB data for movie browsing and search.",
      "Connected OpenAI prompts to multilingual movie recommendations.",
      "Organized browsing and personalization state with Redux Toolkit.",
      "Added loading and offline states to keep the interface usable during slow or lost connections.",
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
  const [galleryIndexes, setGalleryIndexes] = useState<number[]>([])
  const [gallerySectionTitle, setGallerySectionTitle] = useState<string | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const galleryPosition = galleryIndexes.indexOf(galleryIndex)

  const getSectionIcon = (title: string) => {
    const key = title.toLowerCase()
    if (key.includes("home")) return House
    if (key.includes("analytics") || key.includes("transactions")) return ChartColumn
    if (key.includes("profile")) return User
    if (key.includes("export")) return FileDown
    return ImageIcon
  }

  const openGallery = (project: Project, indexes = project.images.map((_, index) => index), sectionTitle: string | null = null, startIndex = indexes[0]) => {
    setGalleryProject(project)
    setGalleryIndexes(indexes)
    setGalleryIndex(startIndex)
    setGallerySectionTitle(sectionTitle)
  }

  const closeGallery = () => setGalleryProject(null)

  const galleryPrev = () => {
    if (!galleryIndexes.length) return
    setGalleryIndex((prev) => galleryIndexes[(galleryIndexes.indexOf(prev) - 1 + galleryIndexes.length) % galleryIndexes.length])
  }

  const galleryNext = () => {
    if (!galleryIndexes.length) return
    setGalleryIndex((prev) => galleryIndexes[(galleryIndexes.indexOf(prev) + 1) % galleryIndexes.length])
  }

  useEffect(() => {
    if (!galleryProject) return

    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setGalleryProject(null)
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        setGalleryIndex((index) => galleryIndexes[(galleryIndexes.indexOf(index) - 1 + galleryIndexes.length) % galleryIndexes.length])
      }
      if (event.key === "ArrowRight") {
        event.preventDefault()
        setGalleryIndex((index) => galleryIndexes[(galleryIndexes.indexOf(index) + 1) % galleryIndexes.length])
      }
      if (event.key === "Tab") {
        const controls = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-gallery-control]"))
        const first = controls[0]
        const last = controls[controls.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [galleryProject, galleryIndexes])

  return (
    <div className="space-y-6 sm:space-y-8">
      <section className="page-intro projects-intro space-y-3 py-5 text-center">
        <p className="section-label">Projects</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Products that taught me the most
        </h1>
        <p className="section-subtitle text-sm">
          Each build sharpened a different muscle—auth architecture, API orchestration, UI polish, or growth tooling.
        </p>
      </section>

      <section className="space-y-6">
        {featuredProjects.map((project, index) => (
          <article
            key={project.title}
            className="project-card featured-project-card space-y-6 rounded-3xl border border-[var(--border-soft)] bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)] sm:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
              <div className="min-w-0">
                <p className="project-index">Selected work / 0{index + 1}</p>
                <h2 className="text-2xl font-bold text-slate-900">{project.title}</h2>
                <p className="mt-2 text-[0.875rem] text-slate-600 max-w-2xl">
                  {project.description}
                </p>
              </div>

              <div className="flex min-w-0 flex-col items-start gap-2 sm:items-end">
                {project.period && (
                  <p className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-[var(--border-soft)] px-2 py-1 text-[0.75rem] uppercase tracking-[0.12em] text-slate-600 sm:text-[0.75rem]">
                    <Calendar size={14} />
                    {project.period}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <section className="project-highlight-panel order-2 rounded-2xl bg-[var(--bg-card)] p-5 lg:order-2">
                <header className="flex items-center justify-between text-[0.75rem] uppercase tracking-[0.35em] text-slate-500">
                  <span>Key Highlights</span>
                  <span>{Math.min(project.highlights.length, project.visibleHighlightCount ?? 3)} highlights</span>
                </header>
                <ul className="mt-3 space-y-2 text-[0.875rem] text-slate-700">
                  {project.highlights.slice(0, project.visibleHighlightCount ?? 3).map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2 text-[0.75rem] text-slate-600">
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

              <section className="order-1 space-y-3">
                <div className="project-media rounded-2xl border border-zinc-800 bg-zinc-950 p-3">
                  <div className="project-media-screen rounded-xl border border-zinc-800 bg-black p-2">
                    <button
                      type="button"
                      onClick={() => openGallery(project, undefined, null, project.previewImageIndex ?? 0)}
                      className={`project-preview-trigger ${project.previewMode === "portrait" ? "project-preview-trigger-portrait" : "project-preview-trigger-landscape"}`}
                      aria-label={`Open ${project.title} screenshot gallery`}
                    >
                      {project.previewMode === "portrait" ? (
                        <>
                          {project.previewSecondaryIndex !== undefined && (
                            <span className="project-device project-device-secondary" aria-hidden="true">
                              <img src={`/${project.images[project.previewSecondaryIndex].src}`} alt="" loading="lazy" />
                            </span>
                          )}
                          <span className="project-device project-device-primary">
                            <img src={`/${project.images[project.previewImageIndex ?? 0].src}`} alt="" loading="lazy" />
                          </span>
                        </>
                      ) : (
                        <img
                          src={`/${project.images[project.previewImageIndex ?? 0].src}`}
                          alt=""
                          className="project-preview h-full w-full rounded-xl border-2 border-slate-900 bg-black p-1 object-contain"
                          loading="lazy"
                        />
                      )}
                      <span className="project-preview-hint" aria-hidden="true"><ImageIcon size={15} /> View gallery</span>
                    </button>
                  </div>

                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {(project.screenshotSections?.length
                      ? project.screenshotSections
                      : [{ title: "Screenshots", imageIndexes: project.images.map((_, idx) => idx) }]
                    ).map((section) => {
                      const SectionIcon = getSectionIcon(section.title)
                      return (
                        <button
                          key={`${project.title}-${section.title}`}
                          type="button"
                          onClick={() => openGallery(project, section.imageIndexes, section.title)}
                          className="inline-flex items-center justify-between rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-left text-xs text-zinc-200"
                        >
                          <span className="inline-flex items-center gap-1.5">
                            <SectionIcon size={14} />
                            <span className="font-medium">{section.title}</span>
                          </span>
                          <span className="text-[0.75rem] text-zinc-400">{section.imageIndexes.length}</span>
                        </button>
                      )
                    })}
                  </div>

                </div>
              </section>
            </div>

            <details className="case-study group rounded-2xl bg-[var(--bg-card)] p-4 sm:p-5">
              <summary className="flex list-none items-center justify-between gap-4 text-sm font-semibold text-slate-800 [&::-webkit-details-marker]:hidden">
                Read {project.title} case study
                <span className="text-blue-700 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                <article className="rounded-xl border border-[var(--border-soft)] bg-white p-3">
                  <p className="text-[0.75rem] uppercase tracking-[0.25em] text-slate-500">Problem</p>
                  <p className="mt-1 text-[0.875rem] text-slate-700">{project.caseStudy.problem}</p>
                </article>

                <article className="rounded-xl border border-[var(--border-soft)] bg-white p-3">
                  <p className="text-[0.75rem] uppercase tracking-[0.25em] text-slate-500">Role</p>
                  <p className="mt-1 text-[0.875rem] text-slate-700">{project.caseStudy.role}</p>
                </article>

                <article className="rounded-xl border border-[var(--border-soft)] bg-white p-3">
                  <p className="text-[0.75rem] uppercase tracking-[0.25em] text-slate-500">Outcome</p>
                  <ul className="mt-1.5 space-y-1.5 text-[0.875rem] text-slate-700">
                    {project.caseStudy.outcome.map((result) => (
                      <li key={result} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>

              <div className="mt-5 grid gap-5 border-t border-[var(--border-soft)] pt-5 md:grid-cols-3">
                {([
                  ["Technical choices", project.caseStudy.techChoices],
                  ["Challenges", project.caseStudy.challenges],
                  ["Tradeoffs", project.caseStudy.tradeoffs],
                ] as const).map(([title, items]) => (
                  <div key={title}>
                    <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-700">
                      {items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              {project.highlights.length > (project.visibleHighlightCount ?? 3) && (
                <div className="mt-5 border-t border-[var(--border-soft)] pt-5">
                  <h3 className="text-sm font-semibold text-slate-900">More highlights</h3>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-700">
                    {project.highlights.slice(project.visibleHighlightCount ?? 3).map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
              )}
            </details>

            <div className="project-links mt-3 flex flex-wrap gap-2 text-[0.75rem]">
              {project.frontendGithub && (
                <a
                  href={project.frontendGithub}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-soft)] px-3 py-1"
                >
                  <GithubIcon size={14} className="text-[#24292f]" /> Frontend
                </a>
              )}
              {project.backendGithub && (
                <a
                  href={project.backendGithub}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-soft)] px-3 py-1"
                >
                  <GithubIcon size={14} className="text-[#24292f]" /> Backend
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
              className="project-card mini-project-card rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-4 space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-slate-900">{project.title}</h3>
                {project.period && (
                  <p className="inline-flex items-center gap-1 rounded-full border border-[var(--border-soft)] px-2 py-0.5 text-[0.75rem] uppercase tracking-[0.12em] text-slate-600">
                    <Calendar size={12} /> {project.period}
                  </p>
                )}
              </div>

              <p className="text-sm text-slate-600">{project.summary}</p>

              <ul className="space-y-1.5 text-[0.875rem] text-slate-700">
                {project.learnings.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 text-[0.75rem] text-slate-600">
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
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-soft)] px-3 py-1 text-[0.75rem]"
                >
                  <GithubIcon size={13} className="text-[#24292f]" /> GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {galleryProject && createPortal(
        <div
          className="gallery-backdrop fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-900/75 px-3 py-3 sm:items-center sm:py-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${galleryProject.title} screenshot gallery`}
        >
          <div
            className={`gallery-panel relative my-auto w-full rounded-2xl border border-zinc-800 bg-zinc-950 p-3 shadow-xl sm:p-5 ${
              galleryProject.previewMode === "portrait" ? "max-w-md" : "max-w-3xl"
            }`}
          >
            <button
              ref={closeButtonRef}
              data-gallery-control
              onClick={closeGallery}
              className="absolute right-5 top-5 rounded-full border border-zinc-700 bg-zinc-900 p-1.5 text-zinc-200"
              aria-label="Close gallery"
            >
              <X size={18} />
            </button>

            <div className="mb-3 flex items-center justify-between pr-8 text-xs text-zinc-400">
              <p className="font-semibold text-zinc-100">{galleryProject.title}{gallerySectionTitle ? ` · ${gallerySectionTitle}` : ""}</p>
              <span>
                {galleryPosition + 1} / {galleryIndexes.length}
              </span>
            </div>
            <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
              {galleryProject.images[galleryIndex].alt}. Screenshot {galleryPosition + 1} of {galleryIndexes.length}.
            </p>

            <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-black">
              <div className="flex h-[min(65vh,32rem)] items-center justify-center p-2 sm:p-3">
                <img
                  src={`/${galleryProject.images[galleryIndex].src}`}
                  className="max-h-full max-w-full rounded-xl border-2 border-slate-900 bg-black p-1 object-contain"
                  alt={galleryProject.images[galleryIndex].alt}
                />
              </div>

              {galleryIndexes.length > 1 && (
                <>
                  <button
                    data-gallery-control
                    onClick={galleryPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-zinc-700 bg-zinc-900/95 p-2.5 text-zinc-100"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    data-gallery-control
                    onClick={galleryNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-zinc-700 bg-zinc-900/95 p-2.5 text-zinc-100"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>,
        document.body,
      )}
    </div>
  )
}

export default Projects
