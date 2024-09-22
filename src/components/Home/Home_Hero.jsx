import Home_img1 from "./desktop/create-and-share.jpg";
import Home_img2 from "./desktop/beautiful-stories.jpg";
import Home_img3 from "./desktop/designed-for-everyone.jpg";
import { HiArrowLongRight } from "react-icons/hi2";

export const Home_Hero = () => {
  return (
    <div className="lg:max-w-[1440px] lg:h-screen mx-auto  ">
      <div className="lg:flex lg:flex-col   ">
        {/*/////////////////  Row 1 ///////////////// */}
        <div className="lg:flex ">
          {/* Row 1 text box */}
          <div className="lg:w-[610px] lg:h-[650px] lg:justify-center lg:items-center lg:text-left flex  text-white  bg-black">
            <div className="flex flex-col justify-between items-start  lg:w-[387px] lg:h-[304px] ">
              <h1 className="uppercase font-bold ">
                Create and share your photo stories.
              </h1>
              <p>
                Photosnap is a platform for photographers and visual
                storytellers. We make it easy to share photos, tell stories and
                connect with others.
              </p>
              <button className="lg:w-[160px] lg:h-[16px] flex justify-between  items-center">
                <h5 className="lg:text-[12px] tracking-[2px] font-bold hover:border-b hover:border-b-white ease-in-out duration-200">
                  GET AN INVITE
                </h5>
                <HiArrowLongRight size={30} />
              </button>
            </div>
          </div>
          {/* Row 1 image*/}
          <div>
            <img
              className="lg:w-[830px] lg:h-[650px] object-cover "
              src={Home_img1}
              alt="Home_img1"
            />
          </div>
        </div>
        {/* ///////////////// Row 2  ///////////////// */}
        <div className="lg:flex ">
          {/* Row 2 image*/}
          <div>
            <img
              className="lg:w-[830px] lg:h-[600px] object-cover "
              src={Home_img2}
              alt="Home_img2"
            />
          </div>
          {/* Row 2 text box */}
          <div className="lg:w-[610px] lg:h-[600px] lg:justify-center lg:items-center lg:text-left flex     ">
            <div className="flex flex-col justify-between items-start  lg:w-[387px] lg:h-[304px]   ">
              <h1 className="uppercase font-bold pr-[120px] ">
                BEAUTIFUL STORIES EVERY TIME
              </h1>
              <p>
                We provide design templates to ensure your stories look
                terrific. Easily add photos, text, embed maps and media from
                other networks. Then share your story with everyone.
              </p>
              <button className="lg:w-[200px] lg:h-[16px] flex justify-between  items-center">
                <h5 className="lg:text-[12px] tracking-[2px] font-bold hover:border-b hover:border-b-black ease-in-out duration-200">
                  VIEW THE STORIES
                </h5>
                <HiArrowLongRight size={30} />
              </button>
            </div>
          </div>
        </div>
        {/*/////////////////  Row 3 ///////////////// */}
        <div className="lg:flex ">
          {/* Row 3 text box */}
          <div className="lg:w-[610px] lg:h-[600px] lg:justify-center lg:items-center lg:text-left flex   ">
            <div className="flex flex-col justify-between items-start  lg:w-[387px] lg:h-[304px] ">
              <h1 className="uppercase font-bold ">DESIGNED FOR EVERYONE</h1>
              <p>
                Photosnap can help you create stories that resonate with your
                audience. Our tool is designed for photographers of all levels,
                brands, businesses you name it.
              </p>
              <button className="lg:w-[200px] lg:h-[16px] flex justify-between  items-center">
                <h5 className="lg:text-[12px] tracking-[2px] font-bold hover:border-b hover:border-b-black ease-in-out duration-200">
                  VIEW THE STORIES
                </h5>
                <HiArrowLongRight size={30} />
              </button>
            </div>
          </div>
          <div>
            {/* Row 3 image*/}
            <img
              className="lg:w-[830px] lg:h-[600px] object-cover "
              src={Home_img3}
              alt="Home_img3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
