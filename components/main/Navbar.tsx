"use client";

import React from "react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { Socials } from "@/components/constants/index";
import { FiLinkedin } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { TbCircleLetterW } from "react-icons/tb";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-2">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        {/* Logo (hidden on mobile) */}
        <a
          href="#about-me"
          className="h-auto w-auto flex-row items-center hidden xs:flex md:hidden lg:flex"
        >
          <TbCircleLetterW color="white" className="w-5 h-5 mr-2" />
          <span className="hidden lg:visible text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-white-800 md:flex justify-center align-baseline">
            Waseem Baig
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex w-[700px] h-auto flex-row items-center justify-between">
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
            <a href="#experience" className="cursor-pointer">
              Experience
            </a>
            <a href="#certifications" className="cursor-pointer">
              Certifications
            </a>
            <a href="#contact" className="cursor-pointer">
              Contact
            </a>
          </div>
        </div>

        {/* Social Links: mobile centered, desktop right */}
        <div className="flex items-center justify-center md:justify-end">
          <div className="flex flex-row gap-6">
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

        {/* Mobile Hamburger on Right */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[65px] left-0 w-full bg-black/50 bg-opacity-95 shadow-lg z-50 animate-fade-in">
          <div className="flex flex-col items-center gap-6 py-6">
            <a
              href="#about-me"
              className="cursor-pointer text-lg text-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="cursor-pointer text-lg text-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#experience"
              className="cursor-pointer text-lg text-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#certifications"
              className="cursor-pointer text-lg text-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              Certifications
            </a>
            <a
              href="#projects"
              className="cursor-pointer text-lg text-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="cursor-pointer text-lg text-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
