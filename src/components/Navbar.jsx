import React from 'react';
import './Navbar.css'; // We will create and use this for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        Sonali Surwade
      </a>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a
            href="/Sonali-Surwade-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-resume-button"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;