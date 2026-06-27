import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";

const TechCard = ({ index, name, icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.5)}
      className="w-28 h-28"
    >
      <Tilt
        options={{
          max: 35,
          scale: 1.1,
          speed: 450,
        }}
        className="w-full h-full rounded-full p-[2px] green-pink-gradient cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(145,94,255,0.6)] transition-all duration-300"
      >
        <div
          className="bg-tertiary rounded-full w-full h-full flex justify-center items-center flex-col relative overflow-hidden group"
          style={{
            background: "radial-gradient(circle at 30% 30%, #151030 0%, #090325 100%)",
          }}
        >
          {/* Opluent inner light effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#915EFF10] to-[#00cea810] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          {/* Subtle sphere shadow overlay */}
          <div className="absolute inset-0 rounded-full shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.6),inset_10px_10px_20px_rgba(255,255,255,0.05)] pointer-events-none" />

          <img
            src={icon}
            alt={name}
            className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110 float-animation"
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          />
          
          {/* Hover tooltip for tech name */}
          <span className="absolute bottom-2 text-[10px] text-secondary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            {name}
          </span>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Tech = () => (
  <div className="flex flex-row flex-wrap justify-center gap-10">
    {technologies.map((tech, index) => (
      <TechCard key={tech.name} index={index} {...tech} />
    ))}
  </div>
);

export default SectionWrapper(Tech, "");
