import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags.map((t) => t.name)))];

const ProjectCard = ({ name, description, tags, image, source_code_link, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.6)}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
    >
      <Tilt
        options={{ max: 15, scale: 1.02, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full project-card glass-card"
      >
        {/* Image */}
        <div className="relative w-full h-[230px] overflow-hidden rounded-xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-110"
          />
          {/* GitHub overlay */}
          <div className="absolute inset-0 flex justify-end items-start m-3 card-img_hover opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/80 backdrop-blur border border-[#915EFF] hover:bg-[#915EFF] transition-all duration-300 hover:shadow-[0_0_15px_rgba(145,94,255,0.8)]"
            >
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
          {/* Gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#151030] to-transparent" />
        </div>

        {/* Content */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px] hover:text-[#915EFF] transition-colors duration-200 cursor-pointer"
            onClick={() => window.open(source_code_link, "_blank")}
          >
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[13px] leading-relaxed line-clamp-3">{description}</p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className={`text-[12px] px-2 py-1 rounded-full bg-black/30 border border-white/10 ${tag.color} font-medium`}
            >
              #{tag.name}
            </span>
          ))}
        </div>

        {/* View on GitHub link */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="flex items-center gap-2 text-[#915EFF] text-[13px] font-semibold hover:text-[#00cea8] transition-colors duration-200 group"
          >
            <img src={github} alt="github" className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100" />
            View on GitHub
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) =>
          p.tags.some((t) => t.name === activeFilter)
        );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText} section-head-text`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples.
          Each project is briefly described with links to code repositories.
        </motion.p>
      </div>

      {/* Filter tabs */}
      <motion.div
        variants={fadeIn("", "", 0.2, 0.8)}
        className="mt-8 flex flex-wrap gap-3"
      >
        {["All", "Java", "React", "Spring Boot"].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`filter-tab px-4 py-2 rounded-full text-[13px] font-semibold border transition-all duration-300 ${
              activeFilter === filter
                ? "active border-transparent text-white shadow-[0_0_20px_rgba(145,94,255,0.5)]"
                : "border-[#915EFF]/30 text-secondary hover:border-[#915EFF]/60"
            }`}
          >
            {filter}
          </button>
        ))}
        <span className="ml-2 self-center text-secondary text-[13px]">
          {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
        </span>
      </motion.div>

      {/* Cards grid */}
      <motion.div layout className="mt-12 flex flex-wrap gap-7">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={`project-${project.name}`}
              index={index}
              {...project}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "");
