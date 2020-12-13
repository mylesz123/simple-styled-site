import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Discover from './components/Discover';
import Services from './components/Services';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/gallery">
        <Gallery />
      </Route>
      <Route exact path="/">
        <Navbar />
        <Banner />
        <About />
        <Services />
        <Discover />
        <Footer />
      </Route>
    </BrowserRouter>
  );
}
