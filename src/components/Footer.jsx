// src/components/Footer.jsx

import React from 'react';
import './Footer.css'; // We will create this file next
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import the icons you want

const Footer = () => {
  // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-socials">
          {/* === IMPORTANT: Replace '#' with your actual social media links === */}
          <a href="https://github.com/Aniket-ANK" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/aniket-ank" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          
        </div>

        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Aniket Gujar. All rights reserved.</p>
        </div>

        <div className="footer-back-to-top">
          <span onClick={scrollToTop} className="back-to-top-button">
            Back to Top ↑
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;