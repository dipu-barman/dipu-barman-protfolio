import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaFileDownload,
  FaEye,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
import Photo from "../../assets/IMG_20240221_205146.jpg";
import CV from "../../assets/Dipu Barman-cv-formate.pdf";
import { useEffect, useState } from "react";

const Header = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const fullText = "MERN Stack Developer";

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(typing);
    }, 100);
    return () => clearInterval(typing);
  }, []);

  // 3D tilt effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 40;
      const y = (window.innerHeight / 2 - e.clientY) / 40;
      setRotate({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Download CV handler
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Dipu_barman_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Preview CV handler
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
        className="relative flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 py-16 md:py-24 overflow-hidden text-white "
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <motion.div
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.15),_transparent)]"
          />
          <motion.div
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(20,184,166,0.05),_transparent)]"
          />
        </div>

        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-0 lg:gap-12 xl:gap-16 z-10">
          {/* Text */}
          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="text-center md:text-left max-w-2xl order-2 md:order-1"
          >
            <motion.h1
              variants={item}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 tracking-wide text-gray-300"
              style={{ color: "#E0E0E0" }} // soft warm gray
            >
              Hello, I&apos;m
            </motion.h1>

            {/* Animated Gradient Name */}
            <motion.h2
              variants={item}
              className="text-2xl sm:text-5xl md:text-5xl font-extrabold mb-3 
                         bg-gradient-to-r from-indigo-600 via-teal-500 to-indigo-600
                         bg-[length:200%_200%] bg-clip-text text-transparent 
                         animate-gradient-x drop-shadow-[0_4px_15px_rgba(0,0,0,0.4)]
                         tracking-wide"
            >
              DIPU BARMAN
            </motion.h2>

            {/* Gradient animation keyframes */}
            <style>
              {`
                @keyframes gradient-x {
                  0%, 100% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                }
                .animate-gradient-x {
                  animation: gradient-x 5s ease infinite;
                }
              `}
            </style>

            {/* Typewriter Role */}
            <motion.h3
              variants={item}
              className="text-lg sm:text-xl md:text-2xl font-medium"
              style={{ color: "#CBD5E1" }} // cool light gray
            >
              {typedText}
              <span className="animate-pulse">|</span>
            </motion.h3>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-base sm:text-lg mt-6 mb-8 leading-relaxed"
              style={{ color: "#94A3B8" }} // muted medium gray
            >
              I specialize in building full-stack web applications using
              MongoDB, Express.js, React, and Node.js. Focused on creating
              efficient, scalable solutions with clean code architecture.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              variants={container}
              className="flex flex-col items-center md:items-start gap-4"
            >
              <motion.div variants={item} className="flex gap-4 sm:gap-5">
                {[
                  { Icon: FaGithub, link: "https://github.com/dipu-barman" },
                  { Icon: FaLinkedin, link: "https://www.linkedin.com/in/dipu-barman/" },
                  { Icon: FaFacebook, link: "https://www.facebook.com/dipu.borman.3?mibextid=ZbWKwL" },
                ].map(({ Icon, link }, idx) => (
                  <motion.a
                    key={idx}
                    whileHover={{ scale: 1.3, rotate: 5 }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link}
                    className="text-2xl transition-colors duration-300"
                    style={{ color: "#6B7280" }} // neutral gray
                    onMouseEnter={e => e.currentTarget.style.color = "#2563EB"} // bright blue hover
                    onMouseLeave={e => e.currentTarget.style.color = "#6B7280"}
                    aria-label={`Link to ${link}`}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div
                variants={item}
                className="flex gap-3 sm:gap-4 flex-wrap justify-center"
              >
                <button
                  onClick={handleDownload}
                  className="btn text-white shadow-lg transition-all"
                  style={{
                    backgroundColor: "#2563EB",
                    boxShadow: "0 4px 15px rgba(37, 99, 235, 0.5)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = "#1D4ED8";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(29, 78, 216, 0.7)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = "#2563EB";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(37, 99, 235, 0.5)";
                  }}
                >
                  Download CV <FaFileDownload className="ml-2" />
                </button>
                <button
                  onClick={previewCV}
                  className="btn btn-outline text-gray-300 hover:bg-blue-900 hover:text-white transition-all"
                  style={{ borderColor: "#2563EB" }}
                >
                  Preview CV <FaEye className="ml-2" />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={imageVariants}
            className="mb-8 md:mb-0 order-1 md:order-2 z-10"
          >
            <motion.div
              style={{
                transform: `rotateY(${rotate.x}deg) rotateX(${rotate.y}deg)`,
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-gray-700 transition-all"
            >
              <motion.img
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src={Photo}
                alt="Dipu Barman"
                className="w-[320px] sm:w-[360px] md:w-[420px] h-[420px] object-cover object-top"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.header>
    </Fade>
  );
};

export default Header;
