import { FaInstagram, FaTwitter, FaDribbble, FaGithub } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-4 mt-6">
      <a href="#" className="text-gray-400 hover:text-white">
        <FaInstagram size={20} />
      </a>
      <a href="#" className="text-gray-400 hover:text-white">
        <FaTwitter size={20} />
      </a>
      <a href="#" className="text-gray-400 hover:text-white">
        <FaDribbble size={20} />
      </a>
      <a href="#" className="text-gray-400 hover:text-white">
        <FaGithub size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
