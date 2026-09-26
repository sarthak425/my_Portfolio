import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";

const CertificationCard = ({ name, issuer, date, image, link, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="bg-tertiary p-5 rounded-2xl sm:w-[320px] w-full glass-card hover:shadow-[0_0_30px_rgba(145,94,255,0.3)] transition-all duration-300"
  >
    <div className="relative w-full h-[200px] rounded-xl overflow-hidden mb-4">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
    
    <div>
      <h3 className="text-white font-bold text-[18px] mb-2">{name}</h3>
      <p className="text-secondary text-[14px] mb-1">{issuer}</p>
      <p className="text-white/50 text-[12px] mb-4">{date}</p>
      
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00d4ff] text-[13px] font-semibold hover:text-white transition-colors duration-200 flex items-center gap-1"
        >
          View Certificate <span className="text-[16px]">→</span>
        </a>
      )}
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My achievements</p>
        <h2 className={`${styles.sectionHeadText} section-head-text`}>Certifications.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some of the professional certifications and courses I have completed to enhance my skills and stay up-to-date with industry standards.
        </motion.p>
      </div>

      <div className="mt-12 flex flex-wrap gap-7">
        {certifications.map((cert, index) => (
          <CertificationCard key={cert.name} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
