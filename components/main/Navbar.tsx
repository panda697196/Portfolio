import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { DotGothic16,Press_Start_2P } from "next/font/google"
import AudioPlayer from '@/components/sub/AudioPlayer';

const DotGothic = DotGothic16({
  weight: "400",
  subsets: ["latin"],
});
const PressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/Mii.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className={`${DotGothic.className} font-bold ml-[10px] hidden md:block text-gray-300 text-lg text-2xl`} >
            滕 宇軒
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className={`${PressStart2P.className} cursor-pointer`}>
              About me
            </a>
            <a href="#skills" className={`${PressStart2P.className} cursor-pointer`}>
              Skills
            </a>
            <a href="#projects" className={`${PressStart2P.className} cursor-pointer`}>
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row items-start gap-5">
          <AudioPlayer/>
          {Socials.map((social) => (
              <a href={social.link} target="_blank" rel="noopener noreferrer" key={social.name}>
                <Image
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                />
              </a>

          ))}



        </div>
      </div>
    </div>
  );
};

export default Navbar;