import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full shadow-md py-10 flex justify-center pl-[400px]">
      <ul className="flex items-center space-x-10 text-lg font-medium text-fuchsia-100 border border-amber-50 px-6 py-2 rounded-lg">
        <li>
          <a href="#home" className="cursor-pointer hover:text-blue-500 transition-colors duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="cursor-pointer hover:text-blue-500 transition-colors duration-300">
            About Me
          </a>
        </li>
        <li>
          <a href="#skills" className="cursor-pointer hover:text-blue-500 transition-colors duration-300">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="cursor-pointer hover:text-blue-500 transition-colors duration-300">
            Projects
          </a>
        </li>
        <li>
          <a href="#Certificate" className="cursor-pointer hover:text-blue-500 transition-colors duration-300">
            Certificate
          </a>
        </li>
        <li>
          <a href="#contact" className="cursor-pointer hover:text-blue-500 transition-colors duration-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
