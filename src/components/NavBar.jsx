import { Link } from "react-router-dom";
import "../styles/animations.css";

const Header = ({ openMenu, isOpen }) => {
  const closeMenu = () => {
    if (isOpen) {
      openMenu();
    }
  };

  return (
    <nav
      className="pt-8 flex md:ml-10 md:mr-10 md:justify-between
    w-auto md:w-auto bg-gray-200 top-0 z-10 md:border-b-[.1rem] border-gray-400 md:h-[8rem]"
    >
      <div className="flex items-center ml-5">
        <span className="bg-gray-600 rounded-full md:w-10 w-14 md:h-10 h-14 mr-3"></span>
        <div className="flex items-baseline">
          <Link to="/">
            <h1
              className="font-bebas font-extrabold md:text-4xl text-3xl mr-3"
              onClick={closeMenu}
            >
              Daniel Ortega
            </h1>
          </Link>
          <h4 className="font-small flex-none">Developer</h4>
        </div>
      </div>
      <img
        src={`${isOpen ? "assets/x-icon4.png" : "assets/hamburger-icon.png"}`}
        className={`md:hidden cursor-pointer w-10 h-10 ml-10 ${
          isOpen ? "w-12 h-12" : "w-10"
        }`}
        onClick={openMenu}
      />
      <ul
        className={`md:mr-6 md:flex absolute md:relative top-32 md:top-0
        md:w-auto w-[28rem] pt-[11rem] md:pt-10 md:h-auto bg-gray-600 text-white md:text-black
         font-extrabold md:font-normal md:bg-inherit
        h-screen flex items-center flex-col md:flex-row md:gap-2 gap-10
        text-5xl md:text-base
        ${isOpen ? "block fade-in-up md:animate-none" : "hidden"} md:block`}
        style={{ zIndex: 50 }}
      >
        <li className="md:hover:text-orange-400 mr-4 md:mt-0 hover:cursor-pointer">
          Login
          <span className="ml-2 md:border-l-2 border-black"></span>
        </li>
        <li className="md:hover:text-orange-400 hover:cursor-pointer">
          <Link to="/Contact" onClick={closeMenu}>
            Contact
          </Link>
          <span className="ml-2 md:border-l-2 border-black"></span>
        </li>
        <li className="md:hover:text-orange-400 ml-2 mr-2 hover:cursor-pointer">
          <Link to="/Resume" onClick={closeMenu}>
            Resume
          </Link>
          <span className="ml-2 md:border-l-2 border-black"></span>
        </li>
        <li className="md:hover:text-orange-400 hover:cursor-pointer">
          <Link to="/Projects" onClick={closeMenu}>
            Projects
          </Link>
          <span className="ml-2 md:-l-2 border-black"></span>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
