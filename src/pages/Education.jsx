import React from 'react';
import { educationData, certificationsData } from '../constants/education';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Education.css';

function Education() {
  const [ref, visible] = useScrollReveal();
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section className="section section--alt" id="education">
      <div className="shell">
        <header ref={headRef} className={`section-head reveal ${headVisible ? 'visible' : ''}`}>
          <p className="section-index">06 / Education</p>
          <h2 className="section-title">Education &amp; certifications</h2>
          <p className="section-lede">
            A formal engineering degree, plus continued training in testing and development.
          </p>
        </header>

        <div ref={ref} className={`education-grid stagger ${visible ? 'visible' : ''}`}>
          <div className="education-block reveal">
            <p className="education-label">Degree</p>
            {educationData.map((edu) => (
              <div className="education-degree" key={edu.id}>
                <h3>{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <p className="education-period">{edu.period}</p>
              </div>
            ))}
          </div>

          <div className="education-block reveal">
            <p className="education-label">Certifications</p>
            <ul className="certifications">
              {certificationsData.map((cert) => (
                <li key={cert.id}>
                  <span className="certification-name">{cert.name}</span>
                  <span className="certification-issuer">{cert.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
