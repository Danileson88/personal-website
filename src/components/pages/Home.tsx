import Footer from "../Footer";
import Header from "../NavBar";
import Hero from "../hero";
import { HeaderProps } from "../../types";

const Home: React.FC<HeaderProps> = ({ openMenu, isOpen }) => {
  return (
    <div>
      <Header openMenu={openMenu} isOpen={isOpen} />
      <Hero openMenu={openMenu} isOpen={isOpen} />
      <Footer />
    </div>
  );
};
export default Home;
