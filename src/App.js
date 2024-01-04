// App.js
import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './sections/AboutMe';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Resume from './sections/Resume';

const App = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <Header />
      <main>
        <Navigation />
        <AboutMe />
        <Portfolio />
        <Contact />
        <Resume />
        {/* Add more components as needed */}
      </main>
    </div>
  );
};

export default App;
