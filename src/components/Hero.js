import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Hero.css';
import girlImage from '../assets/girl-image 1.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="hero-content">
            <h1 className="hero-title">
              Unlock Your Success With GPQuestPro
            </h1>
            <p className="hero-description">
              Expert-curated questions and comprehensive study materials to help you ace your GP Entry Exams and MICGP Exams
            </p>
            <div className="hero-buttons">
              <Button variant="primary" size="lg" className="me-3">
                Get Started Today
              </Button>
              <Button variant="outline-dark" size="lg">
                Learn More
              </Button>
            </div>
          </Col>
          <Col lg={6} className="hero-image">
            <img
              src={girlImage}
              alt="Medical professional"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero; 