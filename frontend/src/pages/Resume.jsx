import React from "react";
import { motion as Motion } from "framer-motion";   // 👈 aliased as Motion

const Resume = () => {
  return (
    <>
      <section
        id="Resume"
        className="flex flex-col items-start min-h-screen px-10"
      >
        {/* Title */}
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="px-3 py-1.5 mt-7 mb-14 border border-gray-500 rounded-full text-sm flex items-center gap-2 font-thin"
        >
          <span className="text-white"></span> Resume
        </Motion.div>

        {/* Main Heading */}
        <Motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[50px] font-thin leading-[62px] tracking-[-0.2px] text-white mb-8"
        >
          Education &{" "}
          <span className="text-green-500">Experience</span>
        </Motion.h1>
      <div className="relative border-l-2 border-gray-700">
        {/* 2020 - Present */}
        <div className="mb-12 ml-6">
          <div className="absolute -left-3 w-5 h-5 rounded-full bg-green-500"></div>
          <h3 className="text-green-400 font-medium mb-4">2020 - Present</h3>
          <div className="mb-6">
            <h4 className="text-xl font-semibold">Framer Designer & Developer</h4>
            <p className="text-gray-400">Brunodee Agency</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Front-End WordPress Developer</h4>
            <p className="text-gray-400">Envato Market</p>
          </div>
        </div>

        {/* 2013 - 2019 */}
        <div className="ml-6">
          <div className="absolute -left-3 mt-2 w-5 h-5 rounded-full bg-gray-500"></div>
          <h3 className="text-gray-300 font-medium mb-4">2013 - 2019</h3>
          <div className="mb-6">
            <h4 className="text-xl font-semibold">Webflow Developer & Co-Founder</h4>
            <p className="text-gray-400">Designflow Studio</p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-semibold">Web Designer</h4>
            <p className="text-gray-400">Freelance</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Leader Team of Marketing</h4>
            <p className="text-gray-400">AHA Marketing Agency</p>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Resume;
