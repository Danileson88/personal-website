import "./App.css";
import Header from "./components/NavBar";
import Hero from "./components/hero";
import Footer from "./components/Footer";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav>{<Header isOpen={isOpen} openMenu={openMenu} />}</nav>
      <Routes>
        <Route
          path="/"
          element={<Hero isOpen={isOpen} openMenu={openMenu} />}
        />
        <Route
          path="/Contact"
          element={<Contact isOpen={isOpen} openMenu={openMenu} />}
        />
        <Route
          path="/Projects"
          element={<Projects isOpen={isOpen} openMenu={openMenu} />}
        />
        <Route
          path="/Resume"
          element={<Resume isOpen={isOpen} openMenu={openMenu} />}
        />
      </Routes>
      <footer>{<Footer isOpen={isOpen} />}</footer>
    </div>
  );
}

export default App;
