import { Navbar } from "../Navbar";
import { Stories_Grid } from "./Stories_Grid";
import { Stories_Hero } from "./Stories_Hero";
import { Footer } from "../Footer";

export const Stories = () => {
  return (
    <div className="">
      <Navbar />
      <Stories_Hero />
      <Stories_Grid />
      <Footer />
    </div>
  );
};
