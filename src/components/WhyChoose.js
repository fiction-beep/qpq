import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUserMd, FaChartLine, FaRegClock } from 'react-icons/fa';
import '../styles/WhyChoose.css';

const WhyChoose = () => {
  const benefits = [
    {
      icon: <FaUserMd className="benefit-icon" />,
      title: 'Trusted Question Bank',
      description: 'Expertly curated questions that match the real exam pattern and difficulty level.'
    },
    {
      icon: <FaChartLine className="benefit-icon" />,
      title: 'Exclusive Focus on High-Yield Topics',
      description: 'Questions covering the most important and frequently tested concepts.'
    },
    {
      icon: <FaRegClock className="benefit-icon" />,
      title: 'Affordable & Accessible',
      description: 'Cost-effective preparation resources available 24/7 on any device.'
    }
  ];

  return (
    <section className="why-choose-section">
      <Container>
        <h2 className="section-title text-center">Why Choose GPQuestPro?</h2>
        <Row className="justify-content-center">
          {benefits.map((benefit, index) => (
            <Col key={index} md={4} className="benefit-col">
              <div className="benefit-card text-center">
                <div className="icon-wrapper">
                  {benefit.icon}
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChoose; 