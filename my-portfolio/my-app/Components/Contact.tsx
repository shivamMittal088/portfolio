import { useState, type FormEvent } from "react"
import { ArrowUpRight, Check, ChevronDown, Copy, Mail, Send, Code2 } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./BrandIcons"
import "./Contact.css"
import { useOnlineStatus } from "../src/useOnlineStatus"

const email = "shivamofficialsm@gmail.com"
const formEndpoint = "https://formsubmit.co/ajax/" + email
const gmailCompose = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(email)
const outlookCompose = "https://outlook.live.com/mail/0/deeplink/compose?to=" + encodeURIComponent(email)

const profiles = [
  {
    label: "GitHub",
    detail: "Projects and source code",
    href: "https://github.com/shivamMittal088",
    icon: GithubIcon,
  },
  {
    label: "LeetCode",
    detail: "Problem-solving practice",
    href: "https://leetcode.com/u/Shivam088/",
    icon: Code2,
  },
]

type FormStatus = "idle" | "sending" | "success" | "activation" | "error"

const Contact = () => {
  const isOnline = useOnlineStatus()
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>("idle")

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setCopyError(false)
      window.setTimeout(() => setCopied(false), 3000)
    } catch {
      setCopyError(true)
    }
  }

  const submitMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isOnline) return
    const form = event.currentTarget
    const formData = new FormData(form)

    // FormSubmit silently discards submissions that fill this hidden field.
    if (formData.get("_honey")) return

    setFormStatus("sending")
    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      })
      if (!response.ok) throw new Error("Submission failed")
      const result: { success?: boolean | string; message?: string } = await response.json()
      if (result.success === false || result.success === "false") {
        if (/activat/i.test(result.message ?? "")) {
          setFormStatus("activation")
          return
        }
        throw new Error("Submission failed")
      }
      form.reset()
      setFormStatus("success")
    } catch {
      setFormStatus("error")
    }
  }

  return (
    <div className="contact-page space-y-6 sm:space-y-8">
      <section className="contact-intro page-intro section-shell">
        <p className="section-label">Contact</p>
        <h1>Let&apos;s build something useful together.</h1>
        <p>
          Have a role, a project, or an idea to discuss? Tell me what you&apos;re working on and how I can help.
        </p>
        <div className="contact-intro-actions">
          <a href={`mailto:${email}`} className="contact-primary-action">
            <Mail size={18} aria-hidden="true" /> Email Shivam
          </a>
          <button className="contact-copy-action" type="button" onClick={copyEmail}>
            {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
            {copied ? "Copied!" : "Copy email"}
          </button>
        </div>
        <p className="contact-email-address">{email}</p>
        <details className="contact-email-options">
          <summary>Use Gmail or Outlook <ChevronDown size={15} aria-hidden="true" /></summary>
          <div className="contact-email-menu">
            <a href={gmailCompose} target="_blank" rel="noopener noreferrer">Open Gmail <ArrowUpRight size={15} aria-hidden="true" /></a>
            <a href={outlookCompose} target="_blank" rel="noopener noreferrer">Open Outlook <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </details>
        {copyError && <p className="contact-copy-error" role="status">Copy unavailable. You can select the email address above.</p>}
      </section>

      <div className="contact-overview-grid">
        <section className="section-shell contact-availability" aria-labelledby="contact-availability-title">
          <p className="section-label">Availability</p>
          <h2 id="contact-availability-title">Open to full-time roles and contract projects</h2>
          <p>Interested in remote or hybrid product teams building thoughtful web experiences.</p>
          <p className="contact-timezone">Working in IST · UTC+5:30</p>
        </section>

        <section className="section-shell contact-linkedin" aria-labelledby="contact-linkedin-title">
          <p className="section-label">Another way to connect</p>
          <h2 id="contact-linkedin-title">Prefer LinkedIn?</h2>
          <p>Send a short note about the opportunity or project and I&apos;ll take it from there.</p>
          <a href="https://www.linkedin.com/in/shivammittal088" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon size={18} className="text-[#0A66C2]" /> Connect on LinkedIn <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </section>
      </div>

      <section className="section-shell contact-form-section" aria-labelledby="contact-form-title">
        <div className="contact-form-heading">
          <div>
            <p className="section-label">Send a message</p>
            <h2 id="contact-form-title">No email app needed</h2>
            <p>Share a few details and I&apos;ll reply to the address you provide.</p>
          </div>
          <Mail size={24} aria-hidden="true" />
        </div>
        <form action={"https://formsubmit.co/" + email} method="POST" onSubmit={submitMessage}>
          <input type="hidden" name="_subject" value="New message from portfolio contact page" />
          <input type="hidden" name="_url" value="https://www.theshivam.dev/contact" />
          <div className="contact-honey" aria-hidden="true">
            <label htmlFor="contact-company">Leave this field empty</label>
            <input id="contact-company" type="text" name="_honey" tabIndex={-1} autoComplete="off" />
          </div>
          <div className="contact-form-fields">
            <div className="contact-field">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={100} placeholder="Your name" />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" />
            </div>
            <div className="contact-field contact-message-field">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" required minLength={10} maxLength={3000} rows={5} placeholder="Tell me about the role, project, or idea…" />
            </div>
          </div>
          <div className="contact-form-footer">
            <p>Your message is sent through <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener noreferrer">FormSubmit</a> to my email.</p>
            <button type="submit" disabled={!isOnline || formStatus === "sending"}>
              <Send size={17} aria-hidden="true" /> {formStatus === "sending" ? "Sending…" : "Send message"}
            </button>
          </div>
          {!isOnline && <p className="contact-form-status contact-form-error" role="status">You&rsquo;re offline. Reconnect to send your message.</p>}
          {formStatus === "success" && <p className="contact-form-status contact-form-success" role="status">Your message was submitted. Thanks for reaching out!</p>}
          {formStatus === "activation" && <p className="contact-form-status contact-form-error" role="alert">The contact form is awaiting email verification. Please use the email options above or copy my address for now.</p>}
          {formStatus === "error" && <p className="contact-form-status contact-form-error" role="alert">The form couldn&apos;t send your message. Please use the email options above or copy my address.</p>}
        </form>
      </section>

      <section className="contact-profiles" aria-labelledby="contact-profiles-title">
        <div>
          <p className="section-label">Find my work</p>
          <h2 id="contact-profiles-title">Explore projects and practice</h2>
        </div>
        <div className="contact-profile-links">
          {profiles.map(({ label, detail, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">
              <Icon size={18} className={label === "GitHub" ? "brand-github" : undefined} aria-hidden="true" />
              <span><strong>{label}</strong><small>{detail}</small></span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Contact
