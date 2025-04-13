import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

// Create a root
const root = createRoot(document.getElementById('root'));

// Render the app
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
