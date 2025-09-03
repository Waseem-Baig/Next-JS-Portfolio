"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center md:px-20 mt-40 w-full z-[20] px-4 gap-10"
      id="about-me"
    >
      {/* Left Content */}
      <div className="w-full flex flex-col gap-5 justify-center text-start">
        {/* Profile Image */}
        <motion.div
          variants={slideInFromTop}
          className="flex justify-start mb-2"
        >
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#7042f8]/60 shadow-lg">
            <Image
              src="/myPic.jpg" // <-- Replace with your image path
              alt="Waseem Baig"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
        {/* Welcome Box */}
        <motion.div
          className="Welcome-box py-2 px-3 border border-[#7042f88b] opacity-90 flex justify-center items-center mb-2"
          variants={slideInFromTop}
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
          <h1 className="welcome-text text-xs sm:text-sm text-[#b49bff]">
            FullStack Web Developer PortFolio
          </h1>
        </motion.div>
        {/* Name */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Waseem Baig
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer specializing in web and
          software development. With extensive experience in creating dynamic
          and responsive applications.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-cyan-500 hover:to-purple-500 transition-all"
        >
          Learn More
        </motion.a>
      </div>
      {/* Right Content */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center items-center"
      >
        <div className="relative w-[220px] h-[220px] xs:w-full xs:h-[400px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
