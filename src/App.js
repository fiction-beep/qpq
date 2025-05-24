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

// Home component to wrap the main page content
const Home = () => (
  <>
    <Hero />
    <Stats />
    <TrustedChoice />
    <ExamTypes />
    <WhyChoose />
    <WhyDeveloped />
    <FAQ />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
