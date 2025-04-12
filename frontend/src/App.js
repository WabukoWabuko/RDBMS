import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import QueryCard from './components/QueryCard';
import SearchBar from './components/SearchBar';
import rdbmsData from './data/rdbmsData';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredQueries = rdbmsData.filter((item) => {
    const text = `${item.title} ${item.description} ${item.example}`.toLowerCase();
    return text.includes(searchTerm.toLowerCase());
  });

  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">📘 RDBMS SQL Guide</h2>
      <SearchBar onSearch={setSearchTerm} />
      <Row>
        {filteredQueries.map((query, index) => (
          <Col md={6} lg={4} key={index}>
            <QueryCard {...query} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;

