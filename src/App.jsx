import "./App.css";
import Header from "./components/NavBar";
import Hero from "./components/hero";
import Footer from "./components/Footer";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";
import Login from "./components/pages/Login";
import menuProvider from "./components/MenuContext";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <menuProvider.Provider value={{ isOpen, setIsOpen, openMenu }}>
        <nav>{<Header />}</nav>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <footer>{<Footer />}</footer>
      </menuProvider.Provider>
    </div>
  );
}

export default App;
