import { EmailIcon, GithubIcon, LinkedinIcon } from "./BrandIcons"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { useSyncExternalStore } from "react"

// Hydrate with the same year embedded by prerendering, then use the visitor's year.
const getBuildYear = () => Number(import.meta.env.VITE_BUILD_YEAR)
const getCurrentYear = () => new Date().getFullYear()
const subscribeToYear = () => () => undefined

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/shivamMittal088",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shivammittal088",
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:shivamofficialsm@gmail.com",
    icon: EmailIcon,
  }
]

const Footer = () => {
  const year = useSyncExternalStore(subscribeToYear, getCurrentYear, getBuildYear)

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <p className="footer-eyebrow">Have something in mind?</p>
          <Link to="/contact" className="footer-invite">Let’s build it.<ArrowUpRight size={28} strokeWidth={1.4} aria-hidden="true" /></Link>
        </div>
        <div className="footer-socials">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="footer-link"
              >
                <Icon size={16} aria-hidden="true" />
                <span>{social.label}</span>
              </a>
            )
          })}
        </div>
      </div>
      <div className="footer-bottom"><p>© {year} Shivam Mittal</p><p>Built with intent. Always evolving.<span aria-hidden="true"> ✳</span></p></div>
    </footer>
  )
}

export default Footer
