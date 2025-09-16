import React from "react";

const Introduce = () => {
  return (
    <section
      id="introduce"
      className="flex flex-col items-start min-h-screen px-10"
    >
      {/* Title */}
      <div className="px-3 py-1.5 mt-7 mb-14 border border-gray-500 rounded-full text-sm flex items-center gap-2 font-thin">
        <span className="text-white">🏠</span> INTRODUCE
      </div>

      {/* Main Heading */}
      <h1 className="text-[80px] leading-[90px] font-light leading-[65px] tracking-[-0.2px] text-white mb-10">
        Say Hi from <span className="text-green-500">Drake</span>, <br />
        Webflow Designer <br /> and Developer
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 max-w-2xl text-s leading-relaxed">
        I design and code beautifully simple things and I love what I do. <br />
        Just simple like that!
      </p>

      {/* Circular My Projects */}
      <div className="ml-146 mt-8">
        <a href="#about">
        <div className="relative w-[175px] h-[175px] flex items-center justify-center ">
          {/* Circle Border */}
          <div className="absolute inset-0 rounded-full border border-gray-600"></div>

          {/* Circular Text */}
          <svg
            viewBox="0 0 300 300"
            className="absolute w-[86%] h-full text-white "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
              />
            </defs>
            <text className="text-[12px] tracking-[8px] uppercase font-thin text-white"
            >
              <textPath
                href="#circlePath"
                startOffset="50%"
                textAnchor="middle"
                className="text-[28px] tracking-[8px] font-thin"
                 fill="white"
              >
              . • .MY PROJECTS. • .MY PROJECTS
              </textPath>
            </text>
          </svg>

          {/* Center Arrow */}

          <div href="#about" className="text-3xl text-white">
            ↓
          </div>
        </div>
        </a>
      </div>
    </section>
  );
};

export default Introduce;
