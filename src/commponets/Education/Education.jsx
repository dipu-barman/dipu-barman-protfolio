import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGraduationCap,
  FaSchool,
  FaLaptopCode,
} from "react-icons/fa";
import uttaraLogo from "../../assets/Decorate laptops, Hydro Flasks, cars and more with….jpeg";
import rcpscLogo from "../../assets/download.jpeg";

const skillColors = {
  "React.js": "bg-gradient-to-r from-blue-400 to-cyan-500 text-white",
  "MERN Stack": "bg-gradient-to-r from-green-600 to-green-700 text-white",
  "Express.js": "bg-gray-700 text-white",
  "Node.js": "bg-gradient-to-r from-green-700 to-green-800 text-white",
  MongoDB: "bg-green-600 text-white",
  HTML: "bg-gradient-to-r from-orange-400 to-red-500 text-white",
  CSS: "bg-gradient-to-r from-blue-400 to-blue-600 text-white",
  "Adobe Photoshop": "bg-gradient-to-r from-indigo-600 to-indigo-800 text-white",
  "Microsoft Office Suite": "bg-gradient-to-r from-red-600 to-red-700 text-white",
  Typing: "bg-gradient-to-r from-purple-600 to-purple-700 text-white",
};

const Education = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const timelineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, type: "spring", stiffness: 100 },
    }),
  };

  const tiltTransition = {
    type: "spring",
    stiffness: 300,
    damping: 20,
  };

  const educationData = [
    {
      id: 1,
      logo: uttaraLogo,
      icon: <FaGraduationCap className="text-indigo-600 text-3xl" />,
      degree: "Bachelor of Science in Mathematices",
      institution: "National University,Bangladesh",
      duration: "2020 – Expected Graduation: 2026",
      description:
              "Currently pursuing a Bachelor's in Mathematics. Passionate about analytical thinking, problem-solving, and scientific research. Actively engaged in advanced mathematical studies and applications.",
      skills: ["React.js", "MongoDB", "Express.js", "Node.js", "MERN Stack"],
      current: true,
    },
    {
      id: 2,
      logo: rcpscLogo,
      icon: <FaSchool className="text-indigo-600 text-3xl" />,
      degree: "Higher Secondary Certificate (HSC), Science",
      institution: "Sylhet Govt. Model School & College",
      duration: "Feb 2018 - Aug 2020",
      description:
        "Completed with perfect GPA . Developed foundational skills in technology,science,mathematics and computer applications ",
      skills: [
        "HTML",
        "CSS",
        "Adobe Photoshop",
        "Microsoft Office Suite",
        "Typing",
      ],
      current: false,
    },
  ];

  return (
    <section
      id="education"
      ref={ref}
      className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-4 sm:px-10 overflow-hidden select-none"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
            hidden: { opacity: 0, y: 40 },
          }}
          className="text-center text-4xl sm:text-5xl font-extrabold mb-16
            text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-teal-500 to-indigo-600
            drop-shadow-lg"
        >
          Education Journey
        </motion.h2>

        {/* Vertical timeline line */}
        <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-red-600 to-pink-600 h-full rounded" />

        {/* Timeline items */}
        <div className="flex flex-col space-y-20 relative z-20">
          {educationData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                custom={index}
                initial="hidden"
                animate={controls}
                variants={timelineVariants}
                className={`flex flex-col lg:flex-row items-center gap-10 ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Logo */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotateY: 15,
                    rotateX: 10,
                    boxShadow: "0 0 15px rgb(96 165 250 / 0.75)", // changed to blue-ish glow
                  }}
                  transition={tiltTransition}
                  className="lg:w-1/3 flex justify-center lg:justify-end"
                >
                  <div className="w-64 h-36 lg:w-88 lg:h-44 rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg shadow-indigo-600/40 bg-gradient-to-br via-teal-500 to-indigo-600">
                    <img
                      src={item.logo}
                      alt={`${item.institution} logo`}
                      className="object-contain w-full h-full p-4"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                </motion.div>

                {/* Content Card with gradient border if current */}
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    rotateY: 5,
                    rotateX: 3,
                    boxShadow:
                      "0 8px 20px rgb(96 165 250 / 0.6), 0 0 30px rgb(20 184 166 / 0.5)", // teal/indigo glow on hover
                  }}
                  transition={tiltTransition}
                  className={`lg:w-2/3 ${
                    item.current
                      ? "p-[2px] rounded-xl bg-gradient-to-r from-indigo-600 via-teal-500 to-indigo-600"
                      : ""
                  }`}
                >
                  <div
                    className={`bg-gray-900 bg-opacity-90 backdrop-blur-md rounded-lg p-8 shadow-xl ring-1 ring-indigo-600 hover:ring-teal-400 cursor-pointer relative ${
                      item.current ? "border border-transparent" : ""
                    }`}
                  >
                    {item.current && (
                      <span className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg animate-pulse select-none">
                        CURRENT
                      </span>
                    )}

                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-indigo-600 text-4xl">{item.icon}</div>
                      <div>
                        <h3
                          className="text-2xl font-extrabold tracking-tight
                        text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-teal-500 to-indigo-600"
                        >
                          {item.degree}
                        </h3>
                        <h4 className="text-lg font-semibold text-gray-300 mb-1">
                          {item.institution}
                        </h4>
                        <p className="text-sm text-gray-500 italic">{item.duration}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-6">{item.description}</p>

                    <div>
                      <h5 className="text-sm font-semibold text-teal-400 mb-3 tracking-wider">
                        SKILLS DEVELOPED
                      </h5>
                      <div className="flex flex-wrap gap-3">
                        {item.skills.map((skill, i) => (
                          <span
                            key={i}
                            className={`px-4 py-1 rounded-full text-sm font-semibold shadow-md ${
                              skillColors[skill] || "bg-gray-700 text-gray-300"
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
