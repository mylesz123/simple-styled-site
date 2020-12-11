import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Discover from './components/Discover';
import Services from './components/Services';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Discover />
      <Footer />
    </BrowserRouter>
  );
}
