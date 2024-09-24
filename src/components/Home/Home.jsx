import { Home_Hero } from "./Home_Hero";
import { Home_Grid } from "./Home_Grid";
import { Navbar } from "../Navbar";
import { Home_Features } from "./Home_Features";
import { Footer } from "../Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Home_Hero />
      <Home_Grid />
      <Home_Features />
      <Footer />
    </div>
  );
};
