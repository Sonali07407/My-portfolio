// src/components/Skills.jsx
import React from 'react';
import './Skills.css'; // <-- Import the CSS

const Skills = () => {
  const skillsList = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API', 'Git/GitHub', 'Responsive Design'];

  return (
    <section id="skills">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skillsList.map(skill => (
          <li key={skill} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;