import React from "react";
import { motion as Motion } from "framer-motion";
import { FaCode, FaRocket } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";

const Services = () => {
  const cards = [
    {
      title: "Website Design",
      desc: "I created digital products with unique ideas use Figma & Framer",
      projects: "24 PROJECTS",
      icon: <MdOutlineDesignServices size={28} />,
    },
    {
      title: "Development",
      desc: "I build website go live with Framer, Webflow or WordPress",
      projects: "126 PROJECTS",
      icon: <FaCode size={28} />,
      active: true, // green border card
    },
    {
      title: "SEO/Marketing",
      desc: "Increase the traffic for your website with SEO optimized",
      projects: "8 PROJECTS",
      icon: <FaRocket size={28} />,
    },
  ];

  return (
    <section
      id="Services"
      className="flex flex-col items-start px-10 text-white py-16"
    >
      {/* Title */}
      <Motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="px-3 py-1.5 mt-7 mb-14 border border-gray-500 rounded-full text-sm flex items-center gap-2 font-thin"
      >
        <span className="text-white"></span> services
      </Motion.div>

      {/* Main Heading */}
      <Motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-[50px] font-thin leading-[62px] tracking-[-0.2px] text-white mb-12"
      >
        My <span className="text-green-500">Specializations</span>
      </Motion.h1>

      {/* Cards */}
      <div className="grid gap-4 w-[134%]">
        {cards.map((card, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex justify-between items-start p-6 rounded-2xl border border-gray-600 hover:border-green-500 transition h-46`}
          >
            <div className="w-[100%] flex flex-col ">
              <h1 className="text-2xl mb-2">{card.title}</h1>
              <p className="text-gray-400 mb-12">{card.desc}</p>
              <p className="font-bold text-sm text-white/90">{card.projects}</p>
            </div>
            <div className="text-green-400">{card.icon}</div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
