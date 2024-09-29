import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { Features_footer } from "./Features_footer";
import { Features_grid } from "./Features_grid";
import { Features_hero } from "./Features_hero";

export const Features = () => {
  return (
    <div>
      <Navbar />
      <Features_hero />
      <Features_grid />
      <Features_footer />
      <Footer />
    </div>
  );
};
