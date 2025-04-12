import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Alert, Navbar, Nav } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QueryCard from './components/QueryCard';
import SearchBar from './components/SearchBar';
import ThemeToggle from './components/ThemeToggle';
import { ThemeContext } from './context/ThemeContext';
import rdbmsData from './data/rdbmsData';
import './styles/styles.css'; // Fixed import path

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [starCount, setStarCount] = useState(0);
  const { theme } = useContext(ThemeContext);

  // Fetch GitHub stars
  useEffect(() => {
    fetch('https://api.github.com/repos/WabukoWabuko/rdbms-queries-viewer')
      .then((res) => res.json())
      .then((data) => setStarCount(data.stargazers_count || 0))
      .catch((err) => console.error('Failed to fetch stars:', err));
  }, []);

  // Filter queries
  const filteredQueries = rdbmsData.filter((item) => {
    if (!item.title || !item.description || !item.example || !item.tags) return false;
    const text = `${item.title} ${item.description} ${item.example} ${item.tags.join(' ')}`.toLowerCase();
    return searchTerm ? text.includes(searchTerm.toLowerCase()) : true;
  });

  return (
    <div className={`app ${theme}`}>
      <Navbar bg={theme === 'light' ? 'light' : 'dark'} variant={theme} expand="lg" className="mb-4 shadow-sm">
        <Container>
          <Navbar.Brand href="#">📘 RDBMS SQL Guide</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link
              href="https://github.com/WabukoWabuko/rdbms-queries-viewer"
              target="_blank"
              className="d-flex align-items-center"
            >
              ⭐ Star ({starCount})
            </Nav.Link>
            <ThemeToggle />
          </Nav>
        </Container>
      </Navbar>

      <Container className="py-5">
        <SearchBar onSearch={setSearchTerm} />
        
        {filteredQueries.length === 0 && (
          <Alert variant="warning" className="text-center">
            No SQL commands found for "{searchTerm}". Try a different search term.
          </Alert>
        )}

        <Row>
          {filteredQueries.map((query) => (
            <Col md={6} lg={4} key={query.title} className="mb-4">
              <QueryCard {...query} />
            </Col>
          ))}
        </Row>

        <footer className="mt-5 text-center">
          <p>
            Created by <strong>WabukoWabuko</strong> |{' '}
            <a href="https://github.com/WabukoWabuko" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>{' '}
            | <a href="mailto:basilwabbs@gmail.com">basilwabbs@gmail.com</a> |{' '}
            <a href="tel:+254740750403">+254740750403</a>
          </p>
          <p>Star this project on <a href="https://github.com/WabukoWabuko/rdbms-queries-viewer" target="_blank" rel="noopener noreferrer">GitHub</a>!</p>
        </footer>
      </Container>

      <ToastContainer position="bottom-right" theme={theme} />
    </div>
  );
};

export default App;
