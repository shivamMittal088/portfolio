import { Github, Linkedin, Mail } from "lucide-react"

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/shivamMittal088",
    icon: Github,
    hint: "View code"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shivammittal088",
    icon: Linkedin,
    hint: "Say hi"
  },
  {
    label: "Email",
    href: "mailto:shivamofficialsm@gmail.com",
    icon: Mail,
    hint: "Write"
  }
]

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-5">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-2.5">
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-slate-500">Portfolio</p>
            <h3 className="text-xl font-semibold text-slate-900">Shivam Mittal</h3>
            <p className="text-xs text-slate-600">
              Full-stack developer crafting intentional, scalable web experiences.
            </p>
            <p className="text-[0.65rem] text-slate-500">© {new Date().getFullYear()} Built with care.</p>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="flex gap-2.5">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    className="group flex flex-col items-center gap-1 rounded-xl border border-[var(--border-soft)] bg-[var(--bg-card)] px-2.5 py-2 text-slate-900"
                  >
                    <Icon size={18} />
                    <span className="text-[0.6rem] uppercase tracking-[0.35em] text-slate-500">
                      {social.hint}
                    </span>
                  </a>
                )
              })}
            </div>
            <p className="text-xs text-slate-600">Always excited about thoughtful product work.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
