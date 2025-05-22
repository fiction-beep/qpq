import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-brand">
              <img src="/logo.png" alt="GPQuestPro" className="footer-logo" />
              <h3>GPQuestPro</h3>
            </div>
            <p className="footer-description">
              Your trusted partner in GP exam preparation, providing comprehensive study materials and practice tests.
            </p>
          </Col>
          <Col lg={2} md={6} className="mb-4">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <h4>Useful Resources</h4>
            <ul className="footer-links">
              <li><a href="#blog">Blog</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <h4>Sign Up for Our News</h4>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </div>
            <div className="social-links">
              <a href="#facebook"><FaFacebook /></a>
              <a href="#twitter"><FaTwitter /></a>
              <a href="#linkedin"><FaLinkedin /></a>
              <a href="#instagram"><FaInstagram /></a>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} GPQuestPro. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 