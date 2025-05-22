import React from 'react';
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

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Stats />
      <TrustedChoice />
      <ExamTypes />
      <WhyChoose />
      <WhyDeveloped />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
