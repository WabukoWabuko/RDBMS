import React, { useContext } from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const SearchBar = ({ onSearch }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Form className="mb-5">
      <InputGroup>
        <InputGroup.Text className={theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}>
          <FaSearch />
        </InputGroup.Text>
        <FormControl
          type="text"
          placeholder="Search SQL commands..."
          onChange={(e) => {
            const value = e.target.value;
            onSearch(value);
            // Additional logic: Log the search term to console for debugging
            console.log('Search Term Entered:', value);
          }}
          className={theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}
          aria-label="Search SQL commands"
        />
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
