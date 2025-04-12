import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { ThemeContext } from '../context/ThemeContext';
import { FaCopy } from 'react-icons/fa';

const QueryCard = ({ title, description, example, tags }) => {
  const { theme } = useContext(ThemeContext);

  const handleCopy = () => {
    navigator.clipboard.writeText(example);
    toast.success('SQL query copied to clipboard!', {
      position: 'bottom-right',
      autoClose: 2000,
    });
  };

  return (
    <Card className={`query-card shadow-sm ${theme}`} border={theme === 'light' ? 'light' : 'dark'}>
      <Card.Body>
        <Card.Title className="text-primary">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <pre className="bg-light p-3 rounded">{example}</pre>
        <Card.Text>
          <strong>Tags:</strong> {tags.join(', ')}
        </Card.Text>
        <Button
          variant="outline-primary"
          onClick={handleCopy}
          className="d-flex align-items-center"
          aria-label={`Copy ${title} query`}
        >
          <FaCopy className="me-2" /> Copy
        </Button>
      </Card.Body>
    </Card>
  );
};

export default QueryCard;
