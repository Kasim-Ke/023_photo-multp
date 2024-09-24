import img1_dektop from "./desktop/mountains.jpg";
import img1_mobile from "./mobile/mountains.jpg";

import img2_dektop from "./desktop/cityscapes.jpg";
import img2_mobile from "./mobile/cityscapes.jpg";

import img3_dektop from "./desktop/18-days-voyage.jpg";
import img3_mobile from "./mobile/18-days-voyage.jpg";

import img4_dektop from "./desktop/architecturals.jpg";
import img4_mobile from "./mobile/architecturals.jpg";

import { HiArrowLongRight } from "react-icons/hi2";

export const Home_Grid = () => {
  const images = [
    {
      desktop: img1_dektop,
      mobile: img1_mobile,
      title: "The Mountains",
      author: "John Appleseed",
    },
    {
      desktop: img2_dektop,
      mobile: img2_mobile,
      title: "Sunset Cityscapes",
      author: "Benjamin Cruz",
    },
    {
      desktop: img3_dektop,
      mobile: img3_mobile,
      title: "18 Days Voyage",
      author: "Alexei Borodin",
    },
    {
      desktop: img4_dektop,
      mobile: img4_mobile,
      title: "Architecturals",
      author: "Samantha Brooke",
    },
  ];

  return (
    <div className="lg:max-w-[1440px] md:max-w-[768px] max-w-[378px] h-full mx-auto flex text-white ">
      <div className="grid grid-cols-1 lg:grid-rows-1 md:grid-rows-2 lg:grid-cols-4 md:grid-cols-2 mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative hover:-translate-y-3 duration-300"
          >
            {/* Button overlay */}
            <button className="absolute top-0 left-0 right-0 bottom-0 bg-[black] bg-opacity-35 hover:bg-opacity-0 ease-in duration-300 hover:tracking-wide">
              <div className="absolute left-3 bottom-3 mx-auto text-left">
                <h3 className="text-[18px] font-bold">{image.title}</h3>
                <h4 className="text-[12px]">by {image.author}</h4>
                <hr className="w-55 h-px my-4 bg-gray-200 border-0"></hr>
                <div className="lg:w-[150px] flex justify-between items-center">
                  <button className="">READ STORY</button>
                  <HiArrowLongRight size={30} />
                </div>
              </div>
            </button>

            {/* Desktop Image (Hidden on Mobile, Visible on md and larger) */}
            <img
              className="hidden md:block lg:w-[360px] md:w-[379px] h-[500px] object-cover"
              src={image.desktop}
              alt={image.title}
            />

            {/* Mobile Image (Visible on Mobile, Hidden on md and larger) */}
            <img
              className="block md:hidden w-[375px] h-[375px] object-cover"
              src={image.mobile}
              alt={image.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
