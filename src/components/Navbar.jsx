import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleResume = () => {
    window.open(`${import.meta.env.BASE_URL}resume.html`, '_blank');
  };

  // Scroll progress + scrolled state
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 20);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);
    const observers = [];

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -55% 0px',
      threshold: 0,
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matchedLink = navLinks.find((l) => l.id === id);
            if (matchedLink) setActive(matchedLink.title);
          }
        });
      }, observerOptions);

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (toggle) setActive('');
  }, [toggle]);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-500 ${
          scrolled ? 'glass-nav' : 'bg-transparent'
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo}
              alt="logo"
              className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(145,94,255,0.8)]"
            />
            <p className="text-white text-[25px] font-bold cursor-pointer flex items-center gap-1">
              <span className="text-[#915EFF]">Sarthak</span>
              <span className="sm:block hidden text-white opacity-70">Khatpe</span>
            </p>
          </Link>

          {/* Desktop Nav */}
          <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`nav-link text-[15px] font-medium cursor-pointer transition-all duration-200 ${
                  active === link.title ? 'text-white' : 'text-secondary'
                } hover:text-white`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            {/* Social Icons */}
            <li className="flex items-center gap-3">
              <a
                href="https://github.com/sarthak425?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors duration-200"
                title="GitHub Repositories"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/sarthak-khatpe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-[#0A66C2] transition-colors duration-200"
                title="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </li>
            <li>
              <button
                onClick={toggleResume}
                className="px-5 py-2 rounded-full border border-[#915EFF] text-[#915EFF] text-[14px] font-semibold hover:bg-[#915EFF] hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(145,94,255,0.5)]"
              >
                Resume
              </button>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[18px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`glass-card p-6 absolute top-16 right-4 min-w-[160px] z-10 rounded-2xl transition-all duration-300 ${
                toggle ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
              }`}
            >
              <ul className="list-none flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? 'text-white' : 'text-secondary'
                    } hover:text-white text-[16px] font-medium cursor-pointer`}
                    onClick={() => {
                      setToggle(false);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
                <li>
                  <a
                    href="https://github.com/sarthak425?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-white text-[16px] font-medium"
                    onClick={() => setToggle(false)}
                  >
                    GitHub Repos
                  </a>
                </li>
                <li>
                  <button
                    onClick={toggleResume}
                    className="text-secondary hover:text-white text-[16px] font-medium"
                  >
                    Resume
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
