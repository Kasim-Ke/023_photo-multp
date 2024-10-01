import logo from "./Home/desktop/logo2.svg";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="lg:w-[1440px] md:w-[768px] h-[72px] flex items-center justify-between mx-auto px-8  ">
      {/* Logo Section */}
      <div className="text-4xl font-bold text-black lg:block md:w-[150px]">
        <img src={logo} alt="logo" />
      </div>

      {/* Links Section */}
      <div className="flex w-[270px] h-[16px] lg:space-x-8 md:space-x-4 lg:text-lg md:text-[15px] text-black font-bold">
        <Link to="/home" className="hover:text-gray-500">
          HOME
        </Link>

        <Link to="/stories" className="hover:text-gray-500">
          STORIES
        </Link>
        <Link to="/features" className="hover:text-gray-500">
          FEATURES
        </Link>
        <Link to="/pricing" className="hover:text-gray-500">
          PRICING
        </Link>
      </div>

      {/* Button Section */}
      <div>
        <button className="bg-black text-white font-bold py-2 px-6 rounded hover:text-black hover:bg-gray-300">
          GET AN INVITE
        </button>
      </div>
    </div>
  );
};
