import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "rgba(29, 24, 54, 0.85)",
      backdropFilter: "blur(10px)",
      color: "#fff",
      border: "1px solid rgba(145, 94, 255, 0.2)",
      borderRadius: "16px",
      boxShadow: "0 10px 40px rgba(145, 94, 255, 0.15)",
    }}
    contentArrowStyle={{ borderRight: "7px solid rgba(145, 94, 255, 0.4)" }}
    date={
      <span
        style={{
          color: "#aaa6c3",
          fontWeight: 600,
          fontSize: "14px",
          textShadow: "0 0 10px rgba(145,94,255,0.4)",
        }}
      >
        {experience.date}
      </span>
    }
    iconStyle={{
      background: experience.iconBg,
      boxShadow: "0 0 0 4px #1d1836, 0 0 20px rgba(145, 94, 255, 0.5)",
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[22px] font-bold">{experience.title}</h3>
      <p
        className="text-[#915EFF] text-[15px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-4 list-disc ml-5 space-y-2">
      {experience.points.map((point, idx) => (
        <li
          key={`experience-point-${idx}`}
          className="text-white-100 text-[13px] pl-1 tracking-wide leading-relaxed"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
        What I have done so far
      </p>
      <h2 className={`${styles.sectionHeadText} text-center section-head-text`}>
        Work Experience
      </h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline lineColor="linear-gradient(to bottom, #915EFF, #00cea8)">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
            index={index}
          />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Experience, "work");
