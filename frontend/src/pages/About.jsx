/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section
        id="introduce"
        className="flex flex-col items-start min-h-screen px-10"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="px-3 py-1.5 mt-7 mb-14 border border-gray-500 rounded-full text-sm flex items-center gap-2 font-thin"
        >
          <span className="text-white">ℹ️</span> About
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[50px] font-thin leading-[62px] tracking-[-0.2px] text-white mb-8"
        >
          Every great design begin with an even{" "}
          <span className="text-green-500">better story</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-400 w-142 max-w-2xl text-m leading-[30px]"
        >
          Since beginning my journey as a freelance designer nearly 8 years ago,
          I've done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. I'm quietly confident, naturally curious,
          and perpetually working on improving my chops one design problem at a
          time.
        </motion.p>
      </section>
    </>
  );
};

export default About;
