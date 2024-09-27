import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Home_img1_desktop from "./desktop/create-and-share.jpg";
import Home_img1_tablet from "./tablet/create-and-share.jpg";
import Home_img1_mobile from "./mobile/create-and-share.jpg";

import Home_img2_desktop from "./desktop/beautiful-stories.jpg";
import Home_img2_tablet from "./tablet/beautiful-stories.jpg";
import Home_img2_mobile from "./mobile/beautiful-stories.jpg";

import Home_img3_desktop from "./desktop/designed-for-everyone.jpg";
import Home_img3_tablet from "./tablet/designed-for-everyone.jpg";
import Home_img3_mobile from "./mobile/designed-for-everyone.jpg";

import { HiArrowLongRight } from "react-icons/hi2";

export const Home_Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  });

  return (
    <div className="lg:max-w-[1440px]  md:h-[1900px]  md:max-w-[768px] max-w-[375px] h-[2150px]  mx-auto  ">
      <div className=" flex flex-col   ">
        {/*/////////////////  Row 1 ///////////////// */}
        <div
          className="flex md:flex-row flex-col-reverse  "
          data-aos="fade-down"
        >
          {/* Row 1 text box */}
          <div className="lg:w-[610px] lg:h-[650px] justify-center items-center md:w-[495px] md:h-[650px] md:flex-row w-[375px] h-[419px] flex-col text-left flex  text-white  bg-black ">
            <div className="flex flex-col justify-between items-start md:w-[387px] md:h-[304px] w-[318px] h-[275px]  ">
              <h1 className="md:text-[40px] md:leading-[48px] md:tracking-[4.17px] text-[32px] leading-[40px] tracking-[3.33px]  uppercase font-bold  ">
                Create and share your photo stories.
              </h1>
              <p>
                Photosnap is a platform for photographers and visual
                storytellers. We make it easy to share photos, tell stories and
                connect with others.
              </p>
              <button className="lg:w-[160px] lg:h-[16px] flex justify-between  items-center">
                <h5 className="lg:text-[12px] tracking-[2px] font-bold hover:border-b hover:border-b-white hover:scale-105 ease-in-out duration-200 pr-2">
                  GET AN INVITE
                </h5>
                <HiArrowLongRight size={30} />
              </button>
            </div>
          </div>

          <div>
            {/* Row 1 DEKTOP IMAGE*/}
            <img
              className="lg:w-[830px] lg:block hidden lg:h-[650px] md:w-[273px] md:h-[650px]  object-cover "
              src={Home_img1_desktop}
              alt="Home_img1_desktop "
            />
            {/* Row 1 TABLET IMAGE*/}
            <img
              className=" md:block lg:hidden sm:hidden  md:w-[273px] md:h-[650px] object-cover "
              src={Home_img1_tablet}
              alt="Home_img2_tablet"
            />
            {/* Row 1 MOBILE IMAGE*/}
            <img
              className="md:hidden block w-[375px] h-[294px]"
              src={Home_img1_mobile}
              alt="Home_img1_mobile"
            />
          </div>
        </div>
        {/* ///////////////// Row 2  ///////////////// */}
        <div className="flex md:flex-row flex-col " data-aos="fade-down-right">
          <div>
            {/* Row 2 DEKTOP IMAGE*/}
            <img
              className="lg:w-[830px] lg:block hidden lg:h-[650px] md:w-[273px] md:h-[600px]  object-cover  "
              src={Home_img2_desktop}
              alt="Home_img2_desktop "
            />
            {/* Row 2 TABLET IMAGE*/}
            <img
              className=" md:block lg:hidden sm:hidden  md:w-[273px] md:h-[600px] object-cover "
              src={Home_img2_tablet}
              alt="Home_img2_tablet"
            />
            {/* Row 2 MOBILE IMAGE*/}
            <img
              className="md:hidden block w-[375px] h-[271px]"
              src={Home_img2_mobile}
              alt="Home_img1_mobile"
            />
          </div>
          {/* Row 2 text box */}
          <div className="lg:w-[610px] lg:h-[600px] justify-center items-center md:w-[495px] md:h-[600px] w-[375px] h-[419px] flex     ">
            <div className="md:w-[387px] md:h-[304px] w-[318px] h-[275px] flex flex-col justify-between items-start    ">
              <h1 className="md:text-[40px] md:leading-[48px] md:tracking-[4.17px] text-[32px] leading-[40px] tracking-[3.33px]  uppercase font-bold  md:pr-[120px] pr-[50px] ">
                BEAUTIFUL STORIES EVERY TIME
              </h1>
              <p>
                We provide design templates to ensure your stories look
                terrific. Easily add photos, text, embed maps and media from
                other networks. Then share your story with everyone.
              </p>
              <button className="lg:w-[200px] lg:h-[16px] flex justify-between  items-center">
                <h5 className="lg:text-[12px] tracking-[2px] font-bold hover:border-b hover:border-b-black hover:scale-105 ease-in-out duration-200 pr-2">
                  VIEW THE STORIES
                </h5>
                <HiArrowLongRight size={30} />
              </button>
            </div>
          </div>
        </div>
        {/*/////////////////  Row 3 ///////////////// */}
        <div
          className=" flex md:flex-row flex-col-reverse "
          data-aos="fade-down"
        >
          {/* Row 3 text box */}
          <div className="lg:w-[610px] lg:h-[600px] justify-center items-center md:w-[495px] md:h-[600px] w-[375px] h-[419px] flex   ">
            <div className="md:w-[387px] md:h-[304px] w-[318px] h-[275px]   flex flex-col justify-between items-start   ">
              <h1 className="md:text-[40px] md:leading-[48px] md:tracking-[4.17px] text-[32px] leading-[40px] tracking-[3.33px]  uppercase font-bold  ">
                DESIGNED FOR EVERYONE
              </h1>
              <p>
                Photosnap can help you create stories that resonate with your
                audience. Our tool is designed for photographers of all levels,
                brands, businesses you name it.
              </p>
              <button className="lg:w-[200px] lg:h-[16px] flex justify-between  items-center ">
                <h5 className="lg:text-[12px] tracking-[2px] font-bold hover:border-b hover:border-b-black ease-in-out hover:scale-105 duration-200 pr-2">
                  VIEW THE STORIES
                </h5>
                <HiArrowLongRight size={30} />
              </button>
            </div>
          </div>
          <div>
            {/* Row 3 DEKTOP IMAGE*/}
            <img
              className="lg:w-[830px] lg:block hidden lg:h-[600px] md:w-[273px] md:h-[600px] object-cover "
              src={Home_img3_desktop}
              alt="Home_img3_desktop"
            />
            {/* Row 2 TABLET IMAGE*/}
            <img
              className=" md:block lg:hidden sm:hidden  md:w-[273px] md:h-[600px] object-cover  "
              src={Home_img3_tablet}
              alt="Home_img3_tablet"
            />
            {/* Row 3 MOBILE IMAGE*/}
            <img
              className="block md:hidden w-[375px] h-[271px] object-cover"
              src={Home_img3_mobile}
              alt="Home_img3_mobile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
