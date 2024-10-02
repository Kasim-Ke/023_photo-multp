import { useState, useEffect } from "react";
import logo from "./Home/desktop/logo2.svg";
import { IoMdMenu } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Navbar = () => {
  // State to track the mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);

  // State to animate height of the dropdown
  const [menuHeight, setMenuHeight] = useState("0px");

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setMenuHeight("250px");
      document.body.style.overflow = "hidden";
    } else {
      setMenuHeight("0px");
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="relative lg:w-[1000px] md:w-[768px] h-[72px] flex items-center justify-between mx-auto z-20">
      {/* Logo Section */}
      <div className="mx-6 text-4xl font-bold text-black lg:block md:w-[150px]">
        <img src={logo} alt="logo" />
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden mx-6">
        <button onClick={toggleMenu}>
          {isOpen ? <RiCloseLine size={35} /> : <IoMdMenu size={35} />}
        </button>
      </div>

      {/* Desktop Links Section */}
      <div className="w-[270px] h-[16px] lg:space-x-8 md:space-x-4 lg:text-lg md:text-[15px] text-black font-bold md:block hidden">
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

      {/* Desktop Button Section */}
      <div className="md:block hidden">
        <button className="bg-black text-white font-bold py-2 px-6 rounded hover:text-black hover:bg-gray-300">
          GET AN INVITE
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        style={{
          height: menuHeight,
          transition: "height 200ms ease-in-out",
          overflow: "hidden",
        }}
        className="absolute top-[72px] left-0 right-0 bg-white text-center shadow-md lg:hidden"
      >
        <ul className="space-y-4 py-4 text-black">
          <li>
            <Link
              to="/home"
              className="text-lg font-bold hover:text-gray-500"
              onClick={toggleMenu}
            >
              HOME
            </Link>
          </li>

          <li>
            <Link
              to="/stories"
              className="text-lg font-bold hover:text-gray-500"
              onClick={toggleMenu}
            >
              STORIES
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className="text-lg font-bold hover:text-gray-500"
              onClick={toggleMenu}
            >
              FEATURES
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="text-lg font-bold hover:text-gray-500"
              onClick={toggleMenu}
            >
              PRICING
            </Link>
          </li>
          <li>
            <button className="bg-black text-white font-bold py-2 px-6 rounded hover:text-black hover:bg-gray-300">
              GET AN INVITE
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
