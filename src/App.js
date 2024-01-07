// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './sections/Home';
import AboutMe from './sections/AboutMe';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Resume from './sections/Resume';

const App = () => { 

  return (
    <Router>
    <div>
      <Navigation />
      <main style={{ flexGrow: 1, padding: '100px' }}>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
       </Routes>
      </main>
    </div>
    </Router>
  );
};

export default App;
