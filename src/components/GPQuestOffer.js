import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/GPQuestOffer.css';

const GPQuestOffer = () => {
  const navigate = useNavigate();
  
  const offerings = [
    {
      title: 'Question Bank',
      buttonText: 'Explore Plans'
    },
    {
      title: 'SJT & CPST\nE-Notes',
      buttonText: 'Explore Plans'
    },
    {
      title: 'Grand Mocks',
      buttonText: 'Explore Plans'
    }
  ];

  const handleExplore = () => {
    navigate('/pricing');
  };

  return (
    <section className="gpquest-offer-section">
      <Container>
        <h2 className="text-center mb-4">What GPQuestPro offer?</h2>
        <p className="text-center description mb-5">
          Our question bank is built by doctors who've successfully passed the SJT and CPST. With exam-style scenarios, instant feedback, and smart tracking, you're not just practicing — you're preparing with purpose.
        </p>
        <Row className="justify-content-center">
          {offerings.map((offering, index) => (
            <Col key={index} lg={4} md={6} className="mb-4">
              <Card className="offer-card h-100">
                <Card.Body className="d-flex flex-column align-items-center justify-content-between text-center">
                  <h3 className="offer-title">{offering.title}</h3>
                  <Button 
                    variant="outline-primary" 
                    className="explore-btn"
                    onClick={handleExplore}
                  >
                    {offering.buttonText}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default GPQuestOffer; 