import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col lg={4} md={4} className="footer-brand-section">
            <h3 className="footer-logo">GPQuestPro</h3>
            <p className="footer-address">
              4517 Washington Ave, Manchester,<br />
              Kentucky 39495
            </p>
          </Col>
          <Col lg={2} md={2} className="footer-links-section">
            <h5>Quicklink</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#doctors">Doctors</a></li>
            </ul>
          </Col>
          <Col lg={3} md={3} className="footer-links-section">
            <h5>Latest</h5>
            <ul className="footer-links">
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
              <li><a href="#our-plans">Our Plans</a></li>
              <li><a href="#resources">Useful Resources</a></li>
            </ul>
          </Col>
          <Col lg={3} md={3} className="footer-signup-section">
            <h5>Sign Up to Our Q-Bank</h5>
            <button className="signup-btn">Sign Up Now</button>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <p>Copyright @ GPQuestPro, {new Date().getFullYear()} All Right Reserved</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer; 