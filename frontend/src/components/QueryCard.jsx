import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'; // Matches dark mode
import 'prismjs/components/prism-sql'; // SQL highlighting
import '../styles/styles.css';

const QueryCard = ({ title, description, example, tags }) => {
  // Highlight code on mount
  React.useEffect(() => {
    Prism.highlightAll();
  }, [example]);

  // Handle copy example
  const handleCopy = () => {
    navigator.clipboard.writeText(example).then(() => {
      toast.success('Example copied to clipboard!', { autoClose: 2000 });
    }).catch((err) => {
      console.error('Failed to copy:', err);
      toast.error('Failed to copy example', { autoClose: 2000 });
    });
  };

  return (
    <Card className="query-card shadow-sm" data-theme="theme">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <pre className="language-sql">
          <code>{example}</code>
        </pre>
        <Button
          variant="outline-secondary"
          size="sm"
          className="copy-btn mt-2"
          onClick={handleCopy}
          title="Copy this example"
        >
          Copy Example
        </Button>
        <Card.Text className="mt-3">
          <small className="text-muted">
            Tags: {tags.join(', ')}
          </small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default QueryCard;
