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
    window.open('/Resume.pdf');
  };

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
            <p className="text-white text-[18px] font-bold cursor-pointer flex items-center gap-1">
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
