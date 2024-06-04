import React from "react";
import { HeroProps } from "../types";
import "../styles/animations.css";

const Hero: React.FC<HeroProps> = ({ isOpen }) => {
  return (
    <div
      className={` ${
        isOpen ? "opacity-0" : " opacity-100"
      } fade-in-up flex md:flex justify-center md:h-screen md:mt-[100px] absolute md:static
      mt-24`}
    >
      <div className=" flex items-center justify-center gap-5">
        <img
          src="./src/assets/profile-pic.JPG"
          className=" w-[375px] md:w-[500px] h-[375px] md:h-[500px] border-solid rounded-full object-cover mt-32
          absolute md:static top-[400px] md:top-0"
        />
        <div className="info-text w-fit mr-5 ml-5 md:mr-0 md:ml-5 md:w-[500px]">
          <h1 className=" text-8xl font-bold">Hello</h1>
          <h2 className=" font-bold text-2xl mt-10 mb-2">A Bit About Me</h2>
          <h3 className=" font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            sunt ab! Laborum doloremque animi impedit esse rerum exercitationem
            necessitatibus nostrum incidunt nisi corporis. Quod accusamus quidem
            numquam dolores, reprehenderit quisquam?
          </h3>
          <div className="flex mt-20 gap-2 md:gap-5 justify-center">
            <span
              className=" fade-in-up1 flex justify-center items-center border-solid bg-gray-500 
            rounded-full w-[125px] h-[125px] md:w-36 md:h-36 text-center font-bold text-2xl"
            >
              Resume
            </span>
            <span
              className=" fade-in-up2 flex justify-center items-center border-solid bg-yellow-500
            rounded-full w-[125px] h-[125px] md:w-36 md:h-36 text-center font-bold text-2xl"
            >
              Projects
            </span>
            <span
              className="fade-in-up3 flex justify-center items-center border-solid bg-rose-500 
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
