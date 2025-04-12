import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import QueryCard from './components/QueryCard';
import SearchBar from './components/SearchBar';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data dynamically
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Option 1: Fetch from a JSON file in public/data
        // const response = await fetch('/data/rdbmsData.json');
        
        // Option 2: Fetch from a mock API or static import for fallback
        const response = await import('./data/rdbmsData');
        const data = response.default; // Access default export
        setQueries(data);
        setError(null);
      } catch (err) {
        setError('Failed to load SQL data. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter queries based on search term, including tags
  const filteredQueries = queries.filter((item) => {
    const text = `${item.title} ${item.description} ${item.example} ${item.tags.join(' ')}`.toLowerCase();
    return searchTerm ? text.includes(searchTerm.toLowerCase()) : true; // Show all if searchTerm is empty
  });

  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">📘 RDBMS SQL Guide</h2>
      <SearchBar onSearch={setSearchTerm} />
      
      {loading && (
        <Alert variant="info" className="text-center">
          Loading SQL commands...
        </Alert>
      )}
      
      {error && (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      )}
      
      {!loading && !error && filteredQueries.length === 0 && (
        <Alert variant="warning" className="text-center">
          No SQL commands found for "{searchTerm}". Try a different search term.
        </Alert>
      )}
      
      <Row>
        {!loading && !error && filteredQueries.map((query, index) => (
          <Col md={6} lg={4} key={`${query.title}-${index}`}>
            <QueryCard {...query} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;
