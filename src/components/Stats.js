import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Stats.css';

const Stats = () => {
  const statistics = [
    {
      number: '1500+',
      label: 'Questions'
    },
    {
      number: '5000+',
      label: 'Active Users'
    },
    {
      number: '4.6',
      label: 'Rating'
    }
  ];

  return (
    <section className="stats-section">
      <Container>
        <Row className="justify-content-center">
          {statistics.map((stat, index) => (
            <Col key={index} md={4} className="text-center stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Stats; 