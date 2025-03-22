import { motion } from "framer-motion";
import Img1 from "../assets/Recipe.png";
import Img2 from "../assets/workout.png";
import Img3 from "../assets/weather.png";
import Img4 from "../assets/PhotframeShop.png";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";
import {
  SiCloudinary,
  SiRapid,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiBootstrap,
  SiCss3,
} from "react-icons/si";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, easing: "ease-in-out", once: false });
  }, []);

  const projects = [
    {
      image: Img1,
      title: "Recipe Finder App",
      description: "A web app to search and discover recipes with detailed instructions and ingredients.",
      stack: [
        { name: "React.js", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "RapidApi", icon: <SiRapid /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
      ],
      link: "https://recipefinder-uwkw.onrender.com/",
      code: "https://github.com/Ragnarloki/recipe_finder",
      isFeatured: true, // Mark as featured
    },
    {
      image: Img2,
      title: "Workout Tracker App",
      description: "A fitness tracking app that helps users log workouts, set goals, and monitor progress.",
      stack: [
        { name: "React.js", icon: <SiReact /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "RapidApi", icon: <SiRapid /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
      ],
      link: "https://ragnarloki.github.io/workout_now/",
      code: "https://github.com/Ragnarloki/workout_now",
    },
    {
      image: Img4,
      title: "Photo Frame Shop",
      description: "An online store showcasing a variety of photo frames, glass, mirrors, and god images.",
      stack: [
        { name: "React.js", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Cloudinary", icon: <SiCloudinary /> },
      ],
      link: "https://thittani-photoframe.onrender.com/",
      code: "https://github.com/Ragnarloki/PhotoFrame",
    },
  ];

  return (
    <section id="projects" className="py-20 px-5 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Section Title */}
      <div className="text-center mb-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-800"
        >
          Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600"
        >
          Here are some of the projects I've worked on.
        </motion.p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            whileHover={{ scale: 1.05 }}
          >
            {/* Featured Badge */}
            {project.isFeatured && (
              <div className="absolute top-2 right-2 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </div>
            )}

            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md h-48 w-full object-cover"
            />

            {/* Project Title */}
            <h2 className="text-xl font-semibold mt-4 text-gray-800">{project.title}</h2>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 my-2">
              {project.stack.map((tech, idx) => (
                <motion.span
                  key={idx}
                  className="bg-white text-gray-700 text-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  {tech.icon} {tech.name}
                </motion.span>
              ))}
            </div>

            {/* Project Description */}
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>

            {/* Project Links */}
            <div className="flex items-center gap-4">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-br from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <FaExternalLinkAlt /> Live Demo
              </motion.a>
              <motion.a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-br from-gray-500 to-gray-700 text-white font-semibold rounded-lg hover:from-gray-600 hover:to-gray-800 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <FaGithub /> GitHub
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Features */}
      <div className="mt-10 text-center">
        <p className="text-gray-600 mb-4">
          Interested in collaborating or learning more about my work? Let's connect!
        </p>
      </div>
    </section>
  );
}