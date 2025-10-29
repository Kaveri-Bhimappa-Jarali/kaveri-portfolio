import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/Projects");
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();
        setProject(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };

    fetchProjects();
  }, []);

  // Project Card
  const ProjectCard = ({ proj }) => {
    return (
      <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">

        {/* Content */}
        <div className="p-5">
          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-2">{proj.title}</h3>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-4">{proj.desc}</p>

          {/* Tech Stack */}
          <div className="mb-4">
            <span className="font-semibold text-white text-sm">
              Technologies:
            </span>
            <div className="flex flex-wrap gap-2 mt-2">
              {(proj.tech || []).map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3">
            {proj.github && (
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm rounded-md bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white transition"
              >
                <FaGithub /> Code
              </a>
            )}
            {proj.live && (
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm rounded-md bg-blue-500/20 text-blue-300 border border-blue-400/30 hover:bg-blue-500/30 transition"
              >
                <FaExternalLinkAlt /> Live
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="w-full px-4 py-16 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10 border-b border-gray-700 pb-3">
          Featured Projects
        </h2>

        {project.length === 0 ? (
          <div className="text-gray-400 text-center">No projects yet.</div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {project.map((proj, i) => (
              <ProjectCard key={i} proj={proj} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
