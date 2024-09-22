import image1 from "../images/stories/desktop/18-days-voyage.jpg";
import { Navbar } from "./Navbar";

export const Stories_Hero = () => {
  return (
    <div>
      <Navbar />
      <img src={image1} alt="" />
    </div>
  );
};
