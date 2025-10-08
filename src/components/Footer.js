import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>DevPortfolio</h3>
          <p>Creating amazing web experiences</p>
        </div>
        
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        
        <div className="footer-social">
          <a href="https://github.com/Sonali07407" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sonalisurwade" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="mailto:your.email@example.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sonali Surwade. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;