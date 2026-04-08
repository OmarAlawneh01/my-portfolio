import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const { theme } = useTheme();

  const contactItems = [
    {
      id: 1,
      icon: FaEnvelope,
      label: 'Email',
      value: 'omaralawneh01@gmail.com',
      href: 'mailto:omaralawneh01@gmail.com',
    },
    {
      id: 2,
      icon: FaPhone,
      label: 'Phone',
      value: '+962 792 545 136',
      href: 'tel:+962792545136',
    },
  ];

  return (
    <section
      className="contact-section"
      id="contact"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="section-container">
        <h2 className="section-title" style={{ color: theme.primary }}>
          Get In Touch
        </h2>
        <p className="section-subtitle" style={{ color: theme.textSecondary }}>
          Let's collaborate on an amazing project
        </p>

        <div className="contact-grid">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                className="contact-card"
                style={{
                  backgroundColor: theme.surfaceLight,
                  boxShadow: `0 4px 12px ${theme.shadow}`,
                }}
              >
                <div className="contact-icon" style={{ color: theme.primary }}>
                  <Icon size={40} />
                </div>
                <h3 style={{ color: theme.text }}>{item.label}</h3>
                <p style={{ color: theme.textSecondary }}>{item.value}</p>
                <span className="contact-arrow">→</span>
              </a>
            );
          })}
        </div>

        <div className="contact-cta">
          <p style={{ color: theme.textSecondary }}>
            Or just say hello on any of my social media platforms
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
