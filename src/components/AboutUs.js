import React from 'react';
import '../styles/AboutUs.css';
import doctorsImage from '../assets/Rectangle 4932.png';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-header">
          <div className="header-content">
            <div className="header-text">
              <p className="welcome-text">Welcome to GPQuestPro</p>
              <h1 className="main-heading">About Us</h1>
              <div className="about-us-description">
                I've noticed that we often focus just on treating the disease, rather than looking after the person as a whole. 
                This can lead to missed opportunities to ensure patients continue managing their health after they leave the hospital. 
                Without follow-up care, it's hard to know how they're doing! I believe in closing these gaps by providing more holistic, 
                patient-centered care. This proactive approach to medicine, which involves prevention and ongoing support, is what draws 
                me to general practice, where I can ensure better care continuity for my patients.
              </div>
            </div>
            <div className="about-us-image">
              <img src={doctorsImage} alt="Medical Team" />
            </div>
          </div>
        </div>

        <div className="about-us-sections">
          <section className="content-section">
            <h2 className="content-section-heading">About Company</h2>
            <p className="section-text">
              I've noticed that we often focus just on treating the disease, rather than looking after the person as a whole. This can lead to missed opportunities to ensure patients continue managing their health after they leave the hospital. Without follow-up care, it's hard to know how they're doing! I believe in closing these gaps by providing more holistic, patient-centered care. This proactive approach to medicine, which involves prevention and ongoing support, is what draws me to general practice, where I can ensure better care continuity for my patients.
            </p>
          </section>

          <section className="content-section">
            <h2 className="content-section-heading">Our Goals</h2>
            <p className="section-text">
              I've noticed that we often focus just on treating the disease, rather than looking after the person as a whole. This can lead to missed opportunities to ensure patients continue managing their health after they leave the hospital. Without follow-up care, it's hard to know how they're doing! I believe in closing these gaps by providing more holistic, patient-centered care. This proactive approach to medicine, which involves prevention and ongoing support, is what draws me to general practice, where I can ensure better care continuity for my patients.
            </p>
          </section>

          <section className="content-section">
            <h2 className="content-section-heading">Our Students</h2>
            <p className="section-text">
              I've noticed that we often focus just on treating the disease, rather than looking after the person as a whole. This can lead to missed opportunities to ensure patients continue managing their health after they leave the hospital. Without follow-up care, it's hard to know how they're doing! I believe in closing these gaps by providing more holistic, patient-centered care. This proactive approach to medicine, which involves prevention and ongoing support, is what draws me to general practice, where I can ensure better care continuity for my patients.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;