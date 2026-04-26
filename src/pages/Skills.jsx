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
          Technologies and tools I work with
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
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag"
                    style={{
                      color: theme.primary,
                      backgroundColor: `${theme.primary}12`,
                      borderColor: `${theme.primary}30`,
                    }}
                  >
                    {skill}
                  </span>
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
