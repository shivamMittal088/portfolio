import { Calendar, Github, ExternalLink } from "lucide-react";

export type ProjectCardProps = {
  title: string;
  period?: string;
  description: string;
  highlights: string[];
  techStack: string[];
  image: string;
  frontendGithub?: string;
  backendGithub?: string;
  liveLink?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  period,
  description,
  highlights,
  techStack,
  image,
  frontendGithub,
  backendGithub,
  liveLink,
}) => {
  return (
    <div className="border rounded-md p-4 bg-white shadow-sm hover:shadow-md transition">
      <div className="flex flex-col sm:flex-row gap-4">
        
        {/* Left Image */}
        <div className="sm:w-40 w-full flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-28 sm:h-full object-cover rounded"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          
          {/* Title + Date */}
          <div className="flex items-start justify-between mb-1">
            <h3 className="text-lg font-semibold">{title}</h3>

            {period && (
              <div className="flex items-center gap-1 text-xs text-gray-500 whitespace-nowrap">
                <Calendar size={14} />
                <span>{period}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-700 mb-2">
            {description}
          </p>

          {/* Highlights */}
          <ul className="list-disc pl-4 space-y-0.5 mb-2 text-sm text-gray-600">
            {highlights.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] bg-gray-100 px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 text-sm">
            {frontendGithub && (
              <a
                href={frontendGithub}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-blue-600 hover:underline"
              >
                <Github size={14} />
                <span>Frontend</span>
              </a>
            )}

            {backendGithub && (
              <a
                href={backendGithub}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-blue-600 hover:underline"
              >
                <Github size={14} />
                <span>Backend</span>
              </a>
            )}

            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-blue-600 hover:underline"
              >
                <ExternalLink size={14} />
                <span>Live</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
