import { Features_footer } from "../Features/Features_footer";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { Pricing_Cards } from "./Pricing_Cards";
import { Pricing_Hero } from "./Pricing_Hero";
import { Pricing_Table } from "./Pricing_Table";

export const Pricing = () => {
  return (
    <div>
      <Navbar />
      <Pricing_Hero />
      <Pricing_Cards />
      <Pricing_Table />
      <Features_footer />
      <Footer />
    </div>
  );
};
