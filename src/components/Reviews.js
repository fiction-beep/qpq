import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import '../styles/Reviews.css';

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet commodo justo.",
      avatar: "https://via.placeholder.com/40"
    },
    {
      name: "Jane Smith",
      rating: 5,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet commodo justo.",
      avatar: "https://via.placeholder.com/40"
    },
    {
      name: "John Doe",
      rating: 5,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet commodo justo.",
      avatar: "https://via.placeholder.com/40"
    },
    {
      name: "Jane Smith",
      rating: 5,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet commodo justo.",
      avatar: "https://via.placeholder.com/40"
    },
    {
      name: "John Doe",
      rating: 5,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet commodo justo.",
      avatar: "https://via.placeholder.com/40"
    },
    {
      name: "Jane Smith",
      rating: 5,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet commodo justo.",
      avatar: "https://via.placeholder.com/40"
    }
  ];

  return (
    <div className="reviews-container">
      <Container>
        <div className="reviews-header">
          <h1>Reviews</h1>
          <div className="reviews-icon">
            <FaStar size={40} color="#FFD700" />
          </div>
        </div>

        <Row>
          <Col lg={8}>
            <Row className="reviews-list">
              {reviews.map((review, index) => (
                <Col md={6} key={index} className="mb-4">
                  <div className="review-item h-100">
                    <div className="review-header">
                      <img src={review.avatar} alt={review.name} className="review-avatar" />
                      <div className="review-info">
                        <h5>{review.name}</h5>
                        <div className="review-stars">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              color={i < review.rating ? "#FFD700" : "#e4e5e9"}
                              size={15}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="review-quote">"</div>
                    </div>
                    <p className="review-text">{review.comment}</p>
                  </div>
                </Col>
              ))}
            </Row>
            <div className="reviews-pagination">
              <Button variant="link" className="page-link">1</Button>
              <Button variant="link" className="page-link">2</Button>
              <Button variant="link" className="page-link">3</Button>
              <Button variant="link" className="page-link">4</Button>
              <Button variant="link" className="page-link">5</Button>
              <Button variant="link" className="page-link">...</Button>
              <Button variant="link" className="page-link">7</Button>
            </div>
          </Col>
          <Col lg={4}>
            <div className="submit-review">
              <h3>Submit Your Review</h3>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name *</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address *</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Your Thoughts</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Write your review here..." />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="text-center d-block">Your Overall Rating</Form.Label>
                  <div className="rating-stars">
                    {[...Array(5)].map((_, index) => {
                      const ratingValue = index + 1;
                      return (
                        <label key={index}>
                          <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                          />
                          <FaStar
                            className="star"
                            color={ratingValue <= (hover || rating) ? "#FFD700" : "#e4e5e9"}
                            size={35}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(0)}
                          />
                        </label>
                      );
                    })}
                  </div>
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-button">
                  Submit Review
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reviews; 