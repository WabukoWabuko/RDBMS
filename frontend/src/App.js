import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Alert, Navbar, Nav, Pagination } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';
import QueryCard from './components/QueryCard';
import SearchBar from './components/SearchBar';
import ThemeToggle from './components/ThemeToggle';
import { ThemeContext } from './context/ThemeContext';
import rdbmsData from './data/rdbmsData';
import './styles/styles.css';

// Custom debounce hook
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [starCount, setStarCount] = useState(0);
  const [likes, setLikes] = useState(() => parseInt(localStorage.getItem('likes') || '0', 10));
  const [hasLiked, setHasLiked] = useState(() => localStorage.getItem('hasLiked') === 'true');
  const [currentPage, setCurrentPage] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const itemsPerPage = 6;
  const { theme } = useContext(ThemeContext);

  // Debounce search term
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Fetch initial likes count from backend
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        console.log('Attempting to fetch likes from /api/getLikes');
        const response = await fetch('/api/getLikes');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log('Fetched Likes Response:', data);
        const fetchedLikes = data.likesCount || 0;
        setLikes(fetchedLikes);
        localStorage.setItem('likes', fetchedLikes.toString());
      } catch (err) {
        console.error('Failed to fetch likes:', err);
        const storedLikes = parseInt(localStorage.getItem('likes') || '0', 10);
        setLikes(storedLikes);
      }
    };

    fetchLikes();
  }, []);

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

  const handleLike = async () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
      setShowConfetti(true);
      localStorage.setItem('hasLiked', 'true');

      const formUrl = process.env.REACT_APP_FORM_URL;
      const entryId = process.env.REACT_APP_ENTRY_ID;

      const formData = new FormData();
      formData.append(entryId, 'Like');

      try {
        console.log('Submitting like to Google Form');
        await fetch(formUrl, {
          method: 'POST',
          body: formData,
          mode: 'no-cors',
        });
        toast.success('Thanks for the like!', { autoClose: 2000 });

        // Fetch updated likes count after submitting
        console.log('Fetching updated likes after submission');
        const response = await fetch('/api/getLikes');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log('Updated Likes Response:', data);
        const updatedLikes = data.likesCount || 0;
        setLikes(updatedLikes);
        localStorage.setItem('likes', updatedLikes.toString());
      } catch (err) {
        console.error('Failed to log like or fetch updated likes:', err);
        toast.success('Thanks for the like! (Tracking may have failed)', { autoClose: 2000 });
        const newLikes = likes + 1;
        setLikes(newLikes);
        localStorage.setItem('likes', newLikes.toString());
      }
    }
  };

  // Filter by search term
  const filteredQueries = rdbmsData.filter((item) => {
    if (!item.title || !item.description || !item.example || !item.tags || !item.category) return false;
    const text = `${item.title} ${item.description} ${item.example} ${item.tags.join(' ')}`.toLowerCase();
    return debouncedSearchTerm ? text.includes(debouncedSearchTerm.toLowerCase()) : true;
  });

  const totalPages = Math.ceil(filteredQueries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedQueries = filteredQueries.slice(startIndex, startIndex + itemsPerPage);

  // Pagination logic: Show max 5 pages
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

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
        <div className="like-container">
          <button
            onClick={handleLike}
            className="like-button"
            disabled={hasLiked}
            title={hasLiked ? 'You already liked!' : 'Like this app'}
          >
            <span className="heart-icon">❤️</span> ({likes})
          </button>
          {showConfetti && (
            <>
              <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                numberOfPieces={50}
                recycle={false}
                onConfettiComplete={() => setShowConfetti(false)}
              />
              <div className="flying-hearts">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="flying-heart"
                    initial={{ opacity: 1, y: 0, x: 0 }}
                    animate={{
                      opacity: 0,
                      y: -100,
                      x: (i % 2 === 0 ? 1 : -1) * (Math.random() * 50 + 20),
                    }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  >
                    ❤️
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </header>

      <Navbar bg="transparent" variant={theme} expand="lg" className="mb-4 shadow-sm">
        <Container>
          <Navbar.Brand href="#">📘 SQL Guide</Navbar.Brand>
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
          {pageNumbers.map((page) => (
            <Pagination.Item
              key={page}
              active={page === currentPage}
              onClick={() => handlePageChange(page)}
            >
              {page}
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
