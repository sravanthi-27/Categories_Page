import React from "react";
import ArrowIcon from "../assets/ArrowIcon.svg";

function UpdatesSection() {
  return (
    <div className="mt-[90px] flex justify-center">
      {/* === DESKTOP VERSION === */}
      <div className="hidden md:flex w-[1360px] p-[39px_71px] items-center gap-[253px] rounded-[40px] bg-[#F3D0A1]">
        {/* Text section */}
        <div className="flex flex-col flex-1">
          <h3 className="self-stretch text-black font-montserrat text-[24px] font-semibold leading-normal">
            Gentle Updates, Just for You
          </h3>
          <p className="self-stretch text-[#5D5D5D] font-montserrat text-[16px] font-medium leading-normal mt-2">
            We only send what soothes.<br />
            Get notified about new services and spaces you'll love.
          </p>
        </div>

        {/* Email input section */}
        <div className="flex flex-1 items-center gap-[10px]">
          <div className="flex p-[15px_33px] justify-center items-center gap-[10px] flex-1 rounded-[40px] bg-white">
            <span className="text-black font-montserrat text-[16px] font-medium leading-normal flex-1">
              Your email address
            </span>
          </div>
          {/* Arrow icon button */}
          <button className="flex p-4 justify-center items-center gap-[10px] rounded-full bg-black">
            <img
              src={ArrowIcon}
              alt="Subscribe"
              className="w-[14px] h-[16.333px]"
              style={{ strokeWidth: "2.333px", stroke: "#FFF" }}
            />
          </button>
        </div>
      </div>

      {/* === MOBILE VERSION === */}
      <div className="flex md:hidden w-[570px] p-[39px_16px] flex-col justify-center items-start gap-[20px] rounded-[40px] bg-[#F3D0A1]">
        {/* Text */}
        <h3 className="self-stretch text-black font-montserrat text-[20px] font-semibold leading-normal">
          Gentle Updates, Just for You
        </h3>
        <p className="self-stretch text-[#5D5D5D] font-montserrat text-[14px] font-medium leading-normal">
          We only send what soothes.<br />
          Get notified about new services and spaces you'll love.
        </p>

        {/* Email input */}
        <div className="flex w-full items-center gap-[10px]">
          <div className="flex p-[15px_33px] justify-center items-center gap-[10px] flex-1 rounded-[40px] bg-white">
            <span className="flex-1 text-black font-montserrat text-[16px] font-medium leading-normal">
              Enter your email
            </span>
          </div>
          <button className="flex p-[10px] justify-center items-center rounded-full bg-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
            >
              <path
                d="M14.959 6.92007L9.35898 12.5201M14.959 6.92007L9.35898 1.32007M14.959 6.92007L1.89232 6.92007"
                stroke="white"
                strokeWidth="1.86667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdatesSection;
