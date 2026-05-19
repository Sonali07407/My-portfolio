// src/components/Hero.jsx
import React from 'react';
import './Hero.css'; // <-- 1. Import the CSS

const Hero = () => {
  return (
    // 2. Add class names
    <section id="hero" className="hero">
      <h1 className="hero-title">Aniket Gujar</h1>
      <p className="hero-subtitle">I create beautiful, responsive websites and web applications using modern technologies...</p>
      <a href="#projects" className="hero-button">View My Work</a>
    </section>
  );
};

export default Hero;