import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Airbnb website",
      description: "A full-stack website with user authentication...and many more.",
      image: "/images/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://ecommerce-demo.com"
    },
    {
      id: 2,
      title: "Skill Recommendation System",
      description: "Content- Based Filtering. Recommends Skills Similar to the ones the user already has",
      image: "/images/project2.jpg",
      technologies: ["React", "Firebase"],
      github: "https://github.com/yourusername/task-app",
      demo: "https://task-app-demo.com"
    },
    {
      id: 3,
      title: "Resume Service",
      description: "A responsive Resume service Web.",
      image: "/images/project3.jpg",
      technologies: ["HTML", "CSS", "Bootstrap"],
      github: "https://sonali07407.github.io/Resume-service/",
      demo: "https://sonali07407.github.io/Resume-service/"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-btn">
                  Live Demo
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