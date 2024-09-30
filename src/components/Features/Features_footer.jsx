import bg from "./features/desktop/bg-beta.jpg";
import { HiArrowLongRight } from "react-icons/hi2";

export const Features_footer = () => {
  return (
    <div className="relative max-w-[1440px] md:h-[280px]  h-[288px]  flex items-center justify-center mx-auto  ">
      <img
        className=" w-full md:h-[280px] h-[288px]   object-cover "
        src={bg}
        alt="gb"
      />
      <div className="absolute lg:w-[1110px] md:w-[650px] md:h-[144px] w-[310px] h-[160px] md:flex-row flex-col justify-between  text-white flex ">
        <h1 className="lg:w-[440px] md:h-[144px] md:pr-10 md:text-[40px] md:leading-[48px] md:w-[400px] text-[32px] leading-[40px]  md:tracking-[4.17px] tracking-[3.33px] md:mx-12  uppercase">
          We’re in beta. Get your invite today!
        </h1>
        <div className=" md:my-auto  ">
          <button className="md:w-[200px] md:h-[14px] flex justify-between  items-center text-white ">
            <h5 className="md:text-[14px] tracking-[2px] font-bold hover:border-b hover:border-b-white hover:scale-105 ease-in-out duration-200 pr-2">
              GET AN INVITE
            </h5>
            <HiArrowLongRight size={30} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};
