import { Braces, Database, GitBranch, Layers3, Network, Sparkles } from "lucide-react"
import "./TechnicalSkills.css"

const skills = [
  {
    title: "Languages",
    focus: "The foundations",
    icon: Braces,
    items: ["JavaScript", "TypeScript", "C++", "Python", "OOP"],
  },
  {
    title: "Web development",
    focus: "From interface to API",
    icon: Layers3,
    items: ["React", "Tailwind", "Redux", "Node.js", "Express", "REST", "WebSockets", "PWA (offline availability)"],
  },
  {
    title: "Data & infrastructure",
    focus: "Store, cache & deploy",
    icon: Database,
    items: ["MongoDB", "MySQL", "Redis", "Docker", "Nginx"],
  },
  {
    title: "AI & productivity",
    focus: "Work smarter",
    icon: Sparkles,
    items: ["LLM", "Advanced Excel"],
  },
  {
    title: "Developer tools",
    focus: "The everyday essentials",
    icon: GitBranch,
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    title: "Engineering concepts",
    focus: "How the pieces connect",
    icon: Network,
    items: [
      "DSA",
      "Authentication",
      "API Design",
      "HTTP/TCP Workflow",
      "Real-time Communication",
      "Caching Strategy",
      "Rate Limiting",
      "Distributed Systems Basics",
    ],
  },
]

const highlightedSkills = new Set(["WebSockets", "PWA (offline availability)", "LLM", "Advanced Excel"])

const TechnicalSkills = () => (
  <section className="skills-section section-shell" aria-labelledby="technical-skills-title">
    <div className="skills-heading">
      <div>
        <p className="section-label">The toolkit</p>
        <h2 id="technical-skills-title">Technical Skills</h2>
      </div>
      <p className="skills-intro">From real-time apps to offline experiences.<br />The tools I build with.</p>
    </div>

    <ul className="skills-grid">
      {skills.map(({ title, focus, icon: Icon, items }, index) => (
        <li key={title} className="toolkit-card">
          <div className="toolkit-card-top">
            <span className="toolkit-icon"><Icon size={20} strokeWidth={1.6} aria-hidden="true" /></span>
            <span className="toolkit-number" aria-hidden="true">0{index + 1}</span>
          </div>
          <h3>{title}</h3>
          <p className="toolkit-focus">{focus}</p>
          <ul className="toolkit-tags" aria-label={title}>
            {items.map((item) => (
              <li key={item} className={highlightedSkills.has(item) ? "toolkit-tag toolkit-tag-accent" : "toolkit-tag"}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </section>
)

export default TechnicalSkills
