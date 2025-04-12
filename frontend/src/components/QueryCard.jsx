import React from 'react';
import { Card } from 'react-bootstrap';

const QueryCard = ({ title, description, example, tags }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <pre>{example}</pre>
        <Card.Text>Tags: {tags.join(', ')}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default QueryCard;
