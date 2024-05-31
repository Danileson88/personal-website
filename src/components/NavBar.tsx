import React, { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" flex items-baseline mt-8 ml-5 md:ml-10 md:mr-10 md:justify-between">
      <div className="flex">
        <span className=" bg-gray-600 rounded-full md:w-10 w-9  mr-3"></span>
        <div className="flex items-baseline">
          <h1 className=" font-bebas font-extrabold md:text-4xl text-3xl mr-3">
            Daniel Ortega
          </h1>
          <h4 className=" font-small">Developer</h4>
        </div>
      </div>
      <img
        src="./src/assets/hamburger-icon.png"
        className={`md:hidden w-10 ml-12`}
        onClick={openMenu}
      />
      <ul className={`mr-6 md:flex ${isOpen ? "hidden" : "flex"}`}>
        <li className="mr-4">
          Login
          <span className=" ml-2 border-l-2 border-black"></span>
        </li>
        <li>
          Contact
          <span className=" ml-2 border-l-2 border-black"></span>
        </li>
        <li className="ml-2 mr-2">
          Resume
          <span className=" ml-2 border-l-2 border-black"></span>
        </li>
        <li>
          Project
          <span className=" ml-2 border-l-2 border-black"></span>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
