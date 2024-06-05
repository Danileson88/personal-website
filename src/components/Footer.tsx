import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" mt-32 hidden md:flex justify-center lg:block">
      <ul
        className=" flex justify-between items-center h-32 border-t-4 border-gray-400 border-solid absolute md:static bottom-[-500px] md:w-auto
     w-11/12 md:mr-20 md:ml-20"
      >
        <li>
          <p className=" font-bold text-xl">Phone</p>
          <a href="tel:8063191187">(806)-319-1187</a>
        </li>
        <li>
          <p className=" font-bold text-xl">Email</p>
          <a href="mailto:DanielOrtega8788@outlook.com">
            DanielOrtega8788@outlook.com
          </a>
          <li />
        </li>
        <li>
          <p className=" font-bold text-xl">Follow Me</p>
          <a className="flex">
            <img src="assets/facebook-icon.png" />
            <img src="assets/indeed-icon.png" />
          </a>
        </li>
        <li>&copy; 2024 By Daniel Ortega.</li>
      </ul>
    </footer>
  );
};

export default Footer;
