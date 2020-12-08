import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
    </BrowserRouter>
  );
}
