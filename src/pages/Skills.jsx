import React from 'react';
import { skillsData } from '../constants/skills';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

function Skills() {
  const [ref, visible] = useScrollReveal();
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section className="section" id="skills">
      <div className="shell">
        <header ref={headRef} className={`section-head reveal ${headVisible ? 'visible' : ''}`}>
          <p className="section-index">05 / Skills</p>
          <h2 className="section-title">Tools &amp; technologies</h2>
          <p className="section-lede">
            What I build with, what I test with, and how I work.
          </p>
        </header>

        <div ref={ref} className={`skills-list stagger ${visible ? 'visible' : ''}`}>
          {skillsData.map((group) => (
            <div className="skills-row reveal" key={group.category}>
              <p className="skills-category">{group.category}</p>
              <div className="skills-chips">
                {group.skills.map((skill) => (
                  <span className="chip" key={skill}>{skill}</span>
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
