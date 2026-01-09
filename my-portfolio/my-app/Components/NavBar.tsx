import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-lg font-semibold text-gray-900 hover:opacity-70 transition"
        >
          shivam.mittal
        </Link>

        {/* Links */}
        <nav className="flex gap-10 text-sm">
          
          <div className="group relative">
            <Link to="/about" className="text-gray-700 hover:text-black">
              About
            </Link>
            <span className="absolute left-0 -bottom-5 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">
              Who I am
            </span>
          </div>

          <div className="group relative">
            <Link to="/projects" className="text-gray-700 hover:text-black">
              Projects
            </Link>
            <span className="absolute left-0 -bottom-5 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">
              Things I built
            </span>
          </div>

          <div className="group relative">
            <Link to="/experience" className="text-gray-700 hover:text-black">
              Experience
            </Link>
            <span className="absolute left-0 -bottom-5 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">
              My work history
            </span>
          </div>

          <div className="group relative">
            <Link to="/contact" className="text-gray-700 hover:text-black">
              Contact
            </Link>
            <span className="absolute left-0 -bottom-5 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">
              Get in touch
            </span>
          </div>

        </nav>

      </div>
    </header>
  )
}

export default NavBar
