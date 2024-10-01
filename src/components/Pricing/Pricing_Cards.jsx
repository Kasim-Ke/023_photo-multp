import { useState } from "react";

export const Pricing_Cards = () => {
  const [isYearly, setIsYearly] = useState(false);

  // Pricing based on toggle
  const basicPrice = isYearly ? 19 * 10 : 19;
  const proPrice = isYearly ? 39 * 10 : 39;
  const businessPrice = isYearly ? 99 * 10 : 99;

  return (
    <div
      className="lg:max-w-[1440px] lg:h-[823px] md:max-w-[768px] md:h-[1165px] w-[375px] h-[1442px] mx-auto flex justify-center items-center "
      data-aos="fade-up"
    >
      <div className="lg:w-[1110px] lg:h-[550px] mx-auto justify-center items-center flex flex-col ">
        {/* TOGGLE BUTTON BOX */}
        <div className="w-full h-[80px] flex justify-center items-start">
          <div className="flex items-center justify-between w-[255px]">
            <span className="text-lg font-semibold text-gray-800">Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={() => setIsYearly(!isYearly)}
              />
              <div className="w-[64px] h-[32px] bg-gray-300 peer-focus:outline-none peer-focus:ring-3 peer-focus:ring-gray-500 rounded-full peer dark:bg-gray-700 peer-checked:bg-black"></div>
              <div className="absolute left-2 top-0.4 w-[24px] h-[24px] bg-white border border-gray-600 rounded-full transition-transform peer-checked:translate-x-full"></div>
            </label>
            <span className="text-lg font-semibold text-gray-800">Yearly</span>
          </div>
        </div>

        {/*  CARDS */}
        <div className="lg:w-[1110px] lg:h-[470px] md:w-[689px] md:h-[860px] w-[318px] h-[1269px] lg:flex-row flex-col flex justify-between items-center">
          {/*  1st Card */}
          <div className="lg:w-[350px] lg:h-[407px] md:w-[689px] md:h-[270px] w-[318px] h-[407px]   flex flex-col justify-around items-center bg-gray-200 hover:rounded-3xl hover:bg-gray-400 hover:scale-110 duration-500">
            <div className="w-[270px] h-[118px] flex flex-col justify-between items-center text-center">
              <h1 className="font-bold text-[24px]">Basic</h1>
              <p className="text-black">
                Includes basic usage of our platform. Recommended for new and
                aspiring photographers.
              </p>
            </div>
            <div className="text-center">
              <h1 className="font-bold text-[40px]">${basicPrice}.00</h1>
              <p className="text-black">per {isYearly ? "year" : "month"}</p>
            </div>
            <button className=" w-[270px] h-[40px] font-bold text-[12px] bg-black text-white hover:rounded-3xl hover:text-black hover:bg-white hover:scale-110 duration-500">
              PICK PLAN
            </button>
          </div>

          {/*  2nd Card */}
          <div className="lg:w-[350px] lg:h-[470px]  md:w-[689px] md:h-[270px] w-[318px] h-[407px]   flex flex-col justify-around items-center bg-gray-700 text-white hover:bg-black hover:rounded-3xl hover:scale-110 duration-500">
            <div className="w-[270px] h-[118px] flex flex-col justify-between items-center text-center">
              <h1 className="font-bold text-[24px]">Pro</h1>
              <p>
                More advanced features available. Recommended for photography
                veterans and professionals.
              </p>
            </div>
            <div className="text-center">
              <h1 className="font-bold text-[40px]">${proPrice}.00</h1>
              <p>per {isYearly ? "year" : "month"}</p>
            </div>
            <button className="w-[270px] h-[40px] font-bold text-[12px] bg-white text-black hover:rounded-3xl hover:scale-110 duration-500">
              PICK PLAN
            </button>
          </div>

          {/*  3rd Card */}
          <div className="lg:w-[350px] lg:h-[407px]  md:w-[689px] md:h-[270px] w-[318px] h-[407px]    flex flex-col justify-around items-center bg-gray-200 hover:rounded-3xl hover:bg-gray-400 hover:scale-110 duration-500">
            <div className="w-[270px] h-[118px] flex flex-col justify-between items-center text-center">
              <h1 className="font-bold text-[24px]">Business</h1>
              <p className="text-black">
                Additional features available such as more detailed metrics.
                Recommended for business owners.
              </p>
            </div>
            <div className="text-center">
              <h1 className="font-bold text-[40px]">${businessPrice}.00</h1>
              <p className="text-black">per {isYearly ? "year" : "month"}</p>
            </div>
            <button className="w-[270px] h-[40px] font-bold text-[12px] bg-black text-white hover:rounded-3xl hover:text-black hover:bg-white hover:scale-110  duration-500 ">
              PICK PLAN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
