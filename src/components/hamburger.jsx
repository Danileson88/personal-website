import { useState } from "react";

const HamburgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center p-4 bg-gray-100">
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
    </div>
  );
};

export default HamburgerIcon;
