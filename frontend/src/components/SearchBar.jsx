import React from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  return (
    <Form className="mb-4">
      <Form.Control
        type="text"
        placeholder="Search for a SQL command..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </Form>
  );
};

export default SearchBar;

