import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import responsive from "./desktop/responsive.svg";
import nolimit from "./desktop/no-limit.svg";
import embed from "./desktop/embed.svg";

export const Home_Features = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  });

  return (
    <div className="lg:max-w-[1440px] lg:h-[476px]   items-center justify-center md:max-w-[768px] md:h-[1015px] h-[962px] w-[375px] flex-col mx-auto flex ">
      {/*  container*/}
      <div
        className="lg:w-[1110px] lg:h-[236px] lg:flex-row justify-between items-center md:w-[457px] md:h-[775px] w-[310px] h-[802px] flex-col  flex "
        data-aos="fade-left"
      >
        {/* 1 box*/}
        <div className="lg:w-[350px] lg:h-full md:-[457px] md:h-[211px] w-[310px] h-[236px] text-center  flex flex-col justify-between ">
          <img
            className="lg:w-[72px] mx-auto "
            src={responsive}
            alt="responsive"
          />
          {/* 1 text-box*/}
          <div className=" w-full lg:h-[116px] md:h-[91px] h-[116px] flex flex-col justify-between">
            <h4 className="lg:text-[18px] font-bold">100% Responsive</h4>
            <p>
              No matter which the device you’re on, our site is fully responsive
              and stories look beautiful on any screen.
            </p>
          </div>
        </div>
        {/* 2 box*/}
        <div className="lg:w-[350px] lg:h-full md:-[457px] md:h-[193px] w-[310px] h-[218px] text-center  flex flex-col justify-between ">
          <img
            className="lg:w-[72px] lg:mt-5 mx-auto "
            src={nolimit}
            alt="nolimit"
          />
          {/* 2 text-box*/}
          <div className=" w-full lg:h-[116px] md:h-[91px] h-[116px]  flex flex-col justify-between">
            <h4 className="lg:text-[18px]  font-bold">No Photo Upload Limit</h4>
            <p>
              Our tool has no limits on uploads or bandwidth. Freely upload in
              bulk and share all of your stories in one go.
            </p>
          </div>
        </div>
        {/* 3 box*/}
        <div className="lg:w-[350px] lg:h-full md:-[457px] md:h-[211px] w-[310px] h-[236px] text-center  flex flex-col justify-between">
          <img className="lg:w-[72px] mx-auto " src={embed} alt="embed" />
          {/* 3 text-box*/}
          <div className=" w-full lg:h-[116px] md:h-[91px] h-[116px] flex flex-col justify-between">
            <h4 className="lg:text-[18px] font-bold">Available to Embed</h4>
            <p className="lg:mb-7">
              Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
              videos, Google Maps, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
