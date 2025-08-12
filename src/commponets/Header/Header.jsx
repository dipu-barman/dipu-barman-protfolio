import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaFileDownload,
  FaEye,
} from "react-icons/fa";
import { SiReact, SiJavascript, SiNodedotjs, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
import Photo from "../../assets/IMG_20240221_205146.jpg";
import CV from "../../assets/Dipu Barman-cv-formate.pdf";
import { useEffect, useState } from "react";

const skillIcons = [
  { Icon: SiReact, name: "React" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiNodedotjs, name: "Node.js" },
  { Icon: SiMongodb, name: "MongoDB" },
];

const Header = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const fullText = "MERN Stack Developer";

  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(typing);
    }, 100);
    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 40;
      const y = (window.innerHeight / 2 - e.clientY) / 40;
      setRotate({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Dipu_barman_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const previewCV = () => {
    window.open(
      "https://drive.google.com/file/d/1wlz-uoznogcxHdXDy4AUZh9QlS6RLHhx/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <Fade delay={100}>
      <motion.header
        id="home"
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="relative flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 py-16 md:py-24 overflow-hidden text-white"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12 z-10">
          {/* TEXT SECTION */}
          <motion.div
            ref={ref}
            variants={container}
            className="text-center md:text-left max-w-2xl order-2 md:order-1"
          >
            <motion.h1
              variants={item}
              className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-300"
            >
              Hello, I&apos;m
            </motion.h1>

            <motion.h2
              variants={item}
              className="text-5xl font-extrabold mb-3 
                bg-gradient-to-r from-indigo-500 via-teal-400 to-indigo-500
                bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x
                drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)]"
            >
              DIPU BARMAN
            </motion.h2>

            <motion.h3
              variants={item}
              className="text-xl font-medium text-gray-300"
            >
              {typedText}
              <span className="animate-pulse">|</span>
            </motion.h3>

            <motion.p
              variants={item}
              className="text-lg mt-6 mb-8 leading-relaxed text-gray-400"
            >
                I specialize in building Mern-stack web applications using
              MongoDB, Express.js, React, and Node.js. Focused on creating
              efficient, scalable solutions with clean code architecture.
            </motion.p>

            {/* Social Links */}
            <motion.div variants={container} className="flex flex-col gap-4">
              <motion.div variants={item} className="flex gap-4">
                {[
                  { Icon: FaGithub, link: "https://github.com/dipu-barman" },
                  {
                    Icon: FaLinkedin,
                    link: "https://www.linkedin.com/in/dipu-barman/",
                  },
                  {
                    Icon: FaFacebook,
                    link: "https://www.facebook.com/dipu.borman.3",
                  },
                ].map(({ Icon, link }, idx) => (
                  <motion.a
                    key={idx}
                    whileHover={{ scale: 1.3, rotate: 5 }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link}
                    className="text-2xl text-gray-500 hover:text-blue-500"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div variants={item} className="flex gap-3 flex-wrap">
                <button
                  onClick={handleDownload}
                  className="flex items-center px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-lg"
                >
                  Download CV <FaFileDownload className="ml-2" />
                </button>
                <button
                  onClick={previewCV}
                  className="flex items-center px-4 py-2 rounded-lg border border-blue-500 text-gray-300 hover:bg-blue-900 hover:text-white"
                >
                  Preview CV <FaEye className="ml-2" />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* IMAGE + SKILL ORBIT */}
          <motion.div variants={imageVariants} className="relative order-1 md:order-2">
            <motion.div
              style={{
                transform: `rotateY(${rotate.x}deg) rotateX(${rotate.y}deg)`,
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative rounded-full p-[6px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-border-spin shadow-[0_0_50px_rgba(0,0,0,0.95)]"
            >
              <motion.img
                src={Photo}
                alt="Dipu Barman"
                className="rounded-full w-[320px] sm:w-[320px] md:w-[380px] h-[330px] lg:h-[380px] object-cover object-top relative z-10"
              />

              {/* Orbiting skill icons */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-full relative animate-skill-orbit">
                  {skillIcons.map(({ Icon, name }, idx) => {
                    // Each icon gets a delay to offset its animation start
                    const delay = `${(idx * 2.5).toFixed(2)}s`;
                    return (
                      <motion.div
                        key={idx}
                        className="absolute top-1/2 left-1/2"
                        style={{
                          transformOrigin: "70px center",
                          marginLeft: -28,
                          marginTop: -28,
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          width: "56px",
                          height: "56px",
                          backgroundColor: "rgba(0,0,0,0.8)",
                          borderRadius: "9999px",
                          border: "1px solid rgba(255,255,255,0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          boxShadow: "0 0 15px rgba(0,0,0,0.8)",
                          cursor: "default",
                          rotate: 0,
                          animation: `orbit 10s linear infinite`,
                          animationDelay: delay,
                        }}
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 10,
                          ease: "linear",
                          repeatType: "loop",
                          delay: parseFloat(delay),
                        }}
                        initial={{ rotate: 0 }}
                        title={name}
                      >
                        <Icon className="text-3xl" />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Animations */}
            <style>
              {`
                @keyframes border-spin {
                  0% { background-position: 0% 50%; }
                  100% { background-position: 200% 50%; }
                }
                .animate-border-spin {
                  background-size: 200% 200%;
                  animation: border-spin 4s linear infinite;
                }
                @keyframes skill-orbit {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
                .animate-skill-orbit {
                  animation: skill-orbit 10s linear infinite;
                }
                @keyframes gradient-x {
                  0%, 100% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                }
                .animate-gradient-x {
                  animation: gradient-x 5s ease infinite;
                }
              `}
            </style>
          </motion.div>
        </div>
      </motion.header>
    </Fade>
  );
};

export default Header;
