import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaRegCopy } from 'react-icons/fa';

const QueryCard = ({ title, description, example }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(example);
    alert("Copied to clipboard!");
  };

  return (
    <Card className="mb-4 shadow-sm border-0">
      <Card.Body>
        <Card.Title className="text-primary">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <pre className="bg-light p-3 rounded"><code>{example}</code></pre>
        <Button variant="outline-secondary" size="sm" onClick={handleCopy}>
          <FaRegCopy className="me-2" /> Copy
        </Button>
      </Card.Body>
    </Card>
  );
};

export default QueryCard;

