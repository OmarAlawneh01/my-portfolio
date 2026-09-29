import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';
import { RESUME_URL } from '../constants/profile';
import './Navbar.css';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy: highlight the section currently crossing the upper third
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-inner shell">
        <a
          href="#top"
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Omar Alawneh
          <span className="navbar-logo-role">QA &amp; Software Engineering</span>
        </a>

        <nav className="navbar-nav" aria-label="Section navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`navbar-link ${activeId === item.id ? 'is-active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="navbar-actions">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-resume"
          >
            Résumé
            <FiArrowUpRight size="0.875rem" />
          </a>

          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {isDarkMode ? <FiSun size="1.0625rem" /> : <FiMoon size="1.0625rem" />}
          </button>

          <button
            className="icon-btn navbar-menu-btn"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX size="1.125rem" /> : <FiMenu size="1.125rem" />}
          </button>
        </div>
      </div>

      <div className={`navbar-sheet ${isMenuOpen ? 'is-open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`navbar-sheet-link ${activeId === item.id ? 'is-active' : ''}`}
            onClick={() => handleNavClick(item.id)}
          >
            <span className="navbar-sheet-index">
              {String(navItems.indexOf(item) + 1).padStart(2, '0')}
            </span>
            {item.label}
          </button>
        ))}
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-sheet-link"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="navbar-sheet-index">↗</span>
          Résumé
        </a>
      </div>
    </header>
  );
}

export default Navbar;
