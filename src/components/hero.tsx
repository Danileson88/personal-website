import React, { useEffect, useState } from "react";
import { HeroProps } from "../types";
import "../styles/animations.css";

const Hero: React.FC<HeroProps> = ({ isOpen }) => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={` ${
        isOpen ? "opacity-0" : " opacity-100"
      } fade-in-up flex md:flex justify-center md:h-screen md:mt-[100px] absolute md:static
      mt-20`}
    >
      <div className=" flex items-center justify-center gap-5">
        <img
          src="assets/profile-pic.JPG"
          className="fadeinup w-[22rem] h-[22rem] md:w-[500px] md:h-[500px] border-solid rounded-full object-cover mt-32
          absolute md:static top-[24rem]"
        />
        <div className="info-text mr-5 ml-5 md:mr-0 md:ml-5 md:w-[500px]">
          <h1 className=" text-8xl font-bold">Hello</h1>
          <h2 className=" font-bold text-2xl mt-10 mb-2">A Bit About Me</h2>
          <h3 className=" font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            sunt ab! Laborum doloremque animi impedit esse rerum exercitationem
            necessitatibus nostrum incidunt nisi corporis. Quod accusamus quidem
            numquam dolores, reprehenderit quisquam?
          </h3>
          <div
            className={`${
              scroll ? "block absolute mt-10" : "md:hidden"
            } flex gap-2 md:gap-5 md:justify-center mt-14`}
          >
            <span
              className=" fade-in-up1 flex justify-center items-center border-solid
              md:hover:bg-white transition-colors duration-300 border-black border-2 bg-gray-500 
            rounded-full w-[125px] h-[125px] md:w-36 md:h-36 text-center font-bold text-2xl"
            >
              Resume
            </span>
            <span
              className=" fade-in-up2 flex justify-center items-center border-solid
              md:hover:bg-white transition-colors duration-300 border-black border-2 bg-yellow-500
            rounded-full w-[125px] h-[125px] md:w-36 md:h-36 text-center font-bold text-2xl"
            >
              Projects
            </span>
            <span
              className="fade-in-up3 flex justify-center items-center border-solid
              md:hover:bg-white transition-colors duration-300 border-black border-2 bg-rose-500 
            rounded-full w-[125px] h-[125px] md:w-36 md:h-36 text-center font-bold text-2xl"
            >
              Contact
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
