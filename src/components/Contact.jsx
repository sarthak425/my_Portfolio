import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn } from "../utils/motion";

// SVG Icons
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/sarthak425",
    icon: <GitHubIcon />,
    hoverColor: "hover:border-white/60 hover:text-white",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sarthak-khatpe",
    icon: <LinkedInIcon />,
    hoverColor: "hover:border-[#0A66C2]/60 hover:text-[#0A66C2]",
  },
  {
    name: "Email",
    url: "mailto:sarthakkhatpe24@gmail.com",
    icon: <EmailIcon />,
    hoverColor: "hover:border-[#915EFF]/60 hover:text-[#915EFF]",
  },
];

const InputField = ({ label, value, onChange, placeholder, name, type, isTextarea }) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-3 text-[14px] tracking-wide">{label}</span>
    {isTextarea ? (
      <textarea
        rows={5}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-[#1d1836] py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-[#915EFF]/20 font-medium resize-none input-glow transition-all duration-300 focus:border-[#915EFF]/60"
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-[#1d1836] py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-[#915EFF]/20 font-medium input-glow transition-all duration-300 focus:border-[#915EFF]/60"
      />
    )}
  </label>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setNameError("");
    setConfirmation("");

    if (!form.name.trim()) {
      setNameError("Name is required.");
      return;
    }
    if (!validateEmail(form.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_azsaobb",
        "template_kfumb0d",
        {
          from_name: form.name,
          to_name: "Sarthak Khatpe",
          from_email: form.email,
          to_email: "sarthakkhatpe24@gmail.com",
          message: form.message,
        },
        "xxvK2qybkwWIFB-Zs"
      )
      .then(() => {
        setLoading(false);
        setConfirmation("✅ Thank you! I will get back to you as soon as possible.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setConfirmation("❌ Something went wrong. Please try again.");
      });
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Form Panel */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8 rounded-2xl relative overflow-hidden"
        style={{
          background: "rgba(16, 13, 37, 0.85)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(145, 94, 255, 0.2)",
          boxShadow: "0 20px 60px rgba(145, 94, 255, 0.1)",
        }}
      >
        {/* Background glow blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#915EFF] opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00cea8] opacity-5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={`${styles.sectionHeadText} section-head-text mb-8`}>Contact Me</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
            <InputField
              label="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              type="text"
            />
            {nameError && (
              <span className="text-red-400 text-[13px] -mt-3">{nameError}</span>
            )}

            <InputField
              label="Email Address"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              type="email"
            />
            {emailError && (
              <span className="text-red-400 text-[13px] -mt-3">{emailError}</span>
            )}

            <InputField
              label="Your Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              type="text"
              isTextarea
            />

            <button
              type="submit"
              disabled={loading}
              className="submit-btn py-3 px-10 rounded-xl text-white font-bold text-[15px] w-fit disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                "Send Message 🚀"
              )}
            </button>

            {confirmation && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-[14px] font-medium ${
                  confirmation.startsWith("✅") ? "text-green-400" : "text-red-400"
                }`}
              >
                {confirmation}
              </motion.p>
            )}
          </form>

          {/* Social Links with SVG icons */}
          <div className="mt-10 pt-6 border-t border-[#915EFF]/20">
            <p className="text-secondary text-[13px] mb-4 uppercase tracking-wider">
              Or reach me on
            </p>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-[13px] font-semibold text-secondary border border-white/10 transition-all duration-300 ${link.hoverColor}`}
                  title={link.name}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
