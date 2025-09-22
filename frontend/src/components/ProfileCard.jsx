// import { useState } from "react";
// import { X } from "lucide-react";
// import Sidebar from "./Sidebar";

// const ProfileCard = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedColor, setSelectedColor] = useState("#00e676"); // default green

//   return (
//     <div className="flex h-screen bg-gray-900 text-white relative">
//       {/* Sidebar with Settings Button */}
//       <Sidebar onOpen={() => setIsOpen(true)} />

//       {/* Right Drawer */}
//       <div
//         className={`fixed top-0 right-0 h-full w-[400px] bg-black text-white transform transition-transform duration-500 ease-in-out ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Close Btn */}
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-5 right-5 text-gray-400 hover:text-white"
//         >
//           <X />
//         </button>

//         <div className="p-8">
//           {/* Heading */}
//           <h3 className="text-3xl font-extralight mb-10">Configuration</h3>

//           {/* Colors Section */}
//           <h3 className="text-sm text-gray-400 mt-10">COLORS</h3>
//           <div className="flex space-x-3 my-4">
//             {[
//               "#00e676",
//               "#ffc107",
//               "#ff5722",
//               "#00bcd4",
//               "#9e9e9e",
//               "#3f51b5",
//               "#f44336",
//               "#e91e63",
//             ].map((color, i) => (
//               <button
//                 key={i}
//                 onClick={() => setSelectedColor(color)}
//                 className={`w-8 h-8 rounded-full border-2 transition ${
//                   selectedColor === color
//                     ? "border-white shadow-lg"
//                     : "border-transparent"
//                 } hover:scale-110`}
//                 style={{ backgroundColor: color }}
//               ></button>
//             ))}
//           </div>

//           {/* Shapes Section */}
//           <h3 className="text-sm text-gray-400 mt-8">
//             THREE DIMENSIONAL SHAPES
//           </h3>
//           <div className="grid grid-cols-2 gap-y-3 gap-x-6 mt-3">
//             <p>Earth Lines Sphere</p>
//             <p>3D Abstract Ball</p>
//             <p>Water Waves</p>
//             <p>Liquids Wavy</p>
//             <p>Solid Color</p>
//             <p>Simple Strings</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;
