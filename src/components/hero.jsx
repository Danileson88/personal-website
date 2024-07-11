import React, { useContext, useEffect, useState } from "react";
import "../styles/animations.css";
import { Link } from "react-router-dom";
import menuProvider from "./MenuContext";

const Hero = () => {
  const { isOpen } = useContext(menuProvider);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
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
      } fade-in-up flex justify-center md:pt-[30px] md:h-screen
      mt-20 mb-[5rem]`}
    >
      <div className=" flex items-center justify-center xxs:flex-col-reverse md:flex-row gap-5">
        <img
          src="assets/profile-pic.JPG"
          className={`${
            scroll
              ? "block fade-In md:animate-none md:block"
              : "hidden md:block"
          } w-[22rem] h-[22rem] md:w-[34rem] md:h-[34rem] border-solid rounded-full object-cover
          mt-[2rem]`}
        />
        <div className="info-text mr-3 ml-3 md:mr-0 md:ml-5 md:w-[500px]">
          <h1 className=" text-8xl font-bold">Hello</h1>
          <h2 className=" font-bold text-2xl mt-5 md:mt-0 mb-2">
            A Bit About Me
          </h2>
          <h3 className=" font-medium font-serif mb-10 ">
            As a passionate front-end developer, I specialize in creating
            dynamic and user-friendly web applications using React. With a solid
            foundation in HTML, CSS, and JavaScript, I am dedicated to
            transforming creative concepts into interactive digital experiences.
            My expertise in React allows me to build efficient and scalable
            applications, ensuring seamless performance and an engaging user
            interface. Whether working on a single-page application or a complex
            web project, I am committed to delivering high-quality code and
            innovative solutions that meet the evolving needs of users and
            clients alike.
          </h3>
          <div
            className={`${
              scroll ? "opacity-100" : "opacity-0"
            } flex gap-2 md:gap-5 justify-center`}
          >
            <span
              className={`${
                scroll ? "fade-in-up1" : "animate-none"
              } flex justify-center items-center border-solid
              md:hover:bg-white transition-colors duration-300 border-black border-2 bg-yellow-400 
            rounded-full w-[7rem] h-[7rem] md:w-36 md:h-36 text-center font-bold text-2xl`}
            >
              <Link to="/Resume">Resume</Link>
            </span>
            <span
              className={`${
                scroll ? "fade-in-up2" : "animate-none"
              } flex justify-center items-center border-solid
              md:hover:bg-white transition-colors duration-300 border-black border-2 bg-red-500
            rounded-full w-[7rem] h-[7rem] md:w-36 md:h-36 text-center font-bold text-2xl`}
            >
              <Link to="/Projects">Projects</Link>
            </span>
            <Link to="/Contact">
              <span
                className={`${
                  scroll ? "fade-in-up3" : "animate-none"
                } flex justify-center items-center border-solid
              md:hover:bg-white transition-colors duration-300 border-black border-2 bg-sky-300 
            rounded-full w-[7rem] h-[7rem] md:w-36 md:h-36 text-center font-bold text-2xl`}
              >
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
