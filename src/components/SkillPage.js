import React, { useEffect } from "react";
import { FaJava } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiIntellijidea,
  SiEclipseide,
  SiBootstrap,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { MdWebhook } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    category: "Other Skills",
    items: [
      { name: "WebSockets", icon: <MdWebhook /> },
      { name: "JWT & OAuth", icon: <TbApi /> },
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "VS Code", icon: <SiIntellijidea /> }, // Placeholder for VS Code
      { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
      { name: "Eclipse", icon: <SiEclipseide /> },
    ],
  },
];

const SkillsShowcase = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: false });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 flex flex-col items-center py-10 px-5">
      {/* Section Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-purple-500 pb-2">
        My Skills
      </h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {skills.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-5 border-t-4 border-purple-400 hover:border-blue-400 transition-all duration-300"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <h2 className="text-xl font-semibold text-purple-700 mb-4">
              {category.category}
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {category.items.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-purple-100 transition-all duration-200 shadow-sm"
                >
                  <div className="text-4xl text-purple-600">{skill.icon}</div>
                  <p className="text-sm font-medium mt-2 text-gray-700">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Features */}
      <div className="mt-10 text-center">
        <p className="text-gray-600 mb-4">
          Want to see more? Check out my{" "}
          <a
            href="https://github.com/Ragnarloki"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:underline"
          >
            GitHub
          </a>{" "}
          for additional projects and skills.
        </p>
        
      </div>
    </div>
  );
};

export default SkillsShowcase;