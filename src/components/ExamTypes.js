import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/ExamTypes.css';

const ExamTypes = () => {
  const navigate = useNavigate();

  const examTypes = [
    {
      title: 'GP Entry Exams',
      subtitle: 'Clinical Problem Solving Test (CPST)',
      description: 'Comprehensive preparation materials and practice tests for the CPST component of GP entry exams.',
      buttonText: 'Explore Plans'
    },
    {
      title: 'MICGP Exams',
      subtitle: 'Clinical Knowledge Test (CKT)',
      description: 'Expert-curated question bank and study materials for the MICGP Clinical Knowledge Test.',
      buttonText: 'Explore Plans'
    },
    {
      title: 'GP Interview Course',
      subtitle: 'Get ready for your GP Interview',
      description: 'All-in-one resource course for entry into GP training in Ireland.',
      buttonText: 'Explore Plans'
    }
  ];

  const handleExplore = () => {
    navigate('/pricing');
  };

  return (
    <section className="exam-types-section">
      <Container>
        <Row className="justify-content-center">
          {examTypes.map((exam, index) => (
            <Col key={index} lg={4} md={6} className="mb-4">
              <Card className="exam-card h-100">
                <Card.Body>
                  <Card.Title className="exam-title">{exam.title}</Card.Title>
                  <Card.Subtitle className="exam-subtitle mb-3">{exam.subtitle}</Card.Subtitle>
                  <Card.Text className="exam-description">
                    {exam.description}
                  </Card.Text>
                  <Button 
                    variant="outline-primary" 
                    className="mt-3"
                    onClick={handleExplore}
                  >
                    {exam.buttonText}
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

export default ExamTypes; 