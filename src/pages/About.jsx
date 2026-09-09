import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { languagesData } from '../constants/education';
import './About.css';

const glance = [
  { label: 'Degree', value: 'B.Sc. Software Engineering — JUST' },
  { label: 'Now', value: 'QA Specialist, Dalil Information Technology' },
  { label: 'Builds with', value: 'React · Node.js · PHP · SQL' },
  { label: 'Tests with', value: 'Postman · Fiddler · JMeter · Selenium · Azure DevOps' },
  {
    label: 'Languages',
    value: languagesData.map((lang) => `${lang.name} (${lang.level})`).join(' · '),
  },
];

function About() {
  const [ref, visible] = useScrollReveal();
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section className="section" id="about">
      <div className="shell">
        <header ref={headRef} className={`section-head reveal ${headVisible ? 'visible' : ''}`}>
          <p className="section-index">01 / About</p>
          <h2 className="section-title">Where engineering and quality meet</h2>
          <p className="section-lede">
            I test software the way it was built — because I've built it.
          </p>
        </header>

        <div ref={ref} className={`about-grid stagger ${visible ? 'visible' : ''}`}>
          <div className="about-prose reveal">
            <p>
              I'm a Software Engineer by training and a QA Specialist by trade. I hold a B.Sc. in
              Software Engineering and have hands-on backend development experience — building
              authentication systems, CRUD operations, and REST APIs with PHP, Node.js, and SQL
              databases. That background now shows up in how I test: I don't just click through a
              feature and confirm it "works," I reason about the system underneath it — how the
              request flows through the API, what the database is doing, where session state lives,
              what a malicious or malformed input would do to it.
            </p>
            <p>
              As a QA Specialist, I run the full testing lifecycle on enterprise web platforms —
              functional, regression, API, performance, and security testing — using tools like
              Postman, Fiddler, Apache JMeter, and Selenium, and tracking every defect through Azure
              DevOps with clear, reproducible steps. I've caught critical issues other passes missed,
              things like broken access control between accounts, session handling flaws, and data
              integrity gaps, because I was testing the system the way an engineer would try to break
              it, not just the way a user manual describes it.
            </p>
            <p className="about-closing">
              That's the value I bring: I speak the language of the developers whose code I test,
              which makes my bug reports sharper, my test cases more targeted, and my collaboration
              with engineering teams faster.
            </p>
          </div>

          <aside className="about-glance panel reveal">
            <p className="about-glance-title">At a glance</p>
            <dl>
              {glance.map((item) => (
                <div className="about-glance-row" key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default About;
