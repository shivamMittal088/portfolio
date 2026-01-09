import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left */}
        <div className="space-y-3">
          <h3 className="text-white text-lg font-medium">Shivam Mittal</h3>
          <p className="text-sm">
            Full-stack developer building modern, scalable web apps.
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right – Links */}
        <div className="flex md:justify-end">
          <ul className="space-y-4">

            <li>
              <a
                href="https://github.com/shivamMittal088"
                target="_blank"
                className="group flex items-center gap-3 hover:text-white transition"
              >
                <Github size={20} />
                <span>GitHub</span>
                <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">
                  → View my code
                </span>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/shivammittal088"
                target="_blank"
                className="group flex items-center gap-3 hover:text-white transition"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
                <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">
                  → Connect with me
                </span>
              </a>
            </li>

            <li>
              <a
                href="mailto:shivamofficialsm@gmail.com"
                className="group flex items-center gap-3 hover:text-white transition"
              >
                <Mail size={20} />
                <span>Email</span>
                <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">
                  → Send a message
                </span>
              </a>
            </li>

          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer
