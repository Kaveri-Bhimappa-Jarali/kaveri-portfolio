import React from "react";
import { FaCode, FaDatabase, FaCheckCircle } from "react-icons/fa";

export default function Skills() {
  const skillCategories = {
    programming: {
      title: "Programming Languages",
      icon: <FaCode className="text-blue-400 text-xl" />,
      skills: [
        { name: "Java", description: "Object-oriented programming basics" },
        { name: "C", description: "Programming fundamentals" },
        { name: "JavaScript", description: "Web development basics" },
      ],
    },
    web: {
      title: "Web Technologies",
      icon: <FaDatabase className="text-green-400 text-xl" />,
      skills: [
        { name: "HTML5", description: "Basic markup and structure" },
        { name: "CSS3", description: "Styling and simple responsive design" },
        { name: "React", description: "Learning components and hooks" },
        { name: "Node.js", description: "Basic server-side JavaScript" },
        { name: "MongoDB", description: "Learning NoSQL database basics" },
      ],
    },
  };

  return (
    <section id="skills" className="w-full px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6 border-b border-gray-700 pb-3">
          Technical Skills
        </h2>

        {/* Skills Overview */}
        <p className="text-gray-300 text-lg mb-12">
          As a Computer Science Engineering student, I am building a strong
          foundation in programming, software development, and web technologies
          through continuous learning and hands-on projects.
        </p>

        {/* Skill Categories */}
        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(skillCategories).map(([key, category]) => (
            <div
              key={key}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 bg-gray-700 rounded-lg">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-300 text-sm bg-gray-700/30 px-3 py-2 rounded-lg border border-gray-600 hover:border-blue-400/40 transition-colors"
                  >
                    <FaCheckCircle className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                      <p className="text-gray-400 text-xs">{skill.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
