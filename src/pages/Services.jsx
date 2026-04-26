import React from 'react';
import { FaCode, FaVial } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Services.css';

const devCapabilities = [
  'Full-stack web applications (React, Node.js, Express)',
  'RESTful API design & database architecture',
  'Responsive, accessible UI with modern CSS',
  'PostgreSQL, MongoDB & database design',
  'Performance optimization & deployment',
];

const qaCapabilities = [
  'Manual testing — black-box, white-box & exploratory',
  'Test case design, plans & defect reporting (Jira, Azure DevOps)',
  'API testing with Postman (REST & SOAP)',
  'Automation with Selenium + Java + TestNG & Cypress',
  'Performance & load testing with Apache JMeter',
];

function Services() {
  const { theme } = useTheme();
  const [cardRef, cardVisible] = useScrollReveal(0.15);

  return (
    <section
      className="services-section"
      id="services"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="section-container">
        <h2 className="section-title" style={{ color: theme.primary }}>
          What I Do
        </h2>
        <p className="section-subtitle" style={{ color: theme.textSecondary }}>
          End-to-end expertise — from building the product to making sure it works
        </p>

        <div
          ref={cardRef}
          className={`what-i-do-card reveal ${cardVisible ? 'visible' : ''}`}
          style={{
            backgroundColor: theme.surfaceLight,
            boxShadow: `0 4px 24px ${theme.shadow}`,
          }}
        >
          <div className="what-i-do-split">
            <div
              className="what-i-do-col"
              style={{
                borderColor: `${theme.primary}25`,
                backgroundColor: `${theme.primary}06`,
              }}
            >
              <div className="what-i-do-col-header">
                <span className="what-i-do-col-icon" style={{ color: theme.primary }}>
                  <FaCode size={20} />
                </span>
                <h3 style={{ color: theme.primary }}>Full-Stack Development</h3>
              </div>
              <ul className="what-i-do-list">
                {devCapabilities.map((item) => (
                  <li key={item} style={{ color: theme.textSecondary }}>
                    <span className="what-i-do-bullet" style={{ color: theme.primary }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="what-i-do-col"
              style={{
                borderColor: `${theme.primary}25`,
                backgroundColor: `${theme.primary}06`,
              }}
            >
              <div className="what-i-do-col-header">
                <span className="what-i-do-col-icon" style={{ color: theme.primary }}>
                  <FaVial size={20} />
                </span>
                <h3 style={{ color: theme.primary }}>Quality Assurance</h3>
              </div>
              <ul className="what-i-do-list">
                {qaCapabilities.map((item) => (
                  <li key={item} style={{ color: theme.textSecondary }}>
                    <span className="what-i-do-bullet" style={{ color: theme.primary }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
