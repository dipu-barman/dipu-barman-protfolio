import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiGithub,
  FiExternalLink,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiEye,
} from "react-icons/fi";

import projectOneImgOne from "../../assets/Screenshot 2025-08-12 001325.png";
import projectOneImgTwo from "../../assets/Screenshot 2025-08-12 001430.png";
import projectOneImgThree from "../../assets/Screenshot 2025-08-12 001540.png";
import projectOneImgFour from "../../assets/Screenshot 2025-08-12 001751.png";
import projectOneImgFive from "../../assets/Screenshot 2025-08-12 002027.png";

import projectTwoImgOne from "../../assets/Screenshot 2025-08-12 002711.png";
import projectTwoImgTwo from "../../assets/Screenshot 2025-08-12 002636.png";
import projectTwoImgThree from "../../assets/Screenshot 2025-08-12 002752.png";
// Screenshot 2025-08-12 002729.png ,,Screenshot 2025-08-12 002636.png
import projectTwoImgFour from "../../assets/Screenshot 2025-08-12 002729.png";
import projectTwoImgFive from "../../assets/Screenshot 2025-08-12 002816.png";

import projecttheeImgOne from "../../assets/Screenshot 2025-08-12 012621.png";
import projectthreeImgTwo from "../../assets/Screenshot 2025-08-12 012557.png";
import projectthreeImgThree from "../../assets/Screenshot 2025-08-12 012655.png";
// Screenshot 2025-08-12 002729.png ,,Screenshot 2025-08-12 002636.png
import projectthreeImgFour from "../../assets/Screenshot 2025-08-12 012820.png";
// import projectTwoImgFive from "../../assets/Screenshot 2025-08-12 002816.png";
const techColors = {
  "React.js": "bg-blue-500 text-white",
  React: "bg-blue-500 text-white",
  "Node.js": "bg-green-600 text-white",
  "Express.js": "bg-gray-500 text-white",
  Express: "bg-gray-500 text-white",
  MongoDB: "bg-green-700 text-white",
  Firebase: "bg-yellow-500 text-black",
  "Tailwind CSS": "bg-cyan-500 text-white",
  TailwindCSS: "bg-cyan-500 text-white",
  "Firebase Auth": "bg-orange-500 text-white",
  DaisyUI: "bg-purple-500 text-white",
  "React Router": "bg-red-500 text-white",
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [modalTilt, setModalTilt] = useState({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const projects = [
    {
      id: 2,
      title: "TourZone - Travel & Tour Booking Platform",
      images: [
        projectOneImgOne,
        projectOneImgTwo,
        projectOneImgThree,
        projectOneImgFour,
        projectOneImgFive,
      ],
      description:
    "A comprehensive travel and tour booking platform where users can explore packages, book tours, interact with guides, and manage their bookings through personalized dashboards.",
  technologies: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase Auth",
    "Tailwind CSS",
    "DaisyUI",
    "React Router",
  ],
  liveLink: " https://my-as-12-turist.web.app",
  githubLink: "https://github.com/dipu-barman/Tourism-Tour-Guide-Booking-Platform",
  challenges: [
    "Implementing secure authentication and role-based access for tourists, guides, and admins",
    "Designing an interactive booking system with real-time availability checks",
    "Managing multi-step booking forms with validation and user feedback",
    "Integrating guide profiles and tour package filtering by categories and locations",
    "Optimizing performance and responsiveness across devices",
  ],
  improvements: [
    "Add real-time messaging between tourists and guides",
    "Implement advanced analytics dashboard for admins",
    "Enhance payment integration with multiple gateways",
    "Introduce multi-language support for international users",
    "Add user reviews and ratings for tours and guides",
  ],
  },
      {
      id: 3,
      title: "EduNexus - Assignment Study Platform",
      images: [
        projectTwoImgFour,
        projectTwoImgOne,
        projectTwoImgTwo,
        projectTwoImgThree,
        projectTwoImgFive,
      ],
      description:
        "EduNexus is a comprehensive online group study platform that enables users to collaborate on assignments, manage tasks, and communicate effectively. Featuring role-based access, real-time updates, and secure authentication to enhance learning experiences.",
      technologies: [
        "React.js",
        "Firebase Auth",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
        "DaisyUI",
      ],
      liveLink: "https://assignment-11-41e71.web.app",
      githubLink: "https://github.com/dipu-barman/-Online-Group-Study-Platform",
      challenges: [
        "Building role-based access control for private routes",
        "Creating dynamic filtering by cuisine type",
        "Managing user-generated content securely with MongoDB",
      ],
      improvements: [
  "Implement real-time chat and collaboration features",
  "Add task progress tracking and deadline reminders",
  "Enhance user profile customization and analytics",
  "Expand role-based access with granular permissions",
  "Create admin dashboard for user and content management",
  "Add role-specific notifications and activity logs",
],
    },

    {
  id: 4,
  title: "LawBD - Lawyer Appointment Booking Platform",
  images: [
    projecttheeImgOne,
    projectthreeImgTwo,
    projectthreeImgThree,
    projectthreeImgFour,
    // projectLawImgFive,
  ],
  description:
    "A modern lawyer appointment booking platform where users can browse lawyers by specialization, view prices in a detailed chart, book or cancel appointments, and securely manage their legal service needs through personalized dashboards.",
  technologies: [
    "JavaScript",
    "CSS",
    "Tailwind CSS",
    "DaisyUI",
    "React.js",
    "Chart.js",
  ],
  liveLink: "https://dashing-lebkuchen-9673c3.netlify.app/",
  githubLink: "",
  challenges: [
    "Implementing a dynamic lawyer pricing chart using Chart.js",
    "Developing secure booking and cancellation functionality",
    "Managing real-time updates for lawyer availability",
    "Creating a responsive and accessible UI with TailwindCSS and DaisyUI",
    "Handling role-based access for clients and lawyers",
  ],
  improvements: [
    "Add advanced filtering for lawyers by price, rating, and specialization",
    "Implement payment gateway integration for online lawyer fees",
    "Enable real-time chat between clients and lawyers",
    "Introduce AI-based lawyer recommendations based on case type",
    "Add client review and rating system for lawyers",
  ],
}

  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const getTechColor = (tech) => techColors[tech] || "bg-gray-700 text-white";

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTilt({ rotateX, rotateY });
  }
  function handleMouseLeave() {
    setTilt({ rotateX: 0, rotateY: 0 });
  }

  function handleModalMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
    setModalTilt({ rotateX, rotateY });
  }
  function handleModalMouseLeave() {
    setModalTilt({ rotateX: 0, rotateY: 0 });
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, when: "beforeChildren" },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const modalBackdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const modalContentVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.8, y: 50, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-8 bg-black text-white relative overflow-hidden"
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="container mx-auto max-w-6xl relative z-10"
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center text-cyan-600"
          variants={itemVariants}
        >
          My Projects
        </motion.h2>

        <motion.div variants={containerVariants} className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX: tilt.rotateX,
                rotateY: tilt.rotateY,
                transformStyle: "preserve-3d",
              }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col md:flex-row cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="md:w-1/2 h-48 md:h-auto overflow-hidden relative">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover p-3 select-none"
                  draggable={false}
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded text-xs select-none">
                  {project.images.length} images
                </div>
              </div>
              <div className="md:w-1/2 p-6 flex-grow flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 rounded-full text-xs ${getTechColor(
                          tech
                        )}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs select-none">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 flex items-center justify-center px-2 py-2 bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-300 text-sm"
                  >
                    <FiExternalLink className="mr-1" />
                    Live
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 flex items-center justify-center px-2 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors duration-300 text-sm"
                  >
                    <FiGithub className="mr-1" />
                    GitHub
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(project);
                    }}
                    className="flex-1 flex items-center justify-center py-2 bg-gray-900 hover:bg-gray-700 rounded-md transition-colors duration-300 text-sm"
                  >
                    <FiEye className="mr-1" />
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            variants={modalBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-gray-900 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
              variants={modalContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              onMouseMove={handleModalMouseMove}
              onMouseLeave={handleModalMouseLeave}
              style={{
                rotateX: modalTilt.rotateX,
                rotateY: modalTilt.rotateY,
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
                aria-label="Close modal"
              >
                <FiX size={24} />
              </button>

              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-4">
                  <div className="relative h-64 md:h-96 overflow-hidden rounded-lg mb-4 bg-black">
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain select-none"
                      draggable={false}
                    />

                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
                          aria-label="Previous image"
                        >
                          <FiChevronLeft size={24} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
                          aria-label="Next image"
                        >
                          <FiChevronRight size={24} />
                        </button>
                      </>
                    )}
                  </div>

                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {selectedProject.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden transition ring-2 ring-red-500 ${
                          currentImageIndex === index
                            ? "ring-opacity-100"
                            : "ring-opacity-0"
                        }`}
                        aria-label={`Thumbnail ${index + 1}`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover select-none"
                          draggable={false}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="lg:w-1/2 p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-red-500">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-sm ${getTechColor(
                            tech
                          )}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-red-500">
                        Challenges Faced
                      </h4>
                      <ul className="list-disc pl-5 text-gray-300 space-y-2">
                        {selectedProject.challenges.map((challenge, i) => (
                          <li key={i}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-red-500">
                        Future Improvements
                      </h4>
                      <ul className="list-disc pl-5 text-gray-300 space-y-2">
                        {selectedProject.improvements.map((improvement, i) => (
                          <li key={i}>{improvement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-300"
                    >
                      <FiExternalLink className="mr-2" />
                      Live Project
                    </a>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors duration-300"
                    >
                      <FiGithub className="mr-2" />
                      GitHub Repository
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
