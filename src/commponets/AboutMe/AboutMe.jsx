import React, { useEffect, useState } from "react";
import { FaCode, FaPaintBrush, FaGamepad, FaBookOpen, FaGlobe, FaPenNib, FaFilm } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillList = [
  { skill: "Clean Code", level: 90 },
  { skill: "Problem Solving", level: 85 },
  { skill: "UI/UX Design", level: 85 },
  { skill: "Continuous Learning", level: 100 },
  { skill: "Full-Stack MERN", level: 95 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, when: "beforeChildren" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const skillBarVariants = {
  hidden: { width: 0 },
  show: (level) => ({
    width: `${level}%`,
    transition: { duration: 1.2, ease: "easeOut" },
  }),
};

const AboutMe = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  // Typewriter text animation state
  const [typed, setTyped] = useState("");
  const fullText = "Passionate MERN Stack Developer";

  useEffect(() => {
    if (inView) controls.start("show");
  }, [controls, inView]);

  useEffect(() => {
    if (!inView) return;
    let index = 0;
    const interval = setInterval(() => {
      setTyped(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section
      id="about"
      className="bg-black text-white py-20 px-6 sm:px-12 relative overflow-hidden select-none"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Title with shimmering gradient */}
        <motion.h2
          ref={ref}
          initial={{ backgroundPosition: "-200% 0%" }}
          animate={{ backgroundPosition: ["-200% 0%", "200% 0%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="text-5xl md:text-5xl font-extrabold mb-20 text-center bg-gradient-to-r from-indigo-600 via-teal-500 to-indigo-600 bg-clip-text text-transparent tracking-wide drop-shadow-md"
          style={{ backgroundSize: "200% 100%" }}
        >
          ABOUT ME
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Introduction and personality */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-12 text-gray-300"
          >
            <motion.div variants={itemVariants} className="flex items-start gap-6">
              <FaCode className="text-indigo-600 text-5xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-3xl font-semibold mb-3 text-white">
                  My Programming Journey
                </h3>
                <p className="leading-relaxed text-lg">
                  I am a passionate MERN Stack Developer. My programming journey began during college when I built my first website using WordPress. Since then, I have been fascinated by the endless possibilities coding offers. I enjoy creating scalable full-stack applications that solve real-world problems and pushing my skills every day through continuous learning.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start gap-6">
              <FaPaintBrush className="text-indigo-600 text-5xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-3xl font-semibold mb-3 text-white">
                  The Work I Enjoy
                </h3>
                <p className="leading-relaxed text-lg">
                  I love projects that blend technical expertise with creativity. Designing intuitive user interfaces and crafting efficient backend systems excite me the most. Every challenge motivates me to innovate and deliver meaningful solutions.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start gap-6">
              <FaGlobe className="text-indigo-600 text-4xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-3xl font-semibold mb-3 text-white">My Hobbies</h3>
                <p className="leading-relaxed text-lg">
                  Outside programming, I love traveling to new places, blogging about my experiences, reading books that expand my horizons, and watching movies to unwind and find inspiration. When I’m not coding, I enjoy gaming (Valorant, PUBG, Free Fire) and digital painting. These interests fuel my
                  creativity and keep me balanced. I also enjoy mentoring new
                  developers and sharing knowledge.
                </p>
              </div>
            </motion.div>

            {/* Typewriter tagline */}
            <motion.div
              variants={itemVariants}
              className="text-center mt-12"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-indigo-600 via-teal-500 to-indigo-600 bg-clip-text text-transparent inline-block">
                {typed}
                <span className="animate-pulse text-teal-400">|</span>
              </h3>
            </motion.div>
          </motion.div>

          {/* Right: Skills with progress bars */}
          <motion.div
            ref={ref}
            variants={itemVariants}
            initial="hidden"
            animate={controls}
            className="bg-gray-900 p-12 rounded-2xl shadow-xl"
          >
            <h3 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-indigo-600 via-teal-500 to-indigo-600 bg-clip-text text-transparent tracking-wide">
              My Skills & Approach
            </h3>
            <ul className="space-y-8">
              {skillList.map(({ skill, level }, i) => (
                <li key={i}>
                  <div className="flex justify-between mb-2 text-lg font-semibold text-white select-text">
                    <span>{skill}</span>
                    <span className="text-teal-400">{level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-5 shadow-inner overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-indigo-600 via-teal-500 to-indigo-600 h-5 rounded-full shadow-lg"
                      custom={level}
                      variants={skillBarVariants}
                      initial="hidden"
                      animate={controls}
                      whileHover={{ scale: 1.05, boxShadow: "0 0 15px #14b8a6" }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Background big text */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 left-1/2 transform -translate-x-1/2 opacity-10 select-none"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 0.12 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
      >
        <h1 className="text-[12rem] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-teal-500 to-indigo-600 tracking-tight select-none">
          About
        </h1>
      </motion.div>
    </section>
  );
};

export default AboutMe;
