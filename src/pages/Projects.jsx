import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { projectsData } from '../constants/projects';
import EnhancedVideo from '../components/EnhancedVideo';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

function Projects() {
  const { theme } = useTheme();
  const [hoveredId, setHoveredId] = useState(null);
  const [gridRef, gridVisible] = useScrollReveal(0.08);

  return (
    <section
      className="projects-section"
      id="projects"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="section-container">
        <h2 className="section-title" style={{ color: theme.primary }}>
          Featured Projects
        </h2>
        <p className="section-subtitle" style={{ color: theme.textSecondary }}>
          A selection of recent work with live demos
        </p>

        <div
          ref={gridRef}
          className={`projects-grid stagger-grid ${gridVisible ? 'visible' : ''}`}
        >
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="project-card reveal"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                backgroundColor: theme.surfaceLight,
                boxShadow: hoveredId === project.id
                  ? `0 20px 40px ${theme.shadowHeavy}`
                  : `0 6px 20px ${theme.shadow}`,
              }}
            >
              <div className="project-header">
                <h3 style={{ color: theme.primary }}>{project.name}</h3>
                <div className="project-links">
                  {project.repoUrl && (
                    <a
                      className="project-link"
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: theme.primary,
                        borderColor: theme.primary,
                      }}
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>

              <p className="project-description" style={{ color: theme.text }}>
                {project.description}
              </p>

              {/* Tags */}
              <div className="project-tags">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="tag"
                    style={{
                      backgroundColor: `${theme.primary}15`,
                      color: theme.primary,
                      borderColor: theme.primary,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Enhanced Video Component */}
              {project.videoSrc && (
                <EnhancedVideo 
                  src={project.videoSrc} 
                  title={project.name}
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
