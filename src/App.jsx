// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AboutDetail from './components/AboutDetail';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Service from './components/Service';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <AboutDetail />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;