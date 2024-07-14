import React, { useContext } from "react";
import menuProvider from "./MenuContext";

const Footer = () => {
  const { isOpen } = useContext(menuProvider);
  return (
    <footer
      className={`${
        isOpen ? "hidden" : "block"
      } w-full max-w-full md:mt-[10rem] md:flex justify-center lg:block`}
    >
      <ul
        className=" flex flex-col md:flex-row justify-between items-start gap-8 lg:gap-0 
        lg:items-center h-32 border-t-[.1rem] border-gray-400 border-solid md:static
        lg:w-auto md:text-sm
        w-full lg:mr-20 lg:ml-20 mt-10 lg:mt-0"
      >
        <li className=" ml-10 md:ml-0 mt-5 lg:mt-0">
          <p className=" font-bold text-xl">Phone</p>
          <a href="tel:8063191187">(806)-319-1187</a>
        </li>
        <li className=" ml-10 md:ml-0 mt-5 lg:mt-0">
          <p className=" font-bold text-xl">Email</p>
          <a href="mailto:DanielOrtega8788@outlook.com">
            DanielOrtega8788@outlook.com
          </a>
        </li>
        <li className=" ml-10 md:ml-0 mt-5 lg:mt-0">
          <p className=" font-bold text-xl">Follow Me</p>
          <a className="flex gap-5">
            <img
              className="w-[40px] hover:cursor-pointer"
              src="assets/facebook-icon2.png"
              alt="facebook icon"
            />
            <img
              className="w-[40px] hover:cursor-pointer"
              src="assets/indeed-icon2.png"
              alt="indeed icon"
            />
          </a>
        </li>
        <li className=" ml-10 md:ml-0 mt-5 lg:mt-0 pb-10 md:pb-0">
          &copy; 2024 By Daniel Ortega.
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
