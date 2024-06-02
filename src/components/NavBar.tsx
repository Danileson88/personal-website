import React, { useState } from "react";
import "../styles/animations.css";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className=" flex mt-8 md:ml-10 md:mr-10 md:justify-between md:sticky md:top-0
    "
    >
      <div className="flex items-center ml-5">
        <span className=" bg-gray-600 rounded-full md:w-10 w-14 md:h-10 h-14  mr-3"></span>
        <div className="flex items-baseline">
          <h1 className=" font-bebas font-extrabold md:text-4xl text-3xl mr-3">
            Daniel Ortega
          </h1>
          <h4 className=" font-small flex-none">Developer</h4>
        </div>
      </div>
      <img
        src={`${
          isOpen
            ? "./src/assets/x-icon4.png"
            : "./src/assets/hamburger-icon.png"
        }`}
        className={` md:hidden cursor-pointer w-10 h-10 ml-10 ${
          isOpen ? "w-12 h-12" : "w-10"
        }`}
        onClick={openMenu}
      />
      <ul
        className={`mr-6 md:flex absolute md:relative top-32 md:top-0
        md:w-auto w-screen md:h-auto bg-gray-300 md:bg-inherit
        h-screen flex items-center flex-col md:flex-row md:gap-2 gap-10
        text-3xl md:text-base
        ${isOpen ? "block fade-in-down" : "hidden"} md:block`}
      >
        <li className="mr-4 md:mt-0 mt-20">
          Login
          <span className=" ml-2 md:border-l-2 border-black"></span>
        </li>
        <li>
          Contact
          <span className=" ml-2 md:border-l-2 border-black"></span>
        </li>
        <li className="ml-2 mr-2">
          Resume
          <span className=" ml-2 md:border-l-2 border-black"></span>
        </li>
        <li>
          Projects
          <span className=" ml-2 md:-l-2 border-black"></span>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
