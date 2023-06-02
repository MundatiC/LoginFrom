import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from './ThemeContext';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const themeClass = theme === 'light' ? 'light-theme' : 'dark-theme';

  return (
    <button onClick={toggleTheme} className={`theme-toggle ${themeClass}`}>
      <FontAwesomeIcon icon={faMoon} />
    </button>
  );
};

export default ThemeToggle;
