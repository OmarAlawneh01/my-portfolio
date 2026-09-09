import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { PROFILE } from '../constants/profile';
import './Footer.css';

const socialLinks = [
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/omar-alawneh-1a532124b/', label: 'LinkedIn' },
  { icon: FaGithub, url: 'https://github.com/omaralawneh01', label: 'GitHub' },
  { icon: FaInstagram, url: 'https://www.instagram.com/omar_alawneh01/', label: 'Instagram' },
  { icon: FaFacebook, url: 'https://www.facebook.com/omar.alawneh.549', label: 'Facebook' },
];

function Footer() {
  return (
    <footer className="footer section--invert">
      <div className="shell footer-inner">
        <div className="footer-identity">
          <p className="footer-name">{PROFILE.name}</p>
          <p className="footer-role">{PROFILE.title}</p>
        </div>

        <div className="footer-social">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label={link.label}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} {PROFILE.name}</p>
        <p className="footer-built">Built with React &amp; Vite</p>
      </div>
    </footer>
  );
}

export default Footer;
