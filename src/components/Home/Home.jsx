import { Home_Hero } from "./Home_Hero";
import { Home_Grid } from "./Home_Grid";
import { Navbar } from "../Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Home_Hero />
      <Home_Grid />
    </div>
  );
};
