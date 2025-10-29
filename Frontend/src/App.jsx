import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollTop';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certification from './pages/Certification';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
       <div className="bg-gray-950 text-amber-100">
        <ScrollToTop />   
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Certification" element={<Certification/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        </div>
    </Router>
  );
}

