import { useState } from "react";
import { Calendar, Github, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  title: string;
  period?: string;
  description: string;
  highlights: string[];
  techStack: string[];
  images: string[]; // 🔥 multiple images
  frontendGithub?: string;
  backendGithub?: string;
  liveLink?: string;
};

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImages, setActiveImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (images: string[], index = 0) => {
    setActiveImages(images);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeGallery = () => setIsOpen(false);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % activeImages.length);

  const prev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? activeImages.length - 1 : prev - 1
    );

  const projects: Project[] = [
    {
      title: "DevTinder",
      period: "Oct 2025 – Nov 2025",
      images: [
        "devTinder/Login.png",
        "devTinder/Profile.png",
        "devTinder/Feed.png",
        "devTinder/Connections.png",
        "devTinder/Requests.png",
        "devTiner/WebChat.png",
      ],
      description:
       "Developed a scalable Tinder-style developer matching platform using the MERN stack with a responsive and interactive UI.",
      highlights: [
        "Built complete backend modules, including Feed, Login, Signup, Connection Requests, Profile, Requests, and Mutual Connections.",
      "Implemented secure JWT-based authentication with HTTP-only cookies to protect user sessions and prevent token theft.",
      "Added a Mutual Connection algorithm and dynamic progress bar to improve user engagement and profile insights.",
      "Enhanced security through input sanitization, bcrypt password hashing, and token validation middleware.",
      "Deployed the full-stack application on AWS EC2 using NGINX reverse proxy, PM2, and environment-based production configuration.",
      "Followed modular architecture principles to ensure scalability, maintainability, and clean separation of concerns.",
      ],
      techStack: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "JWT",
        "AWS",
      ],
      frontendGithub: "https://github.com/shivamMittal088/devFrontend",
      backendGithub: "https://github.com/shivamMittal088/DevBackend",
      liveLink: "http://13.234.204.27",
    },
    {
      title: "NetflixGPT",
      period: "2025",
      images: [
        "NetflixGPT/Login.png",
        "NetflixGPT/Offline.png",
        "NetflixGPT /Search.png",
        "NetflixGPT/State.png",
      ],
      description:
        "AI-powered movie recommendation platform using OpenAI and TMDB.",
      highlights: [
        "Integrated the TMDB API to fetch real-time movie data and built a shimmer UI for smooth loading states.",
      "Incorporated the OpenAI API (ChatGPT) to generate AI-powered movie suggestions with multi-language support.",
      "Improved performance using memoization, custom hooks, and structured state management with Redux Toolkit.",
      ],
      techStack: [
        "React",
        "Firebase",
        "Redux",
        "OpenAI API",
        "TMDB API",
      ],
      frontendGithub: "https://github.com/shivamMittal088/netflix-gpt",
      liveLink: "https://netflixgpt-9c971.web.app/",
    },
  ];

  return (
    <section className="w-[70%] mx-auto py-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border rounded-md p-4 bg-white shadow-sm"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Image Preview */}
              <div
                className="sm:w-40 w-full cursor-pointer"
                onClick={() => openGallery(project.images)}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-28 object-cover rounded hover:opacity-90"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  {project.period && (
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar size={14} />
                      {project.period}
                    </div>
                  )}
                </div>

                <p className="text-sm text-gray-700 mb-2">
                  {project.description}
                </p>

                <ul className="list-disc pl-4 text-sm text-gray-600 mb-2">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] bg-gray-100 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-sm">
                  {project.frontendGithub && (
                    <a
                      href={project.frontendGithub}
                      target="_blank"
                      className="flex items-center gap-1 text-blue-600"
                    >
                      <Github size={14} /> Frontend
                    </a>
                  )}
                  {project.backendGithub && (
                    <a
                      href={project.backendGithub}
                      target="_blank"
                      className="flex items-center gap-1 text-blue-600"
                    >
                      <Github size={14} /> Backend
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="flex items-center gap-1 text-blue-600"
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 Image Slider Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            onClick={closeGallery}
            className="absolute top-6 right-6 text-white"
          >
            <X size={28} />
          </button>

          <button
            onClick={prev}
            className="absolute left-6 text-white"
          >
            <ChevronLeft size={36} />
          </button>

          <img
            src={activeImages[currentIndex]}
            className="max-w-[90%] max-h-[80%] rounded"
          />

          <button
            onClick={next}
            className="absolute right-6 text-white"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
