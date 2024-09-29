import { Navbar } from "../Navbar";
import { Features_grid } from "./Features_grid";
import { Features_hero } from "./Features_hero";

export const Features = () => {
  return (
    <div>
      <Navbar />
      <Features_hero />
      <Features_grid />
    </div>
  );
};
