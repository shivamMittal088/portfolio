import { Mail, Github, Linkedin, Globe, Code2, Send } from "lucide-react"

const contactMethods = [
  {
    label: "Email",
    value: "shivamofficialsm@gmail.com",
    href: "mailto:shivamofficialsm@gmail.com",
    icon: Mail,
    hint: "Fastest response",
    color: "#ea580c",
    tint: "rgba(234, 88, 12, 0.1)",
  },
  {
    label: "GitHub",
    value: "github.com/shivamMittal088",
    href: "https://github.com/shivamMittal088",
    icon: Github,
    hint: "Code & experiments",
    color: "#111827",
    tint: "rgba(17, 24, 39, 0.08)",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shivamMittal088",
    href: "https://linkedin.com/in/shivamMittal088",
    icon: Linkedin,
    hint: "Let’s connect",
    color: "#0a66c2",
    tint: "rgba(10, 102, 194, 0.1)",
  },
  {
    label: "Website",
    value: "theshivam.dev",
    href: "https://www.theshivam.dev/",
    icon: Globe,
    hint: "More experiments",
    color: "#16a34a",
    tint: "rgba(22, 163, 74, 0.1)",
  },
  {
    label: "LeetCode",
    value: "leetcode.com/u/Shivam088/",
    href: "https://leetcode.com/u/Shivam088/",
    icon: Code2,
    hint: "Problem solving",
    color: "#b45309",
    tint: "rgba(180, 83, 9, 0.12)",
  },
]

const Contact = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <section className="section-shell space-y-1.5 text-center">
        <p className="text-[0.6rem] uppercase tracking-[0.35em] text-slate-500">Contact</p>
        <h1 className="text-lg font-semibold text-slate-900">Let’s collaborate on something ambitious</h1>
        <p className="text-[0.82rem] text-slate-600">
          Whether you have a role, a prototype, or just an idea you want to stress-test, feel free to reach out.
        </p>
      </section>

      <section className="section-shell space-y-3">
        <div className="grid gap-3 md:grid-cols-2">
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                className="flex items-center gap-2 rounded-xl border border-[var(--border-soft)] bg-[var(--bg-surface)] px-3 py-2"
              >
                <div
                  className="rounded-xl border p-2"
                  style={{
                    backgroundColor: method.tint,
                    borderColor: method.color,
                    color: method.color,
                  }}
                >
                  <Icon size={16} />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-[0.55rem] uppercase tracking-[0.35em] text-slate-500">{method.hint}</p>
                  <p className="text-sm font-semibold text-slate-900">{method.label}</p>
                  <p className="text-[0.75rem] text-slate-600">{method.value}</p>
                </div>
                <Send className="text-slate-400" size={14} />
              </a>
            )
          })}
        </div>
      </section>

      <section className="section-shell space-y-1 text-center">
        <p className="text-[0.58rem] uppercase tracking-[0.35em] text-slate-500">Availability</p>
        <h2 className="text-base font-semibold text-slate-900">Open to full-time or contract opportunities</h2>
        <p className="text-[0.78rem] text-slate-600">
          Prefer hybrid or remote product teams working on thoughtful web experiences.
        </p>
      </section>
    </div>
  )
}

export default Contact
