import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Alert, Navbar, Nav, Pagination } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QueryCard from './components/QueryCard';
import SearchBar from './components/SearchBar';
import ThemeToggle from './components/ThemeToggle';
import { ThemeContext } from './context/ThemeContext';
import rdbmsData from './data/rdbmsData';
import './styles/styles.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [starCount, setStarCount] = useState(0);
  const [likes, setLikes] = useState(() => parseInt(localStorage.getItem('likes') || '0', 10));
  const [hasLiked, setHasLiked] = useState(() => localStorage.getItem('hasLiked') === 'true');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch('https://api.github.com/repos/WabukoWabuko/RDBMS')
      .then((res) => res.json())
      .then((data) => setStarCount(data.stargazers_count || 0))
      .catch((err) => console.error('Failed to fetch stars:', err));
  }, []);

  useEffect(() => {
    localStorage.setItem('likes', likes.toString());
  }, [likes]);

  useEffect(() => {
    const handleScroll = () => {
      const btn = document.querySelector('.back-to-top');
      if (btn) btn.style.display = window.scrollY > 200 ? 'block' : 'none';
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
      localStorage.setItem('hasLiked', 'true');
      toast.success('Thanks for the like!', { autoClose: 2000 });
    }
  };

  const filteredQueries = rdbmsData.filter((item) => {
    if (!item.title || !item.description || !item.example || !item.tags) return false;
    const text = `${item.title} ${item.description} ${item.example} ${item.tags.join(' ')}`.toLowerCase();
    return searchTerm ? text.includes(searchTerm.toLowerCase()) : true;
  });

  const totalPages = Math.ceil(filteredQueries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedQueries = filteredQueries.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`app ${theme}`} data-theme={theme}>
      <header className="app-header">
        <div className="identifier">
          <h1>WabukoWabuko Softwares</h1>
        </div>
        <button
          onClick={handleLike}
          className="like-button"
          disabled={hasLiked}
          title={hasLiked ? 'You already liked!' : 'Like this app'}
        >
          👍 Like ({likes})
        </button>
      </header>

      <Navbar bg="transparent" variant={theme} expand="lg" className="mb-4 shadow-sm">
        <Container>
          <Navbar.Brand href="#">📘 RDBMS SQL Guide</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link
              href="https://github.com/WabukoWabuko/RDBMS"
              target="_blank"
              className="d-flex align-items-center star-link"
            >
              ⭐ Star ({starCount})
            </Nav.Link>
            <ThemeToggle />
          </Nav>
        </Container>
      </Navbar>

      <Container className="py-5 main-content">
        <SearchBar onSearch={setSearchTerm} />
        
        {filteredQueries.length > 0 && (
          <button
            className="copy-all-btn"
            onClick={() => {
              const examples = filteredQueries.map((q) => q.example).join('\n\n');
              navigator.clipboard.writeText(examples);
              toast.success('Examples copied to clipboard!', { autoClose: 2000 });
            }}
          >
            Copy All Examples
          </button>
        )}

        {filteredQueries.length === 0 && (
          <Alert variant={theme === 'light' ? 'warning' : 'dark'} className="text-center">
            No SQL commands found for "{searchTerm}". Try a different search term.
          </Alert>
        )}

        <Row>
          {paginatedQueries.map((query) => (
            <Col md={6} lg={4} key={query.title} className="mb-4">
              <QueryCard {...query} />
            </Col>
          ))}
        </Row>

        {totalPages > 1 && (
          <Pagination className="justify-content-center mt-4">
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {Array.from({ length: totalPages }, (_, i) => (
              <Pagination.Item
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        )}

        <footer className="mt-5 text-center">
          <p>
            Created by <strong>WabukoWabuko</strong> |{' '}
            <a href="https://github.com/WabukoWabuko" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>{' '}
            | <a href="mailto:basilwabbs@gmail.com">basilwabbs@gmail.com</a> |{' '}
            <a href="tel:+254740750403">+254740750403</a>
          </p>
          <p>
            Star this project on{' '}
            <a
              href="https://github.com/WabukoWabuko/RDBMS"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>!
          </p>
        </footer>
      </Container>

      <ToastContainer position="bottom-right" theme={theme} autoClose={2000} />
      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑ Top
      </button>
    </div>
  );
};

export default App;
