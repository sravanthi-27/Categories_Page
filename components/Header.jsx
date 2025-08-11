import React, { useState } from "react";
import LogoLeaf from "../assets/Group 1000001874.svg";
import IconArrow from "../assets/weui_arrow-filled (1).svg";
import IconLocation from "../assets/mdi_location.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#121212] shadow-[0_15px_14.6px_rgba(0,0,0,0.05)] border-b border-transparent backdrop-blur-[20px] z-50">
      <div className="hidden md:flex items-center justify-between w-full h-[90px] px-4">
        <div className="flex items-center gap-2">
          <img
            src={LogoLeaf}
            alt="Mor-Selv Logo"
            className="w-[63px] h-[29px] object-contain"
          />
          <span className="text-[#FECD8C] font-montserrat text-[18px] font-medium">
            Mor-Selv<sup className="text-xs">®</sup>
          </span>
        </div>

        <nav className="flex items-center gap-[40px]">
          <span className="text-white text-[16px] font-montserrat cursor-pointer">Home</span>
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="text-white text-[16px] font-montserrat">Discover services</span>
            <img
              src={IconArrow}
              alt="Arrow Icon"
              className="w-[14px] h-[14px] object-contain rotate-90"
            />
          </div>
          <span className="text-white text-[16px] font-montserrat cursor-pointer">Deals & offers</span>
          <span className="text-white text-[16px] font-montserrat cursor-pointer">Contact</span>
        </nav>

        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={IconLocation}
            alt="Location Icon"
            className="w-[20px] h-[20px] object-contain"
          />
          <span className="text-white font-montserrat text-[16px] font-medium">
            Gurugram, India
          </span>
        </div>
      </div>

      <div className="md:hidden flex items-center justify-between w-full h-[90px] px-4">
        <div className="flex items-center gap-2">
          <img
            src={LogoLeaf}
            alt="Mor-Selv Logo"
            className="w-[63px] h-[29px] object-contain"
          />
          <span className="text-[#FECD8C] font-montserrat text-[18px] font-medium">
            Mor-Selv<sup className="text-xs">®</sup>
          </span>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27.104"
            height="27.104"
            viewBox="0 0 28 29"
            fill="none"
          >
            <path
              d="M4.31641 7.72534H22.9504M4.31641 14.5013H22.9504M4.31641 21.2773H22.9504"
              stroke="#F4F4F4"
              strokeWidth="1.694"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-[90px] left-0 w-full bg-white px-6 py-4 space-y-4">
          <span className="block text-[#121212] text-[16px] font-montserrat cursor-pointer font-medium py-2">
            Home
          </span>

          <div className="flex items-center gap-2 cursor-pointer py-2">
            <span className="text-[#121212] text-[16px] font-montserrat font-medium">
              Discover services
            </span>
            <div className="w-[14px] h-[14px] flex items-center justify-center">
              <img
                src={IconArrow}
                alt="Arrow Icon"
                className="w-full h-[18px] object-contain invert"
              />
            </div>
          </div>

          <span className="block text-[#121212] text-[16px] font-montserrat cursor-pointer font-medium py-2">
            Deals & offers
          </span>
          <span className="block text-[#121212] text-[16px] font-montserrat cursor-pointer font-medium py-2">
            Contact
          </span>

          <div className="flex items-center gap-2 cursor-pointer py-2">
            <img
              src={IconLocation}
              alt="Location Icon"
              className="w-[20px] h-[20px] object-contain invert"
            />
            <span className="text-[#121212] font-montserrat text-[16px] font-medium">
              Gurugram, India
            </span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
