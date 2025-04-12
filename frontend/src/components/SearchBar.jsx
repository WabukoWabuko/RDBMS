import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  return (
    <Form className="mb-4">
      <FormControl
        type="text"
        placeholder="Search SQL commands..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </Form>
  );
};

export default SearchBar;
