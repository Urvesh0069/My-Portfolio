import React from "react";

const About = () => {
  return (
    <>
      <section
        id="introduce"
        className="flex flex-col items-start min-h-screen px-10"
      >
        {/* Title */}
        <div className="px-3 py-1.5 mt-7 mb-14 border border-gray-500 rounded-full text-sm flex items-center gap-2 font-thin">
          <span className="text-white">ℹ️</span> About
        </div>

        {/* Main Heading */}
        <h1 className="text-[50px] font-thin leading-[62px] tracking-[-0.2px] text-white mb-8">
          Every great design begin with an even{" "}
          <span className="text-green-500">better story</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 w-142 max-w-2xl text-m leading-[30px]">
          Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.
        </p>
      </section>
    </>
  );
};

export default About;
