import React, { useState, useEffect } from "react";

export default function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mx-15 -mt-25">
      <header className="text-left py-20 md:py-28 relative">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-60 h-60 bg-gray-800/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-60 h-60 bg-gray-800/10 rounded-full blur-3xl"></div>
        </div>

        {/* Greeting with Animation */}
        <div className="relative z-10">
          <h1 className="font-bold text-4xl md:text-5xl text-white leading-snug mb-4">
            Hi, I'm{" "}
            <span className="text-blue-500">
              Kaveri Bhimappa Jarali
            </span>
          </h1>

          {/* Professional Title */}
          <div className="text-xl md:text-2xl text-gray-200 mb-4">
            <span className="text-blue-400 font-medium">Computer Science Engineering Student</span>
          </div>

          {/* Simple Description */}
          <p className="text-lg text-gray-200 mt-4 max-w-2xl leading-relaxed">
            A Computer Science Engineering student learning web development.
            Currently pursuing my degree with a CGPA of
            <span className="text-blue-400 font-semibold"> 9.96/10</span> and building my first web applications.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-500 text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
