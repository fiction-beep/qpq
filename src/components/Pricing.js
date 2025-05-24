import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import '../styles/Pricing.css';

const Pricing = () => {
  const plans = [
    {
      icon: '🔍',
      title: 'CPST/SJT',
      subtitle: 'Question Bank',
      price: '99',
      period: '/monthly',
      description: 'Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.',
      features: [
        'All analytics features',
        'Up to 250,000 tracked visits',
        'Normal support',
        'Up to 3 team members',
        'Up to 3 team members',
        'Up to 3 team members',
        'Up to 3 team members'
      ],
    },
    {
      icon: '📝',
      title: 'CPST/SJT',
      subtitle: 'Mocks',
      price: '199',
      period: '/monthly',
      description: 'Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.',
      popular: true,
      features: [
        'All analytics features',
        'Up to 1,000,000 tracked visits',
        'Premium support',
        'Up to 10 team members',
        'Up to 10 team members',
        'Up to 10 team members',
        'Up to 10 team members'
      ],
    },
    {
      icon: '🎯',
      title: 'GP Interview',
      subtitle: 'Course',
      price: '399',
      period: '/monthly',
      description: 'Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.',
      features: [
        'All analytics features',
        'Up to 5,000,000 tracked visits',
        'Up to 5,000,000 tracked visits',
        'Up to 5,000,000 tracked visits',
        'Up to 5,000,000 tracked visits',
        'Dedicated support',
        'Up to 50 team members'
      ],
    }
  ];

  return (
    <div className="pricing-section">
      <Container>
        <div className="pricing-header text-center">
          <h2 className="pricing-title">Our Plans</h2>
          <p className="pricing-subtitle">
            Your ultimate resource for excelling in the Situational Judgement Test (SJT)<br />
            and Clinical Problem-Solving Test (CPST).
          </p>
        </div>
        <Row className="justify-content-center g-4">
          {plans.map((plan, index) => (
            <Col key={index} md={4}>
              <Card className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && (
                  <div className="popular-badge">Popular</div>
                )}
                <Card.Body>
                  <div className="plan-header">
                    <div className="plan-title">
                      <span>{plan.title}</span>
                      <h3>{plan.subtitle}</h3>
                    </div>
                    <p className="description">{plan.description}</p>
                  </div>
                  
                  <div className="price-container">
                    <span className="currency">$</span>
                    <span className="price">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>

                  <div className="features-section">
                    <h4>What's included</h4>
                    <ul className="features-list">
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>
                          <FaCheck className="check-icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="get-started-btn">
                    Get started
                  </button>
                  <div className="free-trial">
                    Free Trial
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Pricing; 