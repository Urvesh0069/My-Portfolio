// import profile from "../assets/profile.jpg";
// import SocialLinks from "./SocialLinks";

// const Sidebar = () => {
//   return (
//     <div className="w-90 h-165 flex flex-col items-center py-10 my-10 ml-6 mr-10 border-[0.5px] border-gray-500 rounded-4xl bg-transparent">

//     </div>
//   );
// };

// export default Sidebar;

import { FaInstagram, FaTwitter, FaDribbble, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="w-[350px] h-166 flex flex-col items-center p-[28px] my-9 ml-5 mr-10 border-[0.5px] border-gray-500 rounded-4xl bg-transparent">
      {/* Settings Icon */}
      <div className=" absolute left-0 -mt-[12px] bg-zinc-800 w-11 h-11 rounded-full">
        <FiSettings className="text-gray-400 text-xl cursor-pointer m-auto mt-[25%] ml-3 " />
      </div>

      {/* Logo / Title */}
      <div className="flex justify-between mt- mb-4">
        <div className="flex mr-13">
          <h1 className="text-[38px] font-bold">Drake</h1>
          <span
            className="mt-2 ml-1 w-5 h-5 flex text-xs pl-[0.8px] items-center justify-center 
                 border border-white rounded-full"
          >
            D
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-sm mt-1 text-gray-300 text-white text-end">
          Framer Designer <br />& Developer
        </p>
      </div>

      {/* Profile Image */}
      <img
        // src={profile}
        src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        alt="profile"
        className="w-62 h-52 mb-12 rounded-2xl object-cover my-"
      />

      {/* Contact Info */}
      <h3 className="text-[26px] text-center">
        hello@drake.design
      </h3>
      <h3 className="text-[25px] text-center ">Based in Los Angeles, CA</h3>

      {/* Footer text */}
      <p className="text-xs text-gray-500 mb-6 mt-7">
        © 2022 Drake. All Rights Reserved
      </p>

      {/* Social Links */}
      <div className="flex space-x-2 mb-8 ">
        <a
          href="#"
          className="border border-gray-500 rounded-full hover:bg-gray-700 p-4"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="border border-gray-500 rounded-full hover:bg-gray-700 p-4"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="border border-gray-500 rounded-full hover:bg-gray-700 p-4"
        >
          <FaDribbble />
        </a>
        <a
          href="#"
          className="border border-gray-500 rounded-full hover:bg-gray-700 p-4"
        >
          <FaGithub />
        </a>
      </div>

      {/* Hire Me Button */}
      <button className="flex items-center justify-center w-full h-[51px] bg-emerald-400 text-black font-sm rounded-full hover:bg-emerald-500 transition">
        <FiMail className="mr-2 text-xl" /> HIRE ME!
      </button>
    </div>
  );
};

export default Sidebar;
