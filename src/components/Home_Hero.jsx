import image2 from "../images/stories/desktop/king-on-africa.jpg";
import { Navbar } from "./Navbar";

export const Home_Hero = () => {
  return (
    <div>
      <Navbar />
      <img src={image2} alt="" />
    </div>
  );
};
