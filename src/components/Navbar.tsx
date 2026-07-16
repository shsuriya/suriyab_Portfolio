"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">Suriya B</a>
      
      <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
        <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
        <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
        <li><a href="#contact" className="navbar-cta" onClick={() => setIsOpen(false)}>Hire Me</a></li>
      </ul>
    </nav>
  );
}
