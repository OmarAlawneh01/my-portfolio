import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { lightTheme, darkTheme } from '../constants/theme';

// Create context
const ThemeContext = createContext();

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first, then system preference
    if (typeof window === 'undefined') return false;
    const saved = localStorage.getItem('theme-preference');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const theme = isDarkMode ? darkTheme : lightTheme;

  // Apply theme to DOM
  useEffect(() => {
    localStorage.setItem('theme-preference', isDarkMode ? 'dark' : 'light');
    
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    if (isDarkMode) {
      htmlElement.setAttribute('data-theme', 'dark');
      bodyElement.classList.add('dark-mode');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      htmlElement.removeAttribute('data-theme');
      bodyElement.classList.remove('dark-mode');
      document.documentElement.style.colorScheme = 'light';
    }
  }, [isDarkMode]);

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  const value = {
    isDarkMode,
    toggleTheme,
    theme,
    lightTheme,
    darkTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
