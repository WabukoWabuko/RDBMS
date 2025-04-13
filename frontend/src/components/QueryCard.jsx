import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import '../styles/styles.css';

const QueryCard = ({ title, description, example, tags, category }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(example);
    toast.success('Example copied to clipboard!', { autoClose: 2000 });
  };

  return (
    <Card className="query-card shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <pre>
          <code className="language-sql">{example}</code>
        </pre>
        <Button variant="outline-secondary" size="sm" className="copy-btn mt-3" onClick={handleCopy}>
          Copy Example
        </Button>
        <div className="mt-3">
          <strong className="category-label">Category:</strong>{' '}
          <span className="category-value">{category}</span>
        </div>
        <div className="mt-1 text-muted">
          <strong>Tags:</strong> {tags.join(', ')}
        </div>
      </Card.Body>
    </Card>
  );
};

export default QueryCard;
