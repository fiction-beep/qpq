import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import TrustedChoice from './components/TrustedChoice';
import ExamTypes from './components/ExamTypes';
import WhyChoose from './components/WhyChoose';
import WhyDeveloped from './components/WhyDeveloped';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import GPQuestOffer from './components/GPQuestOffer';

// Home component to wrap the main page content
const Home = () => (
  <>
    <Hero />
    <Stats />
    <ExamTypes />
    <GPQuestOffer />
    <TrustedChoice />
    <WhyChoose />
    <WhyDeveloped />
    <FAQ />
  </>
);

// PricingPage component to wrap pricing content with common sections
const PricingPage = () => (
  <>
    <Pricing />
    <TrustedChoice />
    <FAQ />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
