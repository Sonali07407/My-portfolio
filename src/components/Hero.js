import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Sonali Surwade</span>
        </h1>
        <p className="hero-subtitle">Full Stack Web Developer</p>
        <p className="hero-description">
          I create beautiful, responsive websites and web applications using modern technologies.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/profile.jpg" alt="Sonali Surwade" />
      </div>
    </section>
  );
};

export default Hero;