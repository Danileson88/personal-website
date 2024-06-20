import "./App.css";
import Header from "./components/NavBar";
import Hero from "./components/hero";
import Footer from "./components/Footer";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/pages/Contact";

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
          path="/persona-website/"
          element={<Hero isOpen={isOpen} openMenu={openMenu} />}
        />
        <Route
          path="/Contact"
          element={<Contact isOpen={isOpen} openMenu={openMenu} />}
        />
      </Routes>
      <footer>{<Footer />}</footer>
    </div>
  );
}

export default App;
