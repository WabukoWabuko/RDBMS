import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

// Import Prism.js and SQL language support
import 'prismjs';
import 'prismjs/components/prism-sql'; // Ensure SQL language support
import 'prismjs/themes/prism.css'; // Base Prism theme (we override in styles.css)

// Create a root
const root = createRoot(document.getElementById('root'));

// Render the app
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

