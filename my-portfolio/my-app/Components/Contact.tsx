import { Mail, Github, Linkedin, Globe, Code2, Send } from "lucide-react"

const contactMethods = [
  {
    label: "Email",
    value: "shivamofficialsm@gmail.com",
    href: "mailto:shivamofficialsm@gmail.com",
    icon: Mail,
    hint: "Fastest response",
  },
  {
    label: "GitHub",
    value: "github.com/shivamMittal088",
    href: "https://github.com/shivamMittal088",
    icon: Github,
    hint: "Code & experiments",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shivamMittal088",
    href: "https://linkedin.com/in/shivamMittal088",
    icon: Linkedin,
    hint: "Let’s connect",
  },
  {
    label: "Website",
    value: "theshivam.dev",
    href: "https://www.theshivam.dev/",
    icon: Globe,
    hint: "More experiments",
  },
  {
    label: "LeetCode",
    value: "leetcode.com/u/Shivam088/",
    href: "https://leetcode.com/u/Shivam088/",
    icon: Code2,
    hint: "Problem solving",
  },
]

const Contact = () => {
  return (
    <section className="space-y-6">
      <header className="space-y-2.5 text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.4em] text-slate-500">Contact</p>
        <h1 className="text-3xl font-semibold text-slate-900">Let’s collaborate on something ambitious</h1>
        <p className="text-sm text-slate-600">
          Whether you have a role, a prototype, or just an idea you want to stress-test, feel free to reach out.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {contactMethods.map((method) => {
          const Icon = method.icon
          return (
            <a
              key={method.label}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              className="group flex items-center gap-3 rounded-xl border border-[var(--border-soft)] bg-[var(--bg-card)] p-3.5"
            >
              <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-2.5 text-slate-700">
                <Icon size={18} />
              </div>
              <div className="flex-1">
                <p className="text-[0.6rem] uppercase tracking-[0.35em] text-slate-500">{method.hint}</p>
                <p className="text-base font-semibold text-slate-900">{method.label}</p>
                <p className="text-xs text-slate-600">{method.value}</p>
              </div>
              <Send className="text-slate-400" size={16} />
            </a>
          )
        })}
      </div>

      <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-card)] p-5 text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.4em] text-slate-500">Availability</p>
        <h2 className="mt-2.5 text-xl font-semibold text-slate-900">Open to full-time or contract opportunities</h2>
        <p className="mt-2 text-xs text-slate-600">
          Prefer hybrid or remote product teams working on thoughtful web experiences.
        </p>
      </div>
    </section>
  )
}

export default Contact
