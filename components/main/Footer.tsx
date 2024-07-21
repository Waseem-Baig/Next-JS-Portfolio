import React from "react";
import { IoMdMailOpen } from "react-icons/io";
import { FaFacebook, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-start justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://www.linkedin.com/in/waseem-baig-59a3b2283/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaLinkedinIn />
              <span className="text-[15px] ml-[6px]">Waseem Baig</span>
            </a>
            <a
              href="https://github.com/Waseem-Baig"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaGithub />
              <span className="text-[15px] ml-[6px]">Waseem-Baig</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100053450502538"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaFacebook />
              <span className="text-[15px] ml-[6px]">Waseem</span>
            </a>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <IoMdMailOpen />
              <span className="text-[15px] ml-[6px]">
                waseem20032005@gmail.com
              </span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-start justify-start">
            <div className="font-bold text-[16px]">Links</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="#projects"
                className="cursor-pointer text-[15px] ml-[6px]"
              >
                About Me
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="#projects"
                className="cursor-pointer text-[15px] ml-[6px]"
              >
                Skills
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="#projects"
                className="cursor-pointer text-[15px] ml-[6px]"
              >
                Web 3
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="#projects"
                className="cursor-pointer text-[15px] ml-[6px]"
              >
                Projects
              </a>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Waseem Baig 2024. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
