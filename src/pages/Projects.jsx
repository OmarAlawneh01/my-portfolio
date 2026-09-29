import React, { useRef } from 'react';
import { FiPlay, FiArrowUpRight } from 'react-icons/fi';
import { projectsData } from '../constants/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

function Projects() {
  const [gridRef, gridVisible] = useScrollReveal();
  const [headRef, headVisible] = useScrollReveal();
  const videoRefs = useRef(new Map());

  const handleMouseEnter = (id) => {
    videoRefs.current.get(id)?.play().catch(() => {});
  };

  const handleMouseLeave = (id) => {
    const video = videoRefs.current.get(id);
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section className="section section--alt" id="projects">
      <div className="shell">
        <header ref={headRef} className={`section-head reveal ${headVisible ? 'visible' : ''}`}>
          <p className="section-index">04 / Projects</p>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-lede">
            Personal full-stack projects — the development side of my background. Hover a card to
            preview it running.
          </p>
        </header>

        <div ref={gridRef} className={`projects-grid stagger ${gridVisible ? 'visible' : ''}`}>
          {projectsData.map((project, index) => (
            <article
              key={project.id}
              className="project-card panel reveal"
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={() => handleMouseLeave(project.id)}
            >
              {project.videoSrc && (
                <div className="project-media">
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
                    aria-label={`${project.name} preview`}
                  />
                  <span className="project-media-hint" aria-hidden="true">
                    <FiPlay size="0.8125rem" />
                    Preview
                  </span>
                </div>
              )}

              <div className="project-body">
                <span className="project-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags?.map((tag) => (
                    <span className="chip" key={tag}>{tag}</span>
                  ))}
                </div>

                {project.repoUrl && (
                  <a
                    className="project-link"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View source
                    <FiArrowUpRight size="0.9375rem" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
