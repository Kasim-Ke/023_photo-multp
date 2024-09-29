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

import img5_dektop from "./desktop/world-tour.jpg";
import img5_mobile from "./mobile/world-tour.jpg";

import img6_dektop from "./desktop/unforeseen-corners.jpg";
import img6_mobile from "./mobile/unforeseen-corners.jpg";

import img7_dektop from "./desktop/king-on-africa.jpg";
import img7_mobile from "./mobile/king-on-africa.jpg";

import img8_dektop from "./desktop/trip-to-nowhere.jpg";
import img8_mobile from "./mobile/trip-to-nowhere.jpg";

import img9_dektop from "./desktop/running-free.jpg";
import img9_mobile from "./mobile/running-free.jpg";

import img10_dektop from "./desktop/behind-the-waves.jpg";
import img10_mobile from "./mobile/behind-the-waves.jpg";

import img11_dektop from "./desktop/rage-of-the-sea.jpg";
import img11_mobile from "./mobile/rage-of-the-sea.jpg";

import img12_dektop from "./desktop/calm-waters.jpg";
import img12_mobile from "./mobile/calm-waters.jpg";

import img13_dektop from "./desktop/milky-way.jpg";
import img13_mobile from "./mobile/milky-way.jpg";

import img14_dektop from "./desktop/dark-forest.jpg";
import img14_mobile from "./mobile/dark-forest.jpg";

import img15_dektop from "./desktop/somwarpet.jpg";
import img15_mobile from "./mobile/somwarpet.jpg";

import img16_dektop from "./desktop/land-of-dreams.jpg";
import img16_mobile from "./mobile/land-of-dreams.jpg";

export const Stories_Grid = () => {
  const [rotatedIndex, setRotatedIndex] = useState(null);

  {
    /* arrays, story, tile, images and author */
  }
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
      story:
        "A city’s silhouette against the setting sun. The streets buzz as lights flicker on, bringing the city to life after dark.",
    },
    {
      desktop: img3_dektop,
      mobile: img3_mobile,
      title: "18 Days Voyage",
      author: "Alexei Borodin",
      story:
        "An epic journey across oceans, spanning continents. The waves became a second home during these 18 days of adventure.",
    },
    {
      desktop: img4_dektop,
      mobile: img4_mobile,
      title: "Architecturals",
      author: "Samantha Brooke",
      story:
        "Wandering through the modern metropolis, every building tells a story. Towering glass and steel structures, monuments of creativity.",
    },
    {
      desktop: img5_dektop,
      mobile: img5_mobile,
      title: "World Tour",
      author: "Timothy Wagner",
      story:
        "From the bustling streets of New York to the serene beaches of Thailand, this journey captures the wonders of our planet.",
    },
    {
      desktop: img6_dektop,
      mobile: img6_mobile,
      title: "Unforeseen Corners",
      author: "Linda Barrett",
      story:
        "Lost in the beauty of the unexpected, we found hidden gems in the least likely places. The journey was full of surprises.",
    },
    {
      desktop: img7_dektop,
      mobile: img7_mobile,
      title: "King on Africa",
      author: "David Attenborough",
      story:
        "In the heart of Africa, where lions reign supreme, we ventured deep into the savannah, capturing moments of pure wildlife majesty.",
    },
    {
      desktop: img8_dektop,
      mobile: img8_mobile,
      title: "Trip to Nowhere",
      author: "Maria Gonzales",
      story:
        "A voyage without a destination, where the journey itself is the purpose. We traveled endlessly, savoring every passing moment.",
    },
    {
      desktop: img9_dektop,
      mobile: img9_mobile,
      title: "Running Free",
      author: "Jake Peralta",
      story:
        "With the wind at our backs, we ran through open fields, feeling the ultimate freedom of untamed nature beneath our feet.",
    },
    {
      desktop: img10_dektop,
      mobile: img10_mobile,
      title: "Behind the Waves",
      author: "Surfer Joe",
      story:
        "The ocean calls, and the waves answer. Beneath the surface, we found a whole world of rhythm and power waiting to be explored.",
    },
    {
      desktop: img11_dektop,
      mobile: img11_mobile,
      title: "Rage of the Sea",
      author: "Emma Dune",
      story:
        "The storm hit without warning, waves crashing like thunder. Yet in the chaos, we found beauty in the ocean’s fury.",
    },
    {
      desktop: img12_dektop,
      mobile: img12_mobile,
      title: "Calm Waters",
      author: "Nicholas Flamel",
      story:
        "After days of turbulent seas, the water finally calmed. A peaceful stillness stretched across the horizon, offering solace.",
    },
    {
      desktop: img13_dektop,
      mobile: img13_mobile,
      title: "Milky Way",
      author: "Anna Stars",
      story:
        "Under the darkest skies, the Milky Way shone bright, a river of stars across the heavens, reminding us of our place in the universe.",
    },
    {
      desktop: img14_dektop,
      mobile: img14_mobile,
      title: "Dark Forest",
      author: "Olivia Wilde",
      story:
        "The dense woods whispered secrets as we ventured deeper into the unknown, where every shadow held a mystery waiting to unfold.",
    },
    {
      desktop: img15_dektop,
      mobile: img15_mobile,
      title: "Somwarpet",
      author: "Rajesh Patel",
      story:
        "Nestled in the hills of Karnataka, Somwarpet is a hidden paradise where the mist rolls in, and time stands still.",
    },
    {
      desktop: img16_dektop,
      mobile: img16_mobile,
      title: "Land of Dreams",
      author: "Elena Fitzgerald",
      story:
        "In this land, dreams and reality blur. Every step feels like walking through a fairytale, where the impossible becomes possible.",
    },
  ];

  const handleCardClick = (index) => {
    // Toggle rotation state
    setRotatedIndex(rotatedIndex === index ? null : index);
  };

  return (
    <div
      className="lg:max-w-[1440px] md:max-w-[768px] max-w-[375px] h-full mx-auto flex text-white"
      data-aos="zoom-down"
    >
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
                <h1 className="font-bold text-2xl">{image.title}</h1>
                <h4 className="text-sm">by {image.author}</h4>
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
