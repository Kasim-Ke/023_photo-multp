import { useState } from "react";

import { HiArrowLongRight } from "react-icons/hi2";

// Import the images
import img1_dektop from "./desktop/mountains.jpg";
import img1_mobile from "./mobile/mountains.jpg";
import img2_dektop from "./desktop/cityscapes.jpg";
import img2_mobile from "./mobile/cityscapes.jpg";
import img3_dektop from "./desktop/18-days-voyage.jpg";
import img3_mobile from "./mobile/18-days-voyage.jpg";
import img4_dektop from "./desktop/architecturals.jpg";
import img4_mobile from "./mobile/architecturals.jpg";

export const Stories_Grid = () => {
  const [rotatedIndex, setRotatedIndex] = useState(null);

  const images = [
    {
      desktop: img1_dektop,
      mobile: img1_mobile,
      title: "The Mountains",
      author: "John Appleseed",
      story:
        "A serene peak that touches the sky, where clouds meet the mountain's edge. A journey that leads to peace and tranquility.",
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

  const handleCardClick = (index) => {
    // Toggle rotation state
    setRotatedIndex(rotatedIndex === index ? null : index);
  };

  return (
    <div className="lg:max-w-[1440px] md:max-w-[768px] max-w-[375px] h-full mx-auto flex text-white">
      <div className="grid grid-cols-1 lg:grid-rows-1 md:grid-rows-2 lg:grid-cols-4 md:grid-cols-2 mx-auto ">
        <div className="w-[375px] h-[495px] bg-black flex justify-center items-center text-white md:hidden  ">
          <div className="flex flex-col w-[318px] h-[399px] justify-between border border-solid border-white  pr-7 py-2 pl-2  ">
            <h4 className="text-[12px] tracking-[2px] ">
              LAST MONTH’S FEATURED STORY
            </h4>
            <h1 className="text-[32px] leading-[40px] tracking-[4-17px] tee  ">
              HAZY FULL MOON OF APPALACHIA
            </h1>
            <p>
              March 2nd 2020
              <span className="text-white pl-2">by John Appleseed</span>
            </p>

            <p>
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called mountains, especially in
              eastern Kentucky and West Virginia, and while the ridges are not
              high, the terrain is extremely rugged.
            </p>
          </div>
        </div>
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative lg:w-[360px] md:w-[384px] md:h-[500px]  w-[375px] h-[375px] [perspective:1000px] "
            onClick={() => handleCardClick(index)} // Handle click event
          >
            {/* Card container */}
            <div
              className={`relative h-full    transition-all duration-500 [transform-style:preserve-3d] ${
                rotatedIndex === index ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* Front side - Image */}
              <div className="absolute inset-0 w-full">
                {/* Desktop Image */}
                <img
                  className="hidden md:block h-full w-full  object-cover  shadow-black/40"
                  src={image.desktop}
                  alt={image.title}
                />

                {/* Mobile Image */}
                <img
                  className="block md:hidden h-full w-full  object-cover  shadow-black/40"
                  src={image.mobile}
                  alt={image.title}
                />
              </div>
              <button className="absolute top-0 left-0 right-0 bottom-0 bg-[black] bg-opacity-35 hover:bg-opacity-0 ease-in duration-300 hover:tracking-wide  [backface-visibility:hidden]">
                <h1 className="font-bold text-2xl">The Mountains </h1>
                <div className="absolute left-12 bottom-3  text-left">
                  <hr className="w-60  h-px my-4 bg-gray-200 border-0"></hr>
                  <div className="lg:w-[150px] flex mx-auto items-center">
                    <button className="pr-2">READ STORY</button>
                    <HiArrowLongRight size={30} />
                  </div>
                </div>
              </button>

              {/* Back side - Content */}
              <div className="absolute inset-0 h-full w-full  bg-black/80 px-8 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h3 className="text-2xl font-bold">{image.title}</h3>
                  <h4 className="text-sm">by {image.author}</h4>
                  <hr className="w-full my-4 bg-gray-200 border-0" />
                  <div className="flex items-center space-x-2">
                    <p className="text-sm px-5">{image.story}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
