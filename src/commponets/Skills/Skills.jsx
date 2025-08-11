import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Marquee from "react-fast-marquee";
import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiPostman,
  SiFirebase,
  SiVercel,
} from "react-icons/si";
import { Fade } from "react-awesome-reveal";

const waveSvg = (
  <svg
    className="absolute bottom-0 left-0 w-full h-20 opacity-20"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="url(#gradient)"
      fillOpacity="0.4"
      d="M0,64L60,85.3C120,107,240,149,360,165.3C480,181,600,171,720,165.3C840,160,960,160,1080,149.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
    />
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#00FFFF" />
        <stop offset="50%" stopColor="#007FFF" />
        <stop offset="100%" stopColor="#00FFFF" />
      </linearGradient>
    </defs>
  </svg>
);

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) controls.start("show");
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, rotateX: 10 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", stiffness: 140, damping: 25 },
    },
  };

  const allSkills = [
    { name: "React.js", level: 90, icon: <FaReact className="text-4xl text-cyan-400" />, category: "frontend" },
    { name: "JavaScript", level: 85, icon: <SiJavascript className="text-4xl text-yellow-400" />, category: "frontend" },
    { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="text-4xl text-teal-400" />, category: "frontend" },
    { name: "HTML5", level: 90, icon: <SiHtml5 className="text-4xl text-orange-500" />, category: "frontend" },
    { name: "CSS3", level: 85, icon: <SiCss3 className="text-4xl text-blue-500" />, category: "frontend" },
    { name: "Node.js", level: 85, icon: <FaNodeJs className="text-4xl text-green-500" />, category: "backend" },
    { name: "Express.js", level: 80, icon: <SiExpress className="text-4xl text-gray-300" />, category: "backend" },
    { name: "REST API", level: 85, icon: <div className="text-3xl font-bold text-white">API</div>, category: "backend" },
    { name: "JWT", level: 75, icon: <div className="text-3xl font-bold text-yellow-400">JWT</div>, category: "backend" },
    { name: "MongoDB", level: 85, icon: <SiMongodb className="text-4xl text-green-600" />, category: "database" },
    { name: "Git", level: 85, icon: <SiGit className="text-4xl text-red-500" />, category: "tools" },
    { name: "GitHub", level: 90, icon: <SiGithub className="text-4xl text-gray-300" />, category: "tools" },
    { name: "Postman", level: 70, icon: <SiPostman className="text-4xl text-orange-400" />, category: "tools" },
    { name: "Firebase", level: 80, icon: <SiFirebase className="text-4xl text-yellow-300" />, category: "tools" },
    { name: "Vercel", level: 80, icon: <SiVercel className="text-4xl text-purple-400" />, category: "tools" },
  ];

  // Neon glow effect class
  const neonGlow = "drop-shadow-[0_0_8px_rgba(0,255,255,0.9)]";

  // Floating oscillation animation for cards
  const floatTransition = {
    y: {
      duration: 4,
      yoyo: Infinity,
      ease: "easeInOut",
    },
    rotateY: {
      duration: 8,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <Fade delay={100}>
      <section
        id="skills"
        className="relative py-20 px-8 text-white select-none"
        style={{ backgroundColor: "black" }}
      >
        {/* Background wave */}
        {waveSvg}

        <div className="container mx-auto max-w-7xl">
              <h2 className="text-5xl sm:text-5xl text-center font-extrabold mb-4 bg-gradient-to-r from-indigo-600 via-teal-500  bg-clip-text text-transparent "> Technical Skills</h2>
          
          
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={container}
            className="text-center mb-16"
          >
            {/* <motion.h2
              variants={item}
              className="text-5xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent"
            >
              Technical Skills
            </motion.h2> */}
            <p variants={item} className="text-gray-300 max-w-3xl mx-auto text-xl tracking-wide">
              Technologies and tools I use to build scalable and performant applications with modern standards.
            </p>
          </motion.div>

          <motion.div variants={container} className="space-y-16">
            {/* First Marquee row */}
            <motion.div variants={item}>
              <Marquee
                gradient={false}
                speed={70}
                pauseOnHover={true}
                direction="right"
                className="cursor-pointer"
              >
                {allSkills.map((skill, idx) => (
                  <motion.div
                    key={`right-${idx}`}
                    whileHover={{
                      scale: 1.12,
                      rotateY: 15,
                      rotateX: 8,
                      textShadow:
                        "0 0 10px rgba(0,255,255,0.8), 0 0 20px rgba(0,255,255,0.6)",
                      boxShadow:
                        "0 0 15px rgba(0,255,255,0.8), 0 0 25px rgba(0,255,255,0.6)",
                      transition: { type: "spring", stiffness: 300, damping: 30 },
                    }}
                    animate={{
                      y: [0, -6, 0, 6, 0],
                      rotateY: [0, 5, 0, -5, 0],
                    }}
                    transition={floatTransition}
                    className="flex flex-col items-center justify-center mx-6 px-8 py-6 rounded-3xl border border-cyan-400/50"
                    style={{ minWidth: 150, perspective: 1200 }}
                  >
                    <div className={`${neonGlow} mb-4`}>
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-semibold mb-2 tracking-wide text-cyan-300 drop-shadow-lg">
                      {skill.name}
                    </h4>
                    <div className="relative w-full bg-gray-900 rounded-full h-4 overflow-hidden shadow-lg shadow-cyan-700/50">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: `${skill.level}%`,
                          background: [
                            "linear-gradient(90deg, #00fff7 0%, #00d2ff 50%, #00fff7 100%)",
                            "linear-gradient(90deg, #00d2ff 0%, #00fff7 50%, #00d2ff 100%)",
                          ],
                          backgroundSize: ["200% 100%", "200% 100%"],
                          backgroundPosition: ["200% 0", "0 0"],
                        }}
                        transition={{
                          width: { duration: 1.7, ease: "easeInOut" },
                          backgroundPosition: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                          },
                        }}
                        className="h-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500"
                        style={{ backgroundSize: "200% 100%" }}
                      />
                    </div>
                    <span className="text-xs mt-2 text-cyan-400 font-mono tracking-wider">{skill.level}%</span>
                  </motion.div>
                ))}
              </Marquee>
            </motion.div>

            {/* Second Marquee row */}
            <motion.div variants={item}>
              <Marquee
                gradient={false}
                speed={70}
                pauseOnHover={true}
                direction="left"
                className="cursor-pointer"
              >
                {[...allSkills].reverse().map((skill, idx) => (
                  <motion.div
                    key={`left-${idx}`}
                    whileHover={{
                      scale: 1.12,
                      rotateY: 15,
                      rotateX: 8,
                      textShadow:
                        "0 0 10px rgba(0,255,255,0.8), 0 0 20px rgba(0,255,255,0.6)",
                      boxShadow:
                        "0 0 15px rgba(0,255,255,0.8), 0 0 25px rgba(0,255,255,0.6)",
                      transition: { type: "spring", stiffness: 300, damping: 30 },
                    }}
                    animate={{
                      y: [0, 6, 0, -6, 0],
                      rotateY: [0, -5, 0, 5, 0],
                    }}
                    transition={floatTransition}
                    className="flex flex-col items-center justify-center mx-6 px-8 py-6 rounded-3xl border border-cyan-400/50"
                    style={{ minWidth: 150, perspective: 1200 }}
                  >
                    <div className={`${neonGlow} mb-4`}>
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-semibold mb-2 tracking-wide text-cyan-300 drop-shadow-lg">
                      {skill.name}
                    </h4>
                    <div className="relative w-full bg-gray-900 rounded-full h-4 overflow-hidden shadow-lg shadow-cyan-700/50">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: `${skill.level}%`,
                          background: [
                            "linear-gradient(90deg, #00fff7 0%, #00d2ff 50%, #00fff7 100%)",
                            "linear-gradient(90deg, #00d2ff 0%, #00fff7 50%, #00d2ff 100%)",
                          ],
                          backgroundSize: ["200% 100%", "200% 100%"],
                          backgroundPosition: ["200% 0", "0 0"],
                        }}
                        transition={{
                          width: { duration: 1.7, ease: "easeInOut" },
                          backgroundPosition: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                          },
                        }}
                        className="h-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500"
                        style={{ backgroundSize: "200% 100%" }}
                      />
                    </div>
                    <span className="text-xs mt-2 text-cyan-400 font-mono tracking-wider">{skill.level}%</span>
                  </motion.div>
                ))}
              </Marquee>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Fade>
  );
};

export default Skills;
