import React from 'react';
import { FiCode } from 'react-icons/fi';
import { qaServicesData } from '../constants/services';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Services.css';

const devCapabilities = [
  'Full-stack web applications (React, Node.js, Express)',
  'RESTful API design & database architecture',
  'Authentication systems & CRUD operations',
  'PostgreSQL, MySQL & MongoDB data modelling',
  'Responsive, accessible UI with modern CSS',
];

function Services() {
  const [qaRef, qaVisible] = useScrollReveal();
  const [devRef, devVisible] = useScrollReveal();
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section className="section section--alt" id="practice">
      <div className="shell">
        <header ref={headRef} className={`section-head reveal ${headVisible ? 'visible' : ''}`}>
          <p className="section-index">02 / Practice</p>
          <h2 className="section-title">Quality assurance, end to end</h2>
          <p className="section-lede">
            The testing disciplines I apply on enterprise platforms — from test design through
            automation, performance, and defect management.
          </p>
        </header>

        <div ref={qaRef} className={`practice-grid stagger ${qaVisible ? 'visible' : ''}`}>
          {qaServicesData.map((item, index) => {
            const Icon = item.icon;
            return (
              <article className="practice-card panel reveal" key={item.id}>
                <div className="practice-card-top">
                  <span className="practice-card-icon">
                    <Icon size="1.0625rem" />
                  </span>
                  <span className="practice-card-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>

        <div ref={devRef} className={`practice-dev panel reveal ${devVisible ? 'visible' : ''}`}>
          <div className="practice-dev-head">
            <span className="practice-card-icon">
              <FiCode size="1.0625rem" />
            </span>
            <div>
              <h3>Software development</h3>
              <p>The engineering background behind the testing.</p>
            </div>
          </div>
          <ul className="practice-dev-list">
            {devCapabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
