import React from 'react';
import { experienceData } from '../constants/experience';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Experience.css';

function Experience() {
  const [ref, visible] = useScrollReveal();
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section className="section" id="experience">
      <div className="shell">
        <header ref={headRef} className={`section-head reveal ${headVisible ? 'visible' : ''}`}>
          <p className="section-index">03 / Experience</p>
          <h2 className="section-title">Professional experience</h2>
          <p className="section-lede">
            Testing enterprise platforms today, building them before that.
          </p>
        </header>

        <ol ref={ref} className={`timeline stagger ${visible ? 'visible' : ''}`}>
          {experienceData.map((job) => (
            <li className="timeline-item reveal" key={job.id}>
              <div className="timeline-meta">
                <span className={`timeline-dot ${job.current ? 'is-current' : ''}`} aria-hidden="true" />
                <span className="timeline-period">{job.period}</span>
                {job.current && <span className="timeline-badge">Current</span>}
              </div>

              <div className="timeline-body">
                <h3 className="timeline-role">{job.role}</h3>
                <p className="timeline-company">
                  {job.company}
                  <span className="timeline-sep">·</span>
                  <span className="timeline-location">{job.location}</span>
                </p>

                <p className="timeline-summary">{job.summary}</p>

                <ul className="timeline-points">
                  {job.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="timeline-tools">
                  {job.tools.map((tool) => (
                    <span className="chip" key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
