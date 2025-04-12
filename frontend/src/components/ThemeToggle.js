import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa'; // Optional: Icons

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button
      variant={theme === 'light' ? 'outline-dark' : 'outline-light'}
      onClick={toggleTheme}
      className="mb-3"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </Button>
  );
};

export default ThemeToggle;
