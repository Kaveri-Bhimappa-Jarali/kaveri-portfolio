import React from "react";
import AboutMe from './AboutMe';
import Skills from './Skills';
import Certificate from './Certification';
import Projects from './Projects';
import Contact from './Contact';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <section id="home">
        <Header />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="Certificate">
        <Certificate />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
