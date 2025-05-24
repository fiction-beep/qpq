import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-2">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="GPQuestPro"
            width="209.42px"
            height="68px"
            className="me-2"
            style={{ objectFit: 'contain' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/gp-exams" active={location.pathname === '/gp-exams'}>GP Exams</Nav.Link>
            <Nav.Link as={Link} to="/reviews" active={location.pathname === '/reviews'}>Reviews</Nav.Link>
            <Nav.Link as={Link} to="/resources" active={location.pathname === '/resources'}>Useful Resources</Nav.Link>
            <Nav.Link as={Link} to="/about" active={location.pathname === '/about'}>About Us</Nav.Link>
          </Nav>
          <div className="ms-lg-3 mt-3 mt-lg-0 d-flex gap-2">
            <Button variant="outline-light" className="header-button">Sign Up</Button>
            <Button variant="primary" className="header-button">Login</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header; 