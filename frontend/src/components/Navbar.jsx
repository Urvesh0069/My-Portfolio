import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaFileAlt,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="absolute mt-3 right-5 top-1/4 flex flex-col px-3 py-4 rounded-full border border-gray-700 w-[54px] mr-16 h-90 bg-transparent">
      <nav className="text-white flex flex-col items-center gap-6">
        <a
          href="#Home"
          className="mt-2 text-gray-400 hover:text-green-400"
        >
          <FaHome size={18} />
        </a>
        <a href="#about" className="text-gray-400 hover:text-green-400">
          <FaUser size={18} />
        </a>
        <a href="#contact" className="text-gray-400 hover:text-green-400">
          <FaBriefcase size={18} />
        </a>
        <a href="" className="text-gray-400 hover:text-green-400">
          <FaEnvelope size={18} />
        </a>
        <a href="#introduce" className="text-gray-400 hover:text-green-400">
          <FaHome size={18} />
        </a>
        <a href="#about" className="text-gray-400 hover:text-green-400">
          <FaUser size={18} />
        </a>
        <a href="#contact" className="text-gray-400 hover:text-green-400">
          <FaBriefcase size={18} />
        </a>
        <a href="" className=" text-gray-400 hover:text-green-400">
          <FaEnvelope size={18} />
        </a>
      </nav>
    </div>
  );
};

export default Navbar;

{
  /* <Link to="/" className="text-green-400">
        <FaHome size={20} />
      </Link>
      <Link to="/about" className="text-gray-400 hover:text-green-400">
        <FaUser size={20} />
      </Link>
      <Link to="/projects" className="text-gray-400 hover:text-green-400">
        <FaBriefcase size={20} />
      </Link>
      <Link to="/resume" className="text-gray-400 hover:text-green-400">
        <FaFileAlt size={20} />
      </Link>
      <Link to="/contact" className="text-gray-400 hover:text-green-400">
        <FaEnvelope size={20} />
      </Link> */
}
