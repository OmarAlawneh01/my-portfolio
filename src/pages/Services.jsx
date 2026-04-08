import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { servicesData } from '../constants/services';
import './Services.css';

function Services() {
  const { theme } = useTheme();

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

        <div className="services-grid">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="service-card"
                style={{
                  backgroundColor: theme.surfaceLight,
                  boxShadow: `0 4px 12px ${theme.shadow}`,
                }}
              >
                <div className="service-icon" style={{ color: theme.primary }}>
                  <Icon size={40} />
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
