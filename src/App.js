import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import Home from './components/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/gallery" component={Gallery} />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}
