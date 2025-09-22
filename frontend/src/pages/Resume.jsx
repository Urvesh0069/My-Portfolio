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
          Every great design begin with an even{" "}
          <span className="text-green-500">better story</span>
        </Motion.h1>
      </section>
    </>
  );
};

export default Resume;
