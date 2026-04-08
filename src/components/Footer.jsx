import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Footer() {
  const { theme } = useTheme();

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/omar-alawneh-1a532124b/',
      label: 'LinkedIn',
    },
    {
      icon: FaGithub,
      url: 'https://github.com/omaralawneh01',
      label: 'GitHub',
    },
    {
      icon: FaInstagram,
      url: 'https://www.instagram.com/omar_alawneh01/',
      label: 'Instagram',
    },
    {
      icon: FaTwitter,
      url: 'https://twitter.com/omaralawneh01',
      label: 'Twitter',
    },
    {
      icon: FaFacebook,
      url: 'https://www.facebook.com/omar.alawneh.549',
      label: 'Facebook',
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="footer" 
      style={{ backgroundColor: theme.primary, color: '#ffffff' }}
    >
      <div className="footer-container">
        {/* Content Section */}
        <div className="footer-content">
          <div className="footer-branding">
            <h3 style={{ color: '#ffffff' }}>Omar Alawneh</h3>
            <p>Full-Stack Web Developer | UI/UX Enthusiast</p>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.label}
                  className="social-link"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>
            © {currentYear} Omar Alawneh. All rights reserved. | 
            <span> Crafted with ❤️ and React</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
