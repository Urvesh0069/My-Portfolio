import React from "react";

const Introduce = () => {
  return (
    <section
      id="introduce"
      className="flex flex-col mt-7 items-start min-h-screen px-10"
    >
      {/* Title */}
      <div className="px-3 py-1.5 mb-14 border border-gray-500 rounded-full text-sm flex items-center gap-2 font-thin">
        <span className="text-white">🏠</span> INTRODUCE
      </div>

      {/* Main Heading */}
      <h1 className="text-[50px] font-light leading-[65px] h-[455px] tracking-[-0.2px] text-white mb-6">
        Say Hi from <span className="text-green-500">Drake</span>, <br />
        Webflow Designer <br /> and Developer
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
        I design and code beautifully simple things and I love what I do. <br />
        Just simple like that!
      </p>

      {/* Circular My Projects */}
      {/* <div className="fixed bottom-10 right-10 flex flex-col items-center">
        <div className="w-32 h-32 border border-gray-500 rounded-full flex items-center justify-center relative">
          <span className="absolute text-sm tracking-widest text-gray-300 transform -rotate-90">
            MY PROJECTS
          </span>
          <span className="text-3xl">⬇️</span>
        </div>
      </div> */}
    </section>
  );
};

export default Introduce;
