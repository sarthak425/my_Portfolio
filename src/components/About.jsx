import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const stats = [
  { value: "15+", label: "Projects Built" },
  { value: "4+", label: "Years Learning" },
  { value: "10+", label: "Technologies" },
  { value: "2", label: "Internships" },
];

/* CSS-only floating shapes — no WebGL context needed */
const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
    {/* Large blurred orbs */}
    <div
      className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-10"
      style={{
        background: "radial-gradient(circle, #915EFF, transparent 70%)",
        animation: "float 7s ease-in-out infinite",
        filter: "blur(40px)",
      }}
    />
    <div
      className="absolute bottom-20 left-5 w-48 h-48 rounded-full opacity-10"
      style={{
        background: "radial-gradient(circle, #00cea8, transparent 70%)",
        animation: "float 9s ease-in-out 2s infinite",
        filter: "blur(30px)",
      }}
    />
    {/* Wireframe hexagons — SVG, no WebGL */}
    <svg
      className="absolute top-16 right-32 opacity-10"
      style={{ animation: "float 6s ease-in-out 1s infinite" }}
      width="80" height="80" viewBox="0 0 80 80" fill="none"
    >
      <polygon points="40,5 75,22.5 75,57.5 40,75 5,57.5 5,22.5"
        stroke="#915EFF" strokeWidth="1.5" fill="none" />
      <polygon points="40,15 65,27.5 65,52.5 40,65 15,52.5 15,27.5"
        stroke="#00cea8" strokeWidth="1" fill="none" opacity="0.6" />
    </svg>
    <svg
      className="absolute bottom-32 right-16 opacity-8"
      style={{ animation: "float 8s ease-in-out 3s infinite" }}
      width="60" height="60" viewBox="0 0 60 60" fill="none"
    >
      <polygon points="30,3 57,18 57,42 30,57 3,42 3,18"
        stroke="#4FC3F7" strokeWidth="1.5" fill="none" />
    </svg>
    <svg
      className="absolute top-1/2 left-0 opacity-8"
      style={{ animation: "float 10s ease-in-out 0.5s infinite" }}
      width="50" height="50" viewBox="0 0 50 50" fill="none"
    >
      <polygon points="25,2 48,13 48,37 25,48 2,37 2,13"
        stroke="#915EFF" strokeWidth="1" fill="none" />
    </svg>
    {/* Rotating ring */}
    <div
      className="absolute top-1/3 right-8 w-32 h-32 rounded-full border border-[#915EFF]/20 opacity-30"
      style={{ animation: "spin 20s linear infinite" }}
    />
    <div
      className="absolute bottom-1/4 left-1/4 w-20 h-20 rounded-full border border-[#00cea8]/20 opacity-20"
      style={{ animation: "spin 15s linear reverse infinite" }}
    />
  </div>
);

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] service-card"
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF08] to-[#00cea808] rounded-[20px] pointer-events-none" />
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain relative z-10 float-animation"
          loading="lazy"
        />
        <h3 className="text-white text-[20px] font-bold text-center relative z-10">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="relative">
      {/* CSS-only 3D-style background — no extra WebGL context */}
      <FloatingShapes />

      <div className="relative z-10">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={`${styles.sectionHeadText} section-head-text`}>Overview</h2>
        </motion.div>

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-6 text-secondary text-[19px] max-w-6xl leading-[38px]"
        >
          I am a passionate and detail-oriented Web Developer with a strong foundation in{' '}
          <span className="text-[#915EFF] font-semibold">Java, React, HTML, CSS</span>, and hands-on
          experience in building full-stack web applications. I have also gained working knowledge of{' '}
          <span className="text-[#00cea8] font-semibold">Node.js, Spring Boot, and .NET</span>. I enjoy
          creating responsive, user-friendly websites and applications that solve real-world problems.
          Currently enhancing my skills through a Java Full Stack Development Course, learning advanced
          backend with Spring Boot, MySQL, and modern React patterns.
        </motion.p>

        {/* Stats Row */}
        <motion.div
          variants={fadeIn('up', 'spring', 0.3, 0.75)}
          className="mt-10 grid grid-cols-2 xs:grid-cols-4 gap-9 max-w-4xl"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeIn('up', 'spring', 0.2 + index * 0.1, 0.6)}
              className="glass-card rounded-2xl p-4 text-center hover:border-[#915EFF] transition-all duration-300 hover:shadow-[0_0_20px_rgba(145,94,255,0.3)]"
            >
              <h3 className="text-[#915EFF] text-[28px] font-black">{stat.value}</h3>
              <p className="text-secondary text-[13px] mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Cards */}
        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
