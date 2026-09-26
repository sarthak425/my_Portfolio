import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const stats = [
  { value: 16, suffix: "+", label: "Projects Built" },
  { value: 20, suffix: "+", label: "GitHub Repositories" },
  { value: 12, suffix: "+", label: "Technologies" },
  { value: 200, suffix: "+", label: "GitHub Commits" },
];

const AnimatedCounter = ({ value, suffix, label, animate }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [animate, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center group"
    >
      <div
        className="w-28 h-28 rounded-2xl flex flex-col items-center justify-center mb-3 relative overflow-hidden"
        style={{
          background: "rgba(145,94,255,0.08)",
          border: "1px solid rgba(145,94,255,0.25)",
          boxShadow: "0 0 30px rgba(145,94,255,0.1)",
        }}
      >
        <span className="text-4xl font-black text-white group-hover:text-[#915EFF] transition-colors duration-300">
          {count}{suffix}
        </span>
      </div>
      <p className="text-secondary text-sm text-center font-medium">{label}</p>
    </motion.div>
  );
};

const Stats = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-16">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
        {stats.map((stat) => (
          <AnimatedCounter key={stat.label} {...stat} animate={inView} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Stats, "stats");
