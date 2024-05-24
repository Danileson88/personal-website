import React from "react";

const Header: React.FC = () => {
  return (
    <nav className=" flex mt-8 ml-4 justify-between">
      <div className="flex">
        <span className=" bg-gray-600 rounded-full w-10 mr-3"></span>
        <div className="flex items-baseline">
          <h1 className=" font-bebas font-extrabold text-4xl mr-3">
            Daniel Ortega
          </h1>
          <h4 className=" font-small">Developer</h4>
        </div>
      </div>
      <div className="mr-6 flex">
        <h1 className="mr-4">
          Login
          <span className=" ml-2 border-l-2 border-black"></span>
        </h1>
        <h1>
          Contact
          <span className=" ml-2 border-l-2 border-black"></span>
        </h1>
        <h1 className="ml-2 mr-2">
          Resume
          <span className=" ml-2 border-l-2 border-black"></span>
        </h1>
        <h1>
          Project
          <span className=" ml-2 border-l-2 border-black"></span>
        </h1>
      </div>
    </nav>
  );
};
export default Header;
