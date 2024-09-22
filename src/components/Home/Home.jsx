import { Home_Hero } from "./Home_Hero";
import { Home_Hero_Footer } from "./Home_Hero_Footer";
import { Navbar } from "../Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Home_Hero />
      <Home_Hero_Footer />
    </div>
  );
};
