import React from "react";
import { motion as Motion } from "framer-motion";
import { FaReact, FaWordpress } from "react-icons/fa";
import { SiFigma, SiFramer, SiWebflow, SiLaravel } from "react-icons/si";

const My_skills = () => {
  const skills = [
    { name: "Figma", percent: "92%", icon: <SiFigma size={40} color="#F24E1E" /> },
    { name: "Framer", percent: "85%", icon: <SiFramer size={40} color="#fff" /> },
    { name: "Webflow", percent: "80%", icon: <SiWebflow size={40} color="#fff" /> },
    { name: "React", percent: "90%", icon: <FaReact size={40} color="#61DBFB" /> },
    { name: "WordPress", percent: "86%", icon: <FaWordpress size={40} color="#fff" /> },
    { name: "Laravel/PHP", percent: "70%", icon: <SiLaravel size={40} color="#fff" /> },
  ];

  return (
    <section
      id="myskills"
      className="flex flex-col items-start min-h-screen px-10 text-white py-16"
    >
      {/* Title */}
      <Motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="px-3 py-1.5 mt-7 mb-14 border border-gray-500 rounded-full text-sm flex items-center gap-2 font-thin"
      >
        <span className="text-white"></span> My Skills
      </Motion.div>

      {/* Main Heading */}
      <Motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-[50px] font-thin leading-[62px] tracking-[-0.2px] text-white mb-12"
      >
        My <span className="text-green-500">Advantages</span>
      </Motion.h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full max-w-6xl">
        {skills.map((skill, i) => (
          <Motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            {/* Rounded card */}
            <div className="flex flex-col items-center justify-center w-40 h-56 rounded-[80px] border border-gray-600 p-6 hover:border-green-500 transition">
              {skill.icon}
              <p className="text-green-500 text-4xl font-semibold mt-4">
                {skill.percent}
              </p>
            </div>
            {/* Label */}
            <p className="mt-4 text-sm font-light">{skill.name}</p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default My_skills;
