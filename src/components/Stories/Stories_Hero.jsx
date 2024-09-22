import image1 from "./desktop/calm-waters.jpg";
import { Navbar } from "../Navbar";

export const Stories_Hero = () => {
  return (
    <div>
      <Navbar />
      <img src={image1} alt="" />
    </div>
  );
};
