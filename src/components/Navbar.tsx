"use client";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">Suriya B</a>
      <ul className="navbar-links">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact" className="navbar-cta">Hire Me</a></li>
      </ul>
    </nav>
  );
}
