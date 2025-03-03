"use client";
import { FaTelegramPlane, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    id: "Linkedin",
    icon: <FaLinkedin />,
    color: "bg-[#0077b5]",
    link: "https://www.linkedin.com/company/irnog/",
  },
  {
    id: "Instagram",
    icon: <FaInstagram />,
    color: "bg-[#e4405f]",
    link: "https://www.instagram.com/irnog/",
  },
  {
    id: "Twitter",
    icon: <FaXTwitter />,
    color: "bg-[#000000]",
    link: "https://x.com/irannog",
  },
  {
    id: "Telegram",
    icon: <FaTelegramPlane />,
    color: "bg-[#0088cc]",
    link: "https://t.me/irnog",
  },
];

const SocialMediaIcons = () => {
  const handleCLick = (link: string) => {
    window.open(link);
  };
  return (
    <div className="flex justify-center items-center space-x-4">
      {socialLinks.map(({ id, icon, color, link }) => (
        <div
          key={id}
          className="relative group"
          onClick={() => {
            handleCLick(link);
          }}
        >
          <a
            href="#"
            className="relative flex justify-center items-center w-12 h-12 rounded-full bg-white text-gray-700 transition-all duration-300 ease-in-out overflow-hidden shadow-md hover:shadow-lg"
          >
            <span className="relative z-10 text-2xl group-hover:text-white">
              {icon}
            </span>
            <span
              className={`absolute bottom-0 left-0 w-full h-0 transition-all duration-300 ease-in-out ${color} group-hover:h-full`}
            ></span>
          </a>
          <span
            className={`absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-white text-sm px-3 py-1 rounded opacity-0 invisible transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:bottom-[-40px] ${color}`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
