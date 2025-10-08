import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'Node.js', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'MongoDB', level: 80 },
    { name: 'Express', level: 85 },
    { name: 'Git/Github', level: 85 }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;