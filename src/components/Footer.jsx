import logo from "./Home/desktop/logo.svg";
import { HiArrowLongRight } from "react-icons/hi2";

import {
  BsTwitterX,
  BsFacebook,
  BsYoutube,
  BsPinterest,
  BsInstagram,
} from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="w-full lg:h-[250px] md:h-[284px] h-[539px] justify-center items-center flex  mx-auto px-10 bg-black ">
      {/*container */}
      <div className="lg:w-[1300px] lg:h-[122px] md:w-[689px] md:h-[156px] w-[310px] h-[427px] justify-between flex md:flex-row flex-col  ">
        {/*logo and svg box */}
        <div className="flex  md:w-[250px] w-[310px] h-[121px]  md:flex-row  flex-col justify-between  ">
          <div className="lg:w-[300px]  h-full  justify-between   flex-col flex ">
            <img className="lg:w-[200px] lg:h-[18px]  " src={logo} alt="logo" />
            {/*svgs */}
            <div className=" lg:w-[155px] lg:h-[20px]  justify-between flex">
              <BsFacebook
                className="hover:cursor-pointer "
                size={20}
                color="#2768E7"
              />
              <BsYoutube
                className="hover:cursor-pointer  "
                size={20}
                color="#FF4433"
              />
              <BsTwitterX
                className="hover:cursor-pointer "
                size={20}
                color="white"
              />
              <BsPinterest
                className="hover:cursor-pointer "
                size={20}
                color="#fd5c00 "
              />
              <BsInstagram
                className="hover:cursor-pointer "
                size={20}
                color="violet"
              />
            </div>
          </div>
        </div>
        {/*buttons */}
        <div className="md:h-[121px] flex flex-col md:mx-auto justify-between items-center  h-[121px] text-white font-bold mx-auto  ">
          <button className="hover:text-gray-500 duration-300 ">HOME</button>
          <button className="hover:text-gray-500 duration-300 ">STORIES</button>
          <button className="hover:text-gray-500 duration-300 ">
            FEATURES
          </button>
          <button className="hover:text-gray-500 duration-300 ">PRICING</button>
        </div>

        {/*buttom and copy right */}
        <div className=" md:h-[121px] flex flex-col justify-between md:items-end items-center ">
          <button className="lg:w-[200px] lg:h-[14px] flex justify-between  items-center text-white ">
            <h5 className="lg:text-[14px] tracking-[2px] font-bold hover:border-b hover:border-b-white hover:scale-105 ease-in-out duration-200 pr-2">
              VIEW THE STORIES
            </h5>
            <HiArrowLongRight size={30} color="white" />
          </button>
          <p className="pt-3">Copyright 2024. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};
