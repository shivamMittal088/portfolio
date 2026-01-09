import Interests from "./Interests"
import TechnicalSkills from "./TechnicalSkills"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="w-[80%] mx-auto">
      <>

      {/* HERO SECTION */}
      <section className="w-full py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <div>
          <h1 className="text-3xl md:text-3xl font-bold mb-3">
            Hi, I’m Shivam Mittal
          </h1>

          <p className="text-gray-700 text-sm ml-4 mb-4 leading-relaxed">
            I’m a full-stack developer focused on building clean, scalable web
            applications using React, TypeScript, Node.js and MongoDB.
          </p>

          <p className="text-gray-600 ml-4 mb-8 leading-relaxed">
            I enjoy solving real-world problems through code and continuously
            improving my skills by building products people actually use.
          </p>

          <div className="flex gap-4">
            <Link to="/Project" className="bg-black text-white px-4 py-2 rounded-md">
              View Projects
            </Link>
            <Link to="/Contact Me" className="border px-4 py-2 rounded-md">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <div className="w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 overflow-hidden">
            <img src="/shivam.jpeg" alt="Your Photo" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>

      </div>
    </section>

      {/* INTERESTS SECTION */}
      <section className="bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Interests />
        </div>
      </section>

      <TechnicalSkills />
      </>


    </div>
  )
}

export default Hero
