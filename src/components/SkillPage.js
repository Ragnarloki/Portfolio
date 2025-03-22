import React from "react";
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
  return (
    <div className=" bg-gradient-to-br from-purple-50 to-blue-100 p-4">
      {/* Section Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
        My Skills
      </h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {skills.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-semibold text-purple-700 mb-3">
              {category.category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {category.items.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-2 bg-gray-50 rounded-md hover:bg-purple-50 transition-colors"
                >
                  <div className="text-3xl text-purple-600">{skill.icon}</div>
                  <p className="text-xs sm:text-sm font-medium mt-1 text-gray-700 text-center">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Features */}
      <div className="mt-8 text-center">
        <p className="text-gray-600">
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