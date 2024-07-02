import React, { useEffect, useState } from "react";
import "../styles/animations.css";
import { Link } from "react-router-dom";

const Hero = ({ isOpen }) => {
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
      } fade-in-up flex md:flex justify-center md:h-screen md:mt-[1rem] md:static
      mt-20 mb-[36rem] md:mb-0`}
    >
      <div className=" flex items-center justify-center gap-5">
        <img
          src="assets/profile-pic.JPG"
          className="w-[22rem] h-[22rem] md:w-[500px] md:h-[500px] border-solid rounded-full object-cover mt-[16rem]
          absolute md:static top-[38rem] md:top-[27rem]"
        />
        <div className="info-text mr-5 ml-5 md:mr-0 md:ml-5 md:w-[500px]">
          <h1 className=" text-8xl font-bold">Hello</h1>
          <h2 className=" font-bold text-2xl mt-5 md:mt-10 mb-2">
            A Bit About Me
          </h2>
          <h3 className=" font-medium font-serif">
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
              scroll ? "block absolute mt-10" : "hidden"
            } flex gap-2 md:gap-5 md:justify-center mt-14`}
          >
            <span
              className=" fade-in-up1 flex justify-center items-center border-solid
              md:hover:bg-white transition-colors duration-300 border-black border-2 bg-yellow-400 
            rounded-full w-[125px] h-[125px] md:w-36 md:h-36 text-center font-bold text-2xl"
            >
              <Link to="/Resume">Resume</Link>
            </span>
            <span
              className=" fade-in-up2 flex justify-center items-center border-solid
              md:hover:bg-white transition-colors duration-300 border-black border-2 bg-red-500
            rounded-full w-[125px] h-[125px] md:w-36 md:h-36 text-center font-bold text-2xl"
            >
              <Link to="/Projects">Projects</Link>
            </span>
            <Link to="/Contact">
              <span
                className="fade-in-up3 flex justify-center items-center border-solid
              md:hover:bg-white transition-colors duration-300 border-black border-2 bg-sky-300 
            rounded-full w-[125px] h-[125px] md:w-36 md:h-36 text-center font-bold text-2xl"
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
