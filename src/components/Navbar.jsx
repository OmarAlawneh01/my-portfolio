import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './Navbar.css';

function Navbar() {
  const { isDarkMode, toggleTheme, theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className="navbar" 
      style={{
        backgroundColor: theme.surfaceLight,
        boxShadow: isScrolled ? `0 4px 12px ${theme.shadow}` : 'none',
      }}
    >
      <div className="navbar-container">
        {/* Logo */}
        <a href="#" className="logo" style={{ color: theme.primary }}>
          OMAR
        </a>

        {/* Navigation */}
        <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.href}
              className="nav-link"
              onClick={() => handleNavClick(item.href)}
              style={{ color: theme.text }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="navbar-actions">
          {/* CV Download */}
          <a
            href="https://docs.google.com/document/d/11YUUf3KDXD3HevVijZSrK_AXP5m4P5P5fKeii5bT40o/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-link"
            style={{
              color: theme.primary,
              borderColor: theme.primary,
            }}
          >
            Resume
          </a>

          {/* Dark Mode Toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            style={{
              color: theme.primary,
              borderColor: theme.primary,
            }}
            title="Toggle dark mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: theme.primary }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
