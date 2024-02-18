import React from "react";
import HeroContent from "../sub/HeroContent";
import Aboutme from "@/components/sub/Aboutme";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">

      <HeroContent />

        <Aboutme />

    </div>
  );
};

export default Hero;