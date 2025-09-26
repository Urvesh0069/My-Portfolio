import React from "react";
import { motion as Motion } from "framer-motion"; // 👈 aliased as Motion

const Portfolio = () => {
  return (
    <>
      <section
        id="myskills"
        className="flex flex-col items-start min-h-screen px-10 text-white py-16"
      >
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="px-3 py-1.5 mt-7 mb-14 border border-gray-500 rounded-full text-sm flex items-center gap-2 font-thin"
        >
          <span className="text-white"></span> 🗂️ PORTFOLIO
        </Motion.div>

        {/* Main Heading */}
        <Motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[50px] font-thin leading-[62px] tracking-[-0.2px] text-white mb-12"
        >
          Featured <span className="text-green-500">Projects</span>
        </Motion.h1>

        {/* Project 1 - Large banner */}
        <div className="bg-gray-800/60 rounded-3xl p-6 mb-12 overflow-hidden">
          <img
            src="https://picsum.photos/seed/architecture/1200/320"
            alt="Bureau - Architecture Studio Website mockup"
            className="w-full h-64 object-cover rounded-2xl mb-4"
            loading="lazy"
          />
          <div className="text-white text-2xl font-semibold">
            Bureau - Architecture Studio Website
          </div>
          <div className="flex space-x-3 mt-4">
            <span className="px-3 py-1 rounded-full bg-white text-gray-900 text-sm">
              Figma
            </span>
            <span className="px-3 py-1 rounded-full bg-white text-gray-900 text-sm">
              Framer
            </span>
            <span className="px-3 py-1 rounded-full bg-white text-gray-900 text-sm">
              WordPress
            </span>
          </div>
        </div>

        {/* Grid of smaller projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/60 rounded-3xl p-6">
            <img
              src="https://picsum.photos/seed/moonex/800/360"
              alt="Moonex WordPress Theme mockup"
              className="w-full h-48 object-cover rounded-2xl mb-4"
              loading="lazy"
            />
            <div className="text-white text-xl font-semibold mb-2">
              Moonex WordPress Theme
            </div>
            <div className="flex space-x-3">
              <span className="px-3 py-1 rounded-full bg-white text-gray-900 text-sm">
                WordPress
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-gray-900 text-sm">
                Laravel/PHP
              </span>
            </div>
          </div>

          <div className="bg-gray-800/60 rounded-3xl p-6">
            <img
              src="https://picsum.photos/seed/taskly/800/360"
              alt="Taskly Dashboard mockup"
              className="w-full h-48 object-cover rounded-2xl mb-4"
              loading="lazy"
            />
            <div className="text-white text-xl font-semibold underline mb-2">
              Taskly Dashboard
            </div>
            <div className="flex space-x-3">
              <span className="px-3 py-1 rounded-full bg-gray-900 text-white text-sm">
                WordPress
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-900 text-white text-sm">
                Laravel/PHP
              </span>
            </div>
          </div>

          <div className="md:col-span-2 bg-gray-800/60 rounded-3xl p-6">
            <img
              src="https://picsum.photos/seed/hinterland/1200/400"
              alt="Hinterland - Real Estate Site Redesign mockup"
              className="w-full h-64 object-cover rounded-2xl mb-4"
              loading="lazy"
            />
            <div className="text-white text-xl font-semibold mb-2">
              Hinterland - Real Estate Site Redesign
            </div>
            <div className="flex space-x-3">
              <span className="px-3 py-1 rounded-full bg-white text-gray-900 text-sm">
                Figma
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-gray-900 text-sm">
                React
              </span>
            </div>
          </div>

          <div className="md:col-span-2 bg-gray-800/60 rounded-3xl p-6">
            <img
              src="https://picsum.photos/seed/lewis/1200/400"
              alt="Lewis Studio Website mockup"
              className="w-full h-64 object-cover rounded-2xl mb-4"
              loading="lazy"
            />
            <div className="text-white text-xl font-semibold mb-2">
              Lewis Studio Website
            </div>
            <div className="flex space-x-3">
              <span className="px-3 py-1 rounded-full bg-white text-gray-900 text-sm">
                Framer
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
