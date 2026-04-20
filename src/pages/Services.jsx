import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { servicesData } from '../constants/services';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Services.css';

function Services() {
  const { theme } = useTheme();
  const [gridRef, gridVisible] = useScrollReveal(0.1);

  return (
    <section
      className="services-section"
      id="services"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="section-container">
        <h2 className="section-title" style={{ color: theme.primary }}>
          Services
        </h2>
        <p className="section-subtitle" style={{ color: theme.textSecondary }}>
          What I can help you with
        </p>

        <div
          ref={gridRef}
          className={`services-grid stagger-grid ${gridVisible ? 'visible' : ''}`}
        >
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="service-card reveal"
                style={{
                  backgroundColor: theme.surfaceLight,
                  boxShadow: `0 4px 12px ${theme.shadow}`,
                }}
              >
                <div className="service-icon" style={{ color: theme.primary }}>
                  <Icon size={36} />
                </div>
                <h3 style={{ color: theme.text }}>{service.title}</h3>
                <p style={{ color: theme.textSecondary }}>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
