import React from 'react';
import { HashRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works
} from './components';

const App = () => {
  return (
    <HashRouter>
      <div className="relative z-0 bg-primary">
        {/* Stars fixed in background across entire site */}
        <StarsCanvas />

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
