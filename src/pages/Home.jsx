import React, { useEffect, useState } from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaArrowDown } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import './Home.css';

function Home() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      icon: FaGithub,
      url: 'https://github.com/omaralawneh01',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/omar-alawneh-1a532124b/',
      label: 'LinkedIn',
    },
    {
      icon: FaInstagram,
      url: 'https://www.instagram.com/omar_alawneh01/',
      label: 'Instagram',
    },
    {
      icon: FaFacebook,
      url: 'https://www.facebook.com/omar.alawneh.549',
      label: 'Facebook',
    },
  ];

  const handleScrollDown = () => {
    const servicesSection = document.querySelector('#services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="hero"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <h1 className="hero-greeting" style={{ color: theme.primary }}>
          Hey there👋
        </h1>
        <h2 className="hero-name">I'm Omar Alawneh</h2>
        <h3 className="hero-title">Full-Stack Web Developer</h3>

        <p className="hero-description" style={{ color: theme.textSecondary }}>
          I build beautiful, responsive web applications from concept to production.
          Specialized in modern frontend frameworks and scalable backend systems.
        </p>

        {/* CTA Button */}
        <button
          className="hero-cta"
          onClick={handleScrollDown}
          style={{
            backgroundColor: theme.primary,
            color: '#ffffff',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Explore My Work
          <FaArrowDown size={16} style={{ marginLeft: '8px' }} />
        </button>

        {/* Social Links */}
        <div className="hero-social">
          <p className="social-label" style={{ color: theme.textSecondary }}>
            Connect with me on social media
          </p>
          <div className="social-icons-container">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  title={link.label}
                  style={{
                    color: theme.primary,
                    borderColor: theme.primary,
                  }}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow" style={{ color: theme.primary }}>
          <FaArrowDown size={20} />
        </div>
      </div>
    </section>
  );
}

export default Home;
