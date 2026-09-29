import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiArrowDown, FiArrowUpRight, FiMail } from 'react-icons/fi';
import mypic from '../assets/images/mypic.jpg';
import { RESUME_URL, PROFILE } from '../constants/profile';
import './Home.css';

const socialLinks = [
  { icon: FaGithub, url: 'https://github.com/omaralawneh01', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/omar-alawneh-1a532124b/', label: 'LinkedIn' },
  { icon: FiMail, url: `mailto:${PROFILE.email}`, label: 'Email' },
];

const facts = [
  { label: 'Role', value: 'QA Specialist' },
  { label: 'Company', value: 'Dalil Information Technology' },
  { label: 'Based in', value: PROFILE.location },
  { label: 'Focus', value: 'Functional · API · Performance · Security' },
];

function scrollTo(selector) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
}

function Home() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid shell">
        <div className="hero-lead">
          <p className="hero-eyebrow">
            <span className="status-dot" aria-hidden="true" />
            QA Specialist · Dalil Information Technology
          </p>

          <h1 className="hero-title">
            I build software — then I break it on purpose.
          </h1>

          <p className="hero-lede">
            I'm <strong>Omar Alawneh</strong>, a Software Engineering graduate working in QA. I test
            enterprise web platforms across functional, API, performance, and security testing —
            bringing a developer's understanding of how systems are built to finding where they fail.
          </p>

          <div className="hero-actions">
            <button className="btn btn--primary" onClick={() => scrollTo('#projects')}>
              View my work
              <FiArrowDown size="1.0rem" />
            </button>
            <button className="btn btn--ghost" onClick={() => scrollTo('#contact')}>
              Get in touch
            </button>
            <a className="hero-resume" href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              Résumé
              <FiArrowUpRight size="0.9375rem" />
            </a>
          </div>

          <div className="hero-social">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label={link.label}
                >
                  <Icon size="1.0625rem" />
                </a>
              );
            })}
          </div>
        </div>

        <aside className="hero-card panel">
          <div className="hero-card-photo">
            <img src={mypic} alt="Omar Alawneh" width="420" height="480" />
          </div>
          <dl className="hero-facts">
            {facts.map((fact) => (
              <div className="hero-fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <button
        className="hero-scroll"
        onClick={() => scrollTo('#about')}
        aria-label="Scroll to About section"
      >
        <span>Scroll</span>
        <FiArrowDown size="0.875rem" />
      </button>
    </section>
  );
}

export default Home;
