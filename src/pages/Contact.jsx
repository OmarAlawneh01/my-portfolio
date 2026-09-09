import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiArrowUpRight, FiMapPin, FiPhone } from 'react-icons/fi';
import { PROFILE, RESUME_URL } from '../constants/profile';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

const socials = [
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/omar-alawneh-1a532124b/', label: 'LinkedIn' },
  { icon: FaGithub, url: 'https://github.com/omaralawneh01', label: 'GitHub' },
];

function Contact() {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="section section--invert contact" id="contact">
      <div ref={ref} className={`shell contact-inner reveal ${visible ? 'visible' : ''}`}>
        <p className="section-index">07 / Contact</p>
        <h2 className="contact-title">Let's talk about quality.</h2>
        <p className="contact-lede">
          Have a role, a project, or a question about testing? Email is the fastest way to reach me.
        </p>

        <a className="contact-email" href={`mailto:${PROFILE.email}`}>
          <span>{PROFILE.email}</span>
          <FiArrowUpRight size={26} />
        </a>

        <div className="contact-meta">
          <a className="contact-meta-item" href={PROFILE.phoneHref}>
            <FiPhone size={15} />
            {PROFILE.phone}
          </a>
          <span className="contact-meta-item">
            <FiMapPin size={15} />
            {PROFILE.location}
          </span>
        </div>

        <div className="contact-links">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                className="contact-social"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={16} />
                {social.label}
              </a>
            );
          })}
          <a
            className="contact-social"
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiArrowUpRight size={16} />
            Résumé
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
