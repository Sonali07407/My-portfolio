// src/components/Projects.jsx

import React from 'react';
import './Projects.css'; // We will update this CSS file next
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Import icons

// Expanded project data
const projectData = [
  {
    title: 'SkillRec',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070',
    description: 'Developed an automated skill-gap analysis engine, reducing manual career mapping effort by 50% through AI-driven insights. Integrated MongoDB, React, and AI-based skill classification. Optimized queries decreasing recommendation fetch time by 40%.',
    tech: ['React.js', 'Express.js', 'MongoDB', 'Node.js'],
    live: '#',
    repo: '#',
  },
  {
    title: 'SigmaGPT',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070',
    description: 'Built a responsive, ChatGPT-style web application featuring full Markdown support. Engineered a scalable backend with Node.js and Express.js. Integrated OpenAI API to generate intelligent responses and MongoDB to manage chat histories.',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'OpenAI'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Airbnb Clone',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1e52d15461?q=80&w=2070',
    description: 'Developed a full-stack web application enabling users to seamlessly browse, create, update, and delete property listings. Implemented robust RESTful APIs with Joi validation to enforce data integrity and built comprehensive error-handling.',
    tech: ['Node.js', 'Express.js', 'MongoDB'],
    live: '#',
    repo: '#',
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <p className="overlay-text">{project.description}</p>
              </div>
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <div className="project-tech">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="icon-button">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="icon-button">
                  <FaGithub /> Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;