import React, { useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { projectsData } from '../constants/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

function Projects() {
  const { theme } = useTheme();
  const [gridRef, gridVisible] = useScrollReveal(0.08);
  const videoRefs = useRef(new Map());

  const handleMouseEnter = (id) => {
    const video = videoRefs.current.get(id);
    video?.play().catch(() => {});
  };

  const handleMouseLeave = (id) => {
    const video = videoRefs.current.get(id);
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

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
          Hover a card to preview the project in action
        </p>

        <div
          ref={gridRef}
          className={`projects-grid stagger-grid ${gridVisible ? 'visible' : ''}`}
        >
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="project-card reveal"
              style={{
                backgroundColor: theme.surfaceLight,
                boxShadow: `0 4px 20px ${theme.shadow}`,
              }}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={() => handleMouseLeave(project.id)}
            >
              {/* Video thumbnail area */}
              {project.videoSrc && (
                <div className="project-video-wrapper">
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current.set(project.id, el);
                      else videoRefs.current.delete(project.id);
                    }}
                    className="project-video"
                    src={project.videoSrc}
                    controls
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                  <div className="project-video-overlay">
                    <div className="project-play-hint">
                      <span className="project-play-icon">▶</span>
                      <span className="project-play-label">Preview</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Card body */}
              <div className="project-body">
                <div className="project-header">
                  <h3 style={{ color: theme.text }}>{project.name}</h3>
                  {project.repoUrl && (
                    <a
                      className="project-github-link"
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View on GitHub"
                      style={{ color: theme.primary, borderColor: `${theme.primary}60` }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                </div>

                <p className="project-description" style={{ color: theme.textSecondary }}>
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="tag"
                      style={{
                        backgroundColor: `${theme.primary}12`,
                        color: theme.primary,
                        borderColor: `${theme.primary}30`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
