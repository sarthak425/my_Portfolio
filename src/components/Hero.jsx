// Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto overflow-hidden"
      style={{
        backgroundImage: "url('/herobg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#050816]/60 z-0" />

      {/* TEXT CONTENT */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-20 pointer-events-none`}
      >
        {/* Left purple dot + line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-5 h-5 rounded-full bg-[#915EFF] shadow-[0_0_15px_rgba(145,94,255,0.8)]"
          />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text block */}
        <div className="mt-3">
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm{" "}
            <span className="text-[#915EFF] glow-text-purple">Sarthak</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className={`${styles.heroSubText} mt-3 text-white-100`}
          >
            I do{" "}
            <span className="text-[#915EFF] font-semibold inline-block min-w-[240px]">
              <Typewriter
                options={{
                  strings: [
                    "Java Full Stack Developer",
                    "Spring Boot",
                    "React",
                    "Spring AI",
                    "MySQL",
                    "HTML/CSS/JS",
                    "REST APIs",
                    "WebSocket"
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: "natural",
                  pauseFor: 1200,
                }}
              />
            </span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex gap-4 mt-8 pointer-events-auto"
          >
            <a
              href="#about"
              className="px-6 py-3 rounded-full bg-[#915EFF] text-white font-semibold text-sm hover:bg-[#7a4fd6] transition-all duration-300 hover:shadow-[0_0_25px_rgba(145,94,255,0.6)] hover:-translate-y-1 inline-block"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-[#915EFF] text-[#915EFF] font-semibold text-sm hover:bg-[#915EFF] hover:text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(145,94,255,0.4)] hover:-translate-y-1 inline-block"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* 3D CANVAS — hidden on very small phones, visible from xs up */}
      <div className="absolute inset-0 z-10 hidden xs:block">
        <ComputersCanvas />
      </div>

      {/* Mobile fallback glow — shown only on very small phones */}
      <div className="absolute bottom-0 left-0 right-0 h-48 xs:hidden z-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(145,94,255,0.25) 0%, transparent 70%)",
        }}
      />

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20"
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2 hover:border-[#915EFF] transition-colors duration-300">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
