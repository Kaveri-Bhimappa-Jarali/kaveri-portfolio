import React from "react";
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt, FaAward } from "react-icons/fa";

export default function Certification() {
  const certifications = [
    {
      title: "HTML, CSS, JavaScript",
      provider: "Infosys Springboard",
      date: "2024",
      link: "#",
      description: "Web Development Fundamentals",
      icon: <FaCertificate className="text-blue-400" />
    },
    {
      title: "Python Programming",
      provider: "Coursera",
      date: "2024",
      link: "#",
      description: "Python Basics and Data Structures",
      icon: <FaAward className="text-green-400" />
    }
  ];

  return (
    <section id="certifications" className="w-full px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6 border-b border-gray-700 pb-3">
          Certifications & Achievements
        </h2>

        {/* Certifications Overview */}
        <div className="p-6 rounded-lg transition-all duration-200">
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Here are some of the certifications I've earned while learning programming and web development. 
            These represent my commitment to continuous learning and skill development.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 hover:shadow-blue-500/20 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Certificate Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gray-800/50 rounded-lg group-hover:bg-blue-500/10 transition-colors duration-300">
                    {cert.icon}
                  </div>
                  <FaExternalLinkAlt className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                </div>

                {/* Certificate Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {cert.title}
                </h3>

                {/* Provider */}
                <p className="text-blue-400 font-semibold text-sm mb-2">
                  {cert.provider}
                </p>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <span>{cert.date}</span>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
