import { Navbar } from "../Navbar";
import { Pricing_Cards } from "./Pricing_Cards";
import { Pricing_Hero } from "./Pricing_Hero";

export const Pricing = () => {
  return (
    <div>
      <Navbar />
      <Pricing_Hero />
      <Pricing_Cards />
    </div>
  );
};
