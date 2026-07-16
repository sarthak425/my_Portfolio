import React, { useState } from "react";
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

// Split experiences into categories
const educationItems = experiences.filter((e) =>
  ["BCA", "MCA", "Full stack Java developer Course"].includes(e.title)
);
const workItems = experiences.filter((e) =>
  ["internship", "Machine Learning Internship "].includes(e.title)
);

const ExperienceCard = ({ experience }) => (
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

const TAB_STYLES = {
  active:
    "bg-gradient-to-r from-[#915EFF] to-[#00cea8] text-white shadow-[0_0_20px_rgba(145,94,255,0.5)] border-transparent",
  inactive:
    "border-[#915EFF]/30 text-secondary hover:border-[#915EFF]/60 hover:text-white",
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const displayedItems = activeTab === "education" ? educationItems : workItems;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center section-head-text`}>
          Experience & Education
        </h2>
      </motion.div>

      {/* Tab Switcher */}
      <motion.div
        variants={fadeIn("", "", 0.2, 0.8)}
        className="mt-8 flex justify-center gap-4"
      >
        {[
          { key: "experience", label: "💼 Work Experience" },
          { key: "education", label: "🎓 Education" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-2 rounded-full text-[14px] font-semibold border transition-all duration-300 ${
              activeTab === tab.key ? TAB_STYLES.active : TAB_STYLES.inactive
            }`}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      <div className="mt-14 flex flex-col">
        <VerticalTimeline lineColor="linear-gradient(to bottom, #915EFF, #00cea8)">
          {displayedItems.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
