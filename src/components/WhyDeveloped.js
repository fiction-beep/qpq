import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPlay } from 'react-icons/fa';
import '../styles/WhyDeveloped.css';

const WhyDeveloped = () => {
  return (
    <section className="why-developed-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="content-col">
            <h2 className="section-title">
              Why We Developed GPQuestPro?
            </h2>
            <p className="section-description">
              GP QuestPro was created by a team of experienced GP trainers and specialists who understand the challenges faced by doctors preparing for GP exams. Our goal is to provide high-quality, relevant, and up-to-date practice materials that help you succeed in your journey to becoming a GP.
            </p>
            <div className="features-list">
              <div className="feature-item">
                <span className="feature-dot"></span>
                Expert-curated content
              </div>
              <div className="feature-item">
                <span className="feature-dot"></span>
                Regular updates based on exam patterns
              </div>
              <div className="feature-item">
                <span className="feature-dot"></span>
                Comprehensive explanations
              </div>
            </div>
          </Col>
          <Col lg={6} className="video-col">
            <div className="video-wrapper">
              <div className="video-placeholder">
                <FaPlay className="play-icon" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyDeveloped; 