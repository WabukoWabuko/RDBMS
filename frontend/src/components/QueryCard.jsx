import React, { useEffect, useContext } from 'react';
import { Card } from 'react-bootstrap';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // Light theme
import 'prismjs/themes/prism-dark.css'; // Dark theme
import { ThemeContext } from '../context/ThemeContext';
import './QueryCard.css';

const QueryCard = ({ title, description, example, tags }) => {
  const { theme } = useContext(ThemeContext);

  // Highlight code when example or theme changes
  useEffect(() => {
    Prism.highlightAll();
  }, [example, theme]);

  return (
    <Card className={`query-card ${theme}`}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <pre className="code-block">
          <code className="language-sql">{example}</code>
        </pre>
        <div className="tags">
          {tags && tags.map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default QueryCard;
