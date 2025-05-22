import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import '../styles/TrustedChoice.css';

const TrustedChoice = () => {
  const reviews = [
    {
      platform: 'Trustpilot',
      rating: 5,
      text: 'Best GP test platform!',
      date: 'Feb 2024'
    },
    {
      platform: 'Google Reviews',
      rating: 4.8,
      text: 'Excellent preparation resource',
      date: 'Jan 2024'
    },
    {
      platform: 'Facebook',
      rating: 4.9,
      text: 'Highly recommended for GP exams',
      date: 'Mar 2024'
    }
  ];

  return (
    <section className="trusted-choice-section">
      <Container>
        <h2 className="section-title text-center mb-5">
          The Trusted Choice of Thousands of Doctors Worldwide
        </h2>
        <Row className="justify-content-center">
          {reviews.map((review, index) => (
            <Col key={index} md={4} className="mb-4">
              <div className="review-card">
                <div className="review-platform">{review.platform}</div>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < Math.floor(review.rating) ? 'star-filled' : 'star-empty'}
                    />
                  ))}
                </div>
                <div className="review-text">{review.text}</div>
                <div className="review-date">{review.date}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TrustedChoice; 