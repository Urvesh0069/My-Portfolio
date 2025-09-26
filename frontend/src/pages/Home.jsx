import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Introduce from "../pages/Introduce";
import About from "../pages/About";
import { X } from "lucide-react";
import Resume from "./Resume";
import Services from "./Services";
import My_skills from "./My_skills";
import Pricing from "./Pricing";
import Portfolio from "./Portfolio";

const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
    <div className="flex h-screen bg-zinc-800 text-white relative">
      {/* Left Sidebar */}
      <Sidebar onOpen={() => setIsDrawerOpen(true)} />

      {/* Main Scrollable Content */}
      <main className="flex-1 overflow-y-auto px-6 py-10">
        <section
          id="introduce"
          className="flex items-center w-[75%] ml-16 mb-20"
        >
          <Introduce />
        </section>
        <section
          id="about"
          className="flex h-150 w-[75%] ml-16"
        >
          <About />
        </section>
        <section
          id="about"
          className="flex w-[75%] ml-16"
        >
          <Resume />
        </section>
        <section
          id="services"
          className="flex mt-22 w-[75%] ml-16"
        >
          <Services />
        </section>
        <section
          id="myskills"
          className="flex mt-22 w-[75%] ml-16"
        >
          <My_skills />
        </section>
        <section
          id="portfolio"
          className="flex mt-22 w-[75%] ml-16">
            <Portfolio />
        </section>
         <section
          id="pricing"
          className="flex mt-22 w-[75%] ml-16"
        >
          <Pricing />
        </section>
      </main>

      {/* Right Navbar */}
      <Navbar />

      {/* Settings Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[1060px] bg-black text-white z-50 transform transition-transform duration-500 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Btn */}
        <button
          onClick={() => setIsDrawerOpen(false)}
          className="absolute top-5 right-5 text-gray-400 hover:text-white"
        >
          <X />
        </button>

        <div className="p-8 mt-24 ml-26">
          <h2 className="text-2xl mb-19 text-[36px] font-thin">
            Configuration
          </h2>
          <h3 className="text-[13px] mb-14 font-medium">COLORS</h3>
          <div className="flex space-x-6 my-4">
            {[
              "#00e676",
              "#ffc107",
              "#ff5722",
              "#00bcd4",
              "#9e9e9e",
              "#3f51b5",
              "#f44336",
              "#e91e63",
            ].map((color, i) => (
              <button
                key={i}
                className="relative  w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: color }}
              >
                {/* Inner small white dot */}
                {/* <span className="w-2 h-2 bg-white rounded-full"></span>  */}
              </button>
            ))}
          </div>

          <ul className="flex space-x-6 mt-26 mb-12 text-[13px] font-medium">
            <li className=""> THREE DIMENSIONAL SHAPES</li>
          </ul>
          <ul className="flex space-x-20 mt-3 text-[15px] mb-12 font-medium ">
            <li>Earth Lines Sphere</li>
            <li>3D Abstract Ball</li>
            <li>Water Waves</li>
            <li>Liquids Wavy</li>
          </ul>
          <ul className="flex space-x-20 mt-3 text-[15px] mb-12 font-medium">
            <li>Solid Color</li>
            <li>Simple Strings</li>
          </ul>
        </div>
      </div>
    </div>
  </>
  );
};

export default Home;
