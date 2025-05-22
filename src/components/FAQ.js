import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import '../styles/FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is GP Quest Pro?',
      answer: 'GP Quest Pro is an online platform designed to help aspiring General Practice (Family Doctor) exams in the UK and Ireland. We provide comprehensive question banks, study materials, and practice tests.'
    },
    {
      question: 'What does the question bank cover?',
      answer: 'Our question bank covers all major topics and areas tested in GP entry exams and MICGP exams, including Clinical Problem Solving Test (CPST) and Clinical Knowledge Test (CKT).'
    },
    {
      question: 'Who creates the questions and study materials on GP Quest Pro?',
      answer: 'All our content is created and reviewed by experienced GP trainers, specialists, and medical educators who have extensive knowledge of the exam requirements and patterns.'
    },
    {
      question: 'How often is the content updated?',
      answer: 'We regularly update our question bank and study materials to reflect the latest exam patterns, guidelines, and medical knowledge. Updates are made at least quarterly or whenever significant changes occur in medical practice.'
    }
  ];

  return (
    <section className="faq-section">
      <Container>
        <h2 className="section-title text-center">FAQ's</h2>
        <Accordion defaultActiveKey="0" className="faq-accordion">
          {faqs.map((faq, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        <div className="text-center mt-4">
          <button className="read-more-btn">Read More</button>
        </div>
      </Container>
    </section>
  );
};

export default FAQ; 