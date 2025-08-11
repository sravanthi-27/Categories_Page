import React from "react";
import FilterIcon from "../assets/rivet-icons_filter.svg";
import CategoriesIcon from "../assets/iconamoon_category-light.svg";
import DistanceIcon from "../assets/mdi_map-marker-distance.svg";
import ArrowIcon from "../assets/weui_arrow-filled (1).svg";

function ServiceProviders() {
  return (
    <div className="bg-white w-full overflow-visible">
      <div className="max-w-7xl mx-[50px] px-6 sm:px-6 lg:px-8 pt-[130px] pb-[20px] relative">
        {/* Title Section */}
        <div className="mb-8">
          <h2 className="font-montserrat text-3xl sm:text-4xl font-semibold text-black leading-tight">
            SERVICE PROVIDERS{" "}
            <span className="font-normal">- Hair Treatments & Salons</span>
          </h2>
        </div>

        {/* Filters Section */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          {/* Filters Button */}
          <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 transition-colors">
            <img src={FilterIcon} alt="Filters" className="w-5 h-5" />
            <span>Filters</span>
          </button>

          {/* Categories Dropdown */}
          <div className="flex-1 sm:flex-none sm:w-[280px] relative">
            <div className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 bg-white relative">
              <img src={CategoriesIcon} alt="Categories" className="w-5 h-5" />
              <select
                className="w-full bg-transparent outline-none text-gray-600 font-medium appearance-none pr-10 z-10 relative"
              >
                <option>Categories</option>
                <option>Hair Treatments</option>
                <option>Salons</option>
              </select>
              {/* Arrow Icon */}
              <img
                src={ArrowIcon}
                alt="Arrow"
                className="w-[20px] h-[18px] absolute right-4 pointer-events-none z-20"
                style={{
                  top: "50%",
                  transform: "translateY(-50%) rotate(90deg)",
                  filter: "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0) contrast(100%)",
                }}
              />
            </div>
          </div>

          {/* Distance Dropdown */}
          <div className="flex-1 sm:flex-none sm:w-[200px] relative">
            <div className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 bg-white relative">
              <img src={DistanceIcon} alt="Distance" className="w-5 h-5" />
              <select
                className="w-full bg-transparent outline-none text-gray-600 font-medium appearance-none pr-10 z-10 relative"
              >
                <option>Distance</option>
                <option>Nearby (0 - 5km)</option>
                <option>5 - 10km</option>
                <option>10 -25km</option>
                <option>25 - 50km</option>
              </select>
              {/* Arrow Icon */}
              <img
                src={ArrowIcon}
                alt="Arrow"
                className="w-[25px] h-[18px] absolute right-4 pointer-events-none z-20"
                style={{
                  top: "50%",
                  transform: "translateY(-50%) rotate(90deg)",
                  filter: "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0) contrast(100%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="absolute left-0 right-0 h-px bg-gray-300"></div>
      </div>
    </div>
  );
}

export default ServiceProviders;