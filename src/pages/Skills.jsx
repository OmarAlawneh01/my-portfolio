import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { skillsData } from '../constants/skills';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

function Skills() {
  const { theme } = useTheme();
  const [containerRef, isVisible] = useScrollReveal(0.1);

  return (
    <section
      className="skills-section"
      id="skills"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="section-container">
        <h2 className="section-title" style={{ color: theme.primary }}>
          Skills & Expertise
        </h2>
        <p className="section-subtitle" style={{ color: theme.textSecondary }}>
          Technologies and skills I work with
        </p>

        <div
          ref={containerRef}
          className={`skills-container stagger-grid ${isVisible ? 'visible' : ''}`}
        >
          {skillsData.map((category) => (
            <div
              key={category.category}
              className="skill-category reveal"
              style={{
                backgroundColor: theme.surface,
                boxShadow: `0 4px 12px ${theme.shadow}`,
              }}
            >
              <h3 style={{ color: theme.primary }}>{category.category}</h3>

              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span style={{ color: theme.text }}>{skill.name}</span>
                      <span
                        className="skill-level"
                        style={{ color: theme.primary }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar" style={{ backgroundColor: `${theme.primary}20` }}>
                      <div
                        className="skill-progress"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
