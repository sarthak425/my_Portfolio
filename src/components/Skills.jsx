import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "from-emerald-400 to-cyan-400",
    border: "border-emerald-500/40",
    iconBg: "bg-emerald-500",
    count: 6,
    skills: [
      { name: "React.js", level: 89 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "JavaScript", level: 81 },
      { name: "Angular", level: 65 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "from-violet-400 to-purple-400",
    border: "border-violet-500/40",
    iconBg: "bg-violet-500",
    count: 6,
    skills: [
      { name: "Java", level: 90 },
      { name: "Spring Boot", level: 86 },
      { name: "Spring Security", level: 78 },
      { name: "Spring AI", level: 70 },
      { name: "Node.js", level: 60 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    title: "Database & Cloud",
    icon: "🗄️",
    color: "from-pink-400 to-rose-400",
    border: "border-pink-500/40",
    iconBg: "bg-pink-500",
    count: 5,
    skills: [
      { name: "MySQL", level: 89 },
      { name: "MongoDB", level: 86 },
      { name: "PostgreSQL", level: 60 },
      { name: "Git & GitHub", level: 68 },
      { name: "Three.js", level: 55 },
    ],
  },
  {
    title: "AI & Python",
    icon: "🤖",
    color: "from-cyan-400 to-blue-400",
    border: "border-cyan-500/40",
    iconBg: "bg-cyan-500",
    count: 5,
    skills: [
      { name: "Python", level: 72 },
      { name: "TensorFlow", level: 81 },
      { name: "Keras", level: 65 },
      { name: "OpenCV", level: 60 },
      { name: "Pandas", level: 68 },
    ],
  },
];

const familiarWith = [
  { name: "HTML 5", emoji: "🟠" },
  { name: "CSS 3", emoji: "🔵" },
  { name: "JavaScript", emoji: "🟡" },
  { name: "React JS", emoji: "⚛️" },
  { name: "Tailwind CSS", emoji: "🩵" },
  { name: "Node JS", emoji: "🟢" },
  { name: "Three JS", emoji: "⬛" },
  { name: "git", emoji: "🔴" },
];

const SkillBar = ({ name, level, color, animate }) => {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-white/80 text-[13px] font-medium">{name}</span>
        <span className="text-white/50 text-[11px]">{level}%</span>
      </div>
      <div className="w-full h-[5px] bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: animate ? `${level}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
};

const SkillCard = ({ category, index }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative bg-[#0d0b1e]/80 backdrop-blur-sm border ${category.border} rounded-2xl p-5 flex-1 min-w-[220px]`}
      style={{ boxShadow: "0 0 30px rgba(0,0,0,0.4)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div
            className={`w-8 h-8 ${category.iconBg} rounded-lg flex items-center justify-center text-sm`}
          >
            {category.icon}
          </div>
          <h3 className="text-white font-bold text-[15px]">{category.title}</h3>
        </div>
        <span className="text-white/40 text-[11px] border border-white/10 rounded-full px-2 py-0.5">
          {category.count} skills
        </span>
      </div>

      {/* Skills */}
      <div>
        {category.skills.map((skill) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={category.color}
            animate={inView}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="mt-12">
      {/* Section Header */}
      <div className="text-center mb-2">
        <p className="text-secondary text-[13px] tracking-[4px] uppercase">
          What I Work With
        </p>
      </div>
      <h2 className="text-white font-black text-[38px] sm:text-[48px] leading-tight mb-10">
        Skills &amp; Technologies.
      </h2>

      {/* Cards Grid */}
      <div className="flex flex-wrap gap-4 w-full">
        {skillCategories.map((cat, i) => (
          <SkillCard key={cat.title} category={cat} index={i} />
        ))}
      </div>

      {/* Also Familiar With */}
      <div className="mt-12 text-center">
        <p className="text-secondary text-[11px] tracking-[4px] uppercase mb-4">
          Also Familiar With
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {familiarWith.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.08, y: -2 }}
              className="flex items-center gap-2 bg-[#0d0b1e]/80 border border-white/10 rounded-full px-4 py-2 text-white/80 text-[13px] font-medium cursor-default backdrop-blur-sm"
            >
              <span>{tech.emoji}</span>
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
