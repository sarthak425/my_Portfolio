import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn } from "../utils/motion";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/sarthak425",
    icon: "🐙",
    color: "#ffffff",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sarthak-khatpe",
    icon: "💼",
    color: "#0A66C2",
  },
  {
    name: "Email",
    url: "mailto:sarthakkhatpe24@gmail.com",
    icon: "✉️",
    color: "#915EFF",
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

    if (!validateEmail(form.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    if (!form.name.trim()) {
      setNameError("Name is required.");
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
        {/* Background glow */}
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

          {/* Social links */}
          <div className="mt-10 pt-6 border-t border-[#915EFF]/20">
            <p className="text-secondary text-[13px] mb-4 uppercase tracking-wider">
              Or reach me on
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-[13px] font-semibold text-white"
                  title={link.name}
                >
                  <span>{link.icon}</span>
                  <span className="hidden sm:inline">{link.name}</span>
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
