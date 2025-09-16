import { useState } from "react";
import { X } from "lucide-react";
import Sidebar from "./Sidebar";

const ProfileCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-white relative">
      {/* Sidebar with Settings Button */}
      <Sidebar onOpen={() => setIsOpen(true)} />

      {/* Right Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[400px] bg-black text-white transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Btn */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-gray-400 hover:text-white"
        >
          <X />
        </button>

        <div className="p-8">
          <h3 className="mb-6 font- text-white">Configuration</h3>

          <h3 className="text-sm text-gray-400">COLORS</h3>
          <div className="flex space-x-3 my-4">
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
                className="w-8 h-8 rounded-full border-2 border-transparent"
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>

          <h3 className="text-sm text-gray-400 mt-8">
            THREE DIMENSIONAL SHAPES
          </h3>
          <ul className="space-y-3 mt-3">
            <li>Earth Lines Sphere</li>
            <li>3D Abstract Ball</li>
            <li>Water Waves</li>
            <li>Liquids Wavy</li>
            <li>Solid Color</li>
            {/* <li>Simple Strings</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
