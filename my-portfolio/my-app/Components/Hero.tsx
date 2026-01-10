import React from "react";
import { Link } from "react-router-dom";
import Interests from "./Interests";
import TechnicalSkills from "./TechnicalSkills";

const heroPoints: string[] = [
  "I’m a full-stack developer focused on building clean, scalable web applications using React, TypeScript, Node.js and MongoDB.",
  "Solved 200+ LeetCode problems covering key data structures and algorithms, strengthening problem-solving and optimization skills.",
  "Built production-level projects like Food Web App, NetflixGPT, and DevTinder, focused on creating applications that solve real-life problems.",
];

const Hero: React.FC = () => {
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

              <ul className="ml-4 mb-4 space-y-2 list-disc text-sm text-gray-700 leading-relaxed">
                {heroPoints.map((point, index) => (
                  <li
                    key={index}
                    className={index === 0 ? "text-gray-700" : "text-gray-600"}
                  >
                    {point}
                  </li>
                ))}
              </ul>

               <div className="mt-4 flex flex-wrap items-center gap-4">

  {/* Primary CTA */}
  <Link
    to="/Project"
    className="px-4 p-2 rounded-lg bg-black text-white font-medium
               hover:bg-gray-800 transition"
  >
    View Projects
  </Link>

  {/* Secondary CTA */}
  <Link
    to="/contact"
    className="px-4 py-2 rounded-lg border border-gray-300
               hover:bg-gray-100 transition"
  >
    Contact Me
  </Link>

  {/* Resume CTA (subtle but premium) */}
  <a
    href="/Resume.pdf"
    download
    className="px-4 py-3 text-sm flex items-center gap-2 
               text-gray-600 hover:text-black transition border-black border-b"
  >
    ⬇ Download Resume
  </a>

</div>

            </div>

            {/* Right: Image */}
            <div className="flex justify-center">
              <div className="w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 overflow-hidden">
                <img
                  src="/shivam.jpeg"
                  alt="Shivam Mittal"
                  className="w-full h-full object-cover rounded-full"
                />
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
  );
};

export default Hero;
