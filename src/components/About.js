import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I'm a passionate Full Stack Web Developer, creating 
            dynamic web applications. I specialize in Mern Stack.
          </p>
          <p className="about-text">
            My journey in web development started when I built my first website at age 17. 
            Since then, I've worked on various projects ranging from small websites 
            to complex Project.
          </p>
          <p className="about-text">
            I believe in clean code, user-centered design, and continuous learning. When I'm not coding, 
            you can find me hiking, reading tech blogs, or contributing to open-source projects.
          </p>
        </div>
        <div className="about-skills">
          <h3 className="skills-title">My Skills</h3>
          <div className="skills-list">
            <div className="skill-item">
              <span>React</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '90%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>JavaScript</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '95%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>Node.js</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '85%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>HTML/CSS</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '90%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;