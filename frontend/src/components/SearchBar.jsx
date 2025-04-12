import React, { useContext } from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const SearchBar = ({ onSearch }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Form className="mb-5">
      <InputGroup>
        <InputGroup.Text className={theme === 'light' ? 'bg-light' : 'bg-dark text-light'}>
          <FaSearch />
        </InputGroup.Text>
        <FormControl
          type="text"
          placeholder="Search SQL commands..."
          onChange={(e) => onSearch(e.target.value)}
          className={theme === 'light' ? '' : 'bg-dark text-light'}
          aria-label="Search SQL commands"
        />
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
