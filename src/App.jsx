import React from 'react';
import { HashRouter } from 'react-router-dom';
import {
  About,
  BackToTop,
  Contact,
  Experience,
  Footer,
  Hero,
  Loader,
  Navbar,
  Skills,
  Stats,
  StarsCanvas,
  Tech,
  Works,
  Cursor,
  Certifications
} from './components';

const App = () => {
  return (
    <HashRouter>
      <Cursor />
      <Loader />
      <div className="relative z-0 bg-primary">
        {/* Stars fixed in background across entire site */}
        <StarsCanvas />

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Stats />
        <Experience />
        <Certifications />
        <Works />
        <Skills />
        <Tech />
        <div className="relative z-0">
          <Contact />
        </div>
        <Footer />
        <BackToTop />
      </div>
    </HashRouter>
  );
};

export default App;
