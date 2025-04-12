import React, { useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import QueryCard from './components/QueryCard';
import SearchBar from './components/SearchBar';
import rdbmsData from './data/rdbmsData';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Log data to verify loading
  console.log('rdbmsData length:', rdbmsData.length);
  console.log('rdbmsData sample:', rdbmsData.slice(0, 2));

  // Filter queries, including tags
  const filteredQueries = rdbmsData.filter((item) => {
    if (!item.title || !item.description || !item.example || !item.tags) {
      console.warn('Invalid item:', item);
      return false; // Skip invalid entries
    }
    const text = `${item.title} ${item.description} ${item.example} ${item.tags.join(' ')}`.toLowerCase();
    return searchTerm ? text.includes(searchTerm.toLowerCase()) : true;
  });

  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">📘 RDBMS SQL Guide</h2>
      <SearchBar onSearch={setSearchTerm} />
      
      {rdbmsData.length === 0 && (
        <Alert variant="danger" className="text-center">
          No data loaded. Check rdbmsData.js.
        </Alert>
      )}
      
      {filteredQueries.length === 0 && rdbmsData.length > 0 && (
        <Alert variant="warning" className="text-center">
          No SQL commands found for "{searchTerm}". Try a different search term.
        </Alert>
      )}
      
      <Row>
        {filteredQueries.map((query) => (
          <Col md={6} lg={4} key={query.title}>
            <QueryCard {...query} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;
