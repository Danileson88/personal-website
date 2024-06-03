import "./App.css";
import Header from "./components/NavBar";
import Hero from "./components/hero";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Header openMenu={openMenu} isOpen={isOpen} />
      <Hero openMenu={openMenu} isOpen={isOpen} />
    </div>
  );
}

export default App;
