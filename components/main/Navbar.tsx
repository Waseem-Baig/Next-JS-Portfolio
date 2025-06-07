import React from "react";
import Image from "next/image";
import { Socials } from "@/components/constants/index";
import { FiLinkedin } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { TbCircleLetterW } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-2">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          {/* <Image
            src="/image.png"
            alt="logo"
            width={160}
            height={100}
            className="cursor-pointer hover:animate-slowspin"
          /> */}
          <TbCircleLetterW color="white" className="w-5 h-5 mr-2" />
          <span className="hidden lg:block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-white-800 md:flex justify-center align-baseline">
            Waseem Baig
          </span>
          {/* <span className="font-cursive text-pink-600">Waseem</span>{" "}
          <span className="font-cursive text-blue-600">Baig</span> */}
        </a>

        <div className="w-[500px] h-auto flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 gap-2">
            <a href="#about-me" className="cursor-pointer">
              About
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 justify-center items-center">
          <a
            href="https://www.linkedin.com/in/waseem-baig-59a3b2283/"
            className="h-6 w-6 flex justify-center items-center"
          >
            <FaLinkedin color="white" className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/Waseem-Baig"
            className="h-6 w-6 flex justify-center items-center"
          >
            <FaGithub color="white" className="h-6 w-6" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100053450502538"
            className="h-6 w-6 flex justify-center items-center"
          >
            <FaFacebook color="white" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
