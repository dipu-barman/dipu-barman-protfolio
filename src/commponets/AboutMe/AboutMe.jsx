import React, { useEffect, useState } from "react";
import { FaCode, FaPaintBrush, FaBook } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillList = [
  { skill: "Clean Code", level: 90 },
  { skill: "Problem Solving", level: 80 },
  { skill: "UI/UX Design", level: 90 },
  { skill: "Continuous Learning", level: 100 },
];

const aboutItems = [
  {
    icon: <FaCode className="text-indigo-600 text-4xl mt-1 flex-shrink-0" />,
    title: "My Coding Journey",
    content:
      "My programming adventure began at college when I built my first website using a WordPress theme. Since then, I've fallen in love with the problem-solving aspect of development. Currently specializing in the MERN stack, I enjoy creating full-stack applications that solve real-world problems. What excites me most is learning new technologies and pushing the boundaries of what I can build.",
  },
  {
    icon: <FaPaintBrush className="text-indigo-600 text-4xl mt-1 flex-shrink-0" />,
    title: "Creative Problem Solver",
    content:
      "I thrive on projects that require both technical skills and creative thinking. Whether it's designing intuitive user interfaces or architecting efficient backend systems, I approach each challenge with enthusiasm. My happy place? That moment when all the components come together to create something greater than the sum of its parts.",
  },
  {
    icon: <FaBook className="text-indigo-600 text-4xl mt-1 flex-shrink-0" />,
    title: "Beyond the Keyboard",
    content:
      "When I'm not coding, you'll find me watching movies or experimenting with games like Valorant, Free Fire, and PUBG. Diverse interests fuel creativity. I'm passionate about tech education and mentoring aspiring developers in my community.",
  },
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

const shimmerTextVariants = {
  initial: { backgroundPosition: "-200% 0%" },
  animate: {
    backgroundPosition: ["-200% 0%", "200% 0%"],
    transition: { duration: 3, repeat: Infinity, ease: "linear" },
  },
};

const AboutMe = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  // Typewriter text animation state
  const [typed, setTyped] = useState("");
  const fullText = "Passionate Full-Stack Developer";

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
          initial="initial"
          animate="animate"
          variants={shimmerTextVariants}
          className="text-5xl md:text-5xl font-extrabold mb-20 text-center bg-gradient-to-r from-indigo-600 via-teal-500 to-indigo-600 bg-clip-text text-transparent tracking-wide drop-shadow-md"
          style={{ backgroundSize: "200% 100%" }}
        >
          ABOUT ME
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Animated about sections */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-12"
          >
            {aboutItems.map(({ icon, title, content }, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start gap-6 cursor-default group"
              >
                <motion.div
                  whileHover={{ scale: 1.3, color: "#14b8a6", rotate: 15 }} // teal-500 hex
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.div>
                <div>
                  <h3 className="text-3xl font-semibold mb-3 bg-gradient-to-r from-indigo-600 via-teal-500 to-indigo-600 bg-clip-text text-transparent tracking-tight group-hover:underline underline-offset-4 decoration-teal-400 decoration-2 transition-all">
                    {title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{content}</p>
                </div>
              </motion.div>
            ))}

            {/* Typewriter tagline with pulse */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ delay: aboutItems.length * 0.3 + 0.4, duration: 0.8 }}
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
              My Approach
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

      {/* Additional styles */}
      <style jsx>{`
        .text-gradient-pulse {
          background: linear-gradient(
            270deg,
            #2563eb,
            #14b8a6,
            #2563eb,
            #14b8a6,
            #2563eb
          );
          background-size: 600% 600%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: pulseGradient 6s ease infinite;
        }
        @keyframes pulseGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
