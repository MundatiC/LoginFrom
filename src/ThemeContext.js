import React, { createContext, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeClass = theme === 'light' ? 'light-theme' : 'dark-theme';

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme-container ${themeClass}`}>
        <ThemeToggle /> {/* Move the theme toggle button here */}
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
