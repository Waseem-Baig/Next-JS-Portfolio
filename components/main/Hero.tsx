import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="relative-180 absolute sm:top-[-300px] xs:top-[-460px] left-0 z-[-1] w-full h-full object-cover"
      >
        <source src="./blackhole.webm" type="video/webm"></source>
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
