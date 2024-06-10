import "./App.css";
import Header from "./components/NavBar";
import Hero from "./components/hero";
import Footer from "./components/Footer";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div>
        <Header openMenu={openMenu} isOpen={isOpen} />
        <Hero openMenu={openMenu} isOpen={isOpen} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
