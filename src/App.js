// App.js
import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMe from './sections/AboutMe';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Resume from './sections/Resume';

const App = () => {
  return (
    <Router>
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <Header />
      <main>
       <Navigation />
       <Switch>
        <Route path="/about" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
       </Switch>
      </main>
    </div>
    </Router>
  );
};

export default App;
