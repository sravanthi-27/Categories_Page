import React, { useState } from "react";
import FilterIcon from "../assets/rivet-icons_filter.svg";
import CategoriesIcon from "../assets/iconamoon_category-light.svg";
import DistanceIcon from "../assets/mdi_map-marker-distance.svg";
import ArrowIcon from "../assets/weui_arrow-filled (1).svg";

function ServiceProviders() {
  const [showCategories, setShowCategories] = useState(false);
  const [showDistance, setShowDistance] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDistance, setSelectedDistance] = useState("Distance");
  const [openNested, setOpenNested] = useState(null);

  const categories = [
     {
      name: "Skin, hair & beauty",
      subcategories: [
        "Skin care clinic and dermatologists",
        "Hair Treatments & Salons",
        "Beauty Therapists & Makeup Artists",
        "Clean Beauty Products and DIY Tips"
      ]
    },
    {
      name: "Body Therapies",
      subcategories: [
        "Spa & Massage Therapists",
        "Physiotherapy & Pain Relief",
        "Ayurveda & Traditional Therapies",
        "Postpartum Body Care"
      ]
    },
    {
      name: "Fitness & Body Movement",
      subcategories: [
        "Personal Trainers & Gym Programs",
        "Yoga & Pilates Instructors",
        "Dance & Zumba classes",
        "Pre/Postnatal Fitness Programs"
      ]
    },
    {
      name: "Diet & Weight Management",
      subcategories: [
        "Nutritionists & Dieticians",
        "Weight Loss Programs",
        "PCOS/Thyroid Diet Plans",
        "Healthy Recipes & Meal Planning"
      ]
    },
    {
      name: "Health & Wellness",
      subcategories: [
        "Gynecologists & Intimate Health Clinics",
        "Hormonal Health Experts",
        "Preventive Screenings & Diagnostics",
        "Sexual Wellness & Hygiene Products"
      ]
    },
    {
      name: "Mental & Emotional Wellness",
      subcategories: [
        "Psychologists & Therapists",
        "Stress, Anxiety & Burnout Coaching",
        "Support Groups (e.g., postpartum, grief)",
        "Mindfulness & Meditation Sessions"
      ]
    },
    {
      name: "Career & Money Management",
      subcategories: [
        "Career Coaching & Mentorship",
        "Resume Help & Job Search Support",
        "Personal Finance & Budgeting Tools",
        "Small Business & Startup Support"
      ]
    },
    {
      name: "Travel & Relaxation",
      subcategories: [
        "Solo Travel for Women",
        "Wellness Retreats & Staycations",
        "Safe Travel Planning & Tips",
        "Travel Insurance & Emergency Help"
      ]
    },
    {
      name: "Friend, Fun & Community",
      subcategories: [
        "Local Meetups & Women's Circles",
        "Book Clubs, Hobby Groups & Events",
        "Volunteering & Social Impact",
        "Online Communities & Safe Forums"
      ]
    },
    {
      name: "Legal Services",
      subcategories: [
        "Women's Rights & Protection Lawyers",
        "Divorce, Custody & Property Legal Help",
        "Workplace Harassment Advisors",
        "Online Legal Consultations"
      ]
    },
    {
      name: "Parenting & Childcare",
      subcategories: [
        "Parenting Coaches & Workshops",
        "Pediatricians & Child Therapists",
        "Nanny & Babysitting Services",
        "Schooling & Learning Resources"
      ]
    },
    {
      name: "Other Services",
      subcategories: [
        "Emergency Helplines (Mental, Medical, Legal)",
        "Domestic Help & Elder Care",
        "Safe Commute & Cab Services",
        "Women-Friendly Home Maintenance"
      ]
    }
  ];

  const distances = [
    "Nearby (0 - 5km)",
    "5 - 10km",
    "10 - 25km",
    "25 - 50km"
  ];

  const toggleNestedDropdown = (index) => {
    setOpenNested(openNested === index ? null : index);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowCategories(false);
    setOpenNested(null);
  };

  return (
    <div className="bg-white w-full overflow-visible">
      {/* DESKTOP */}
      <div className="hidden sm:block">
        <div className="max-w-7xl mx-[50px] px-6 sm:px-6 lg:px-8 pt-[130px] pb-[20px] relative">
          {/* Title Section */}
          <div className="mb-8">
            <h2 className="font-montserrat text-3xl sm:text-4xl font-semibold text-black leading-tight">
              SERVICE PROVIDERS{" "}
              <span className="font-normal">
                - Hair Treatments & Salons
              </span>
            </h2>
          </div>
          {/* Filters Section */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-[18px]">
            {/* Filters Button */}
              <img src={FilterIcon} alt="Filters" className="w-5 h-5" />
              <span>Filters</span>
              <div></div>

            {/* Categories Dropdown */}
            <div className="relative" style={{ width: "380px", flexShrink: 0 }}>
              <div
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 bg-white relative cursor-pointer"
                onClick={() => {
                  setShowCategories(!showCategories);
                  setShowDistance(false);
                  setOpenNested(null);
                }}
                style={{ width: "380px" }}
              >
                <img src={CategoriesIcon} alt="Categories" className="w-5 h-5" />
                <span className="text-[#606060] font-montserrat text-[18px] font-medium">
                  Categories
                </span>
                <img
                  src={ArrowIcon}
                  alt="Arrow"
                  className="w-[20px] h-[18px] absolute right-4 transition-transform duration-200"
                  style={{
                    top: "50%",
                    transform: showCategories
                      ? "translateY(-50%) rotate(270deg)"
                      : "translateY(-50%) rotate(90deg)",
                    filter:
                      "invert(0%) sepia(0%) saturate(0%) hue-rotate(45deg) brightness(0) contrast(100%)"
                  }}
                />
              </div>

              {/* Categories Dropdown Menu */}
              {showCategories && (
                <div
                  className="absolute z-50 mt-2 bg-white rounded-lg shadow-lg border border-gray-200"
                  style={{ borderRadius: "12px", padding: "8px", width: "380px" }}
                >
                  {categories.map((category, index) => (
                    <React.Fragment key={category.name}>
                      {/* Main Category */}
                      <div
                        className={`flex items-center justify-between cursor-pointer px-4 py-3 rounded-md ${
                          openNested === index
                            ? "bg-purple-200"
                            : "hover:bg-purple-100"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (category.subcategories.length > 0) {
                            toggleNestedDropdown(index);
                          } else {
                            handleCategorySelect(category.name);
                          }
                        }}
                      >
                        <span
                          className="font-montserrat text-[16px]"
                          style={{ color: "#202020" }}
                        >
                          {category.name}
                        </span>
                        {category.subcategories.length > 0 && (
                          <img
                            src={ArrowIcon}
                            alt="Arrow"
                            className={`w-[16px] h-[14px] transition-transform duration-200 ${
                              openNested === index ? "rotate-270" : "rotate-90"
                            }`}
                            style={{
                              transform:
                                openNested === index
                                  ? "rotate(270deg)"
                                  : "rotate(90deg)",
                              filter:
                                openNested === index
                                  ? "invert(25%) sepia(75%) saturate(630%) hue-rotate(250deg) brightness(90%) contrast(85%)"
                                  : "invert(40%) sepia(10%) saturate(0%) hue-rotate(0deg) brightness(60%) contrast(80%)"
                            }}
                          />
                        )}
                      </div>

                      {/* Subcategories */}
                      {openNested === index && category.subcategories.length > 0 && (
                        <div className="bg-white">
                          {category.subcategories.map((subcat) => (
                            <div
                              key={subcat}
                              className="px-4 py-2 cursor-pointer hover:bg-purple-100 rounded-md"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCategorySelect(subcat);
                              }}
                            >
                              <span
                                className="font-montserrat text-[15px]"
                                style={{ color: "#606060" }}
                              >
                                {subcat}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Divider only under Legal Services */}
                      {category.name === "Legal Services" && (
                        <div className="h-px bg-gray-200 my-1 mx-3"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>

            {/* Distance Dropdown */}
            <div className="relative" style={{ width: "200px", flexShrink: 0 }}>
              <div
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 bg-white relative cursor-pointer"
                onClick={() => {
                  setShowDistance(!showDistance);
                  setShowCategories(false);
                  setOpenNested(null);
                }}
                style={{ width: "250px" }}
              >
                <img src={DistanceIcon} alt="Distance" className="w-10 h-5" />
                <span className="text-gray-600 font-montserrat text-[18px] font-medium">
                  {selectedDistance}
                </span>
                <img
                  src={ArrowIcon}
                  alt="Arrow"
                  className={`w-[20px] h-[18px] absolute right-4 transition-transform duration-200 ${
                    showDistance ? "rotate-270" : "rotate-90"
                  }`}
                  style={{
                    top: "50%",
                    transform: showDistance
                      ? "translateY(-50%) rotate(270deg)"
                      : "translateY(-50%) rotate(90deg)",
                    filter:
                      "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0) contrast(100%)"
                  }}
                />
              </div>

              {/* Distance Dropdown Menu */}
              {showDistance && (
                <div
                  className="absolute z-50 mt-2 bg-white rounded-lg shadow-lg border border-gray-200"
                  style={{ borderRadius: "12px", padding: "8px", width: "250px" }}
                >
                  {distances.map((distance) => (
                    <div
                      key={distance}
                      className="hover:bg-gray-50 cursor-pointer"
                      style={{ padding: "12px 16px" }}
                      onClick={() => {
                        setSelectedDistance(distance);
                        setShowDistance(false);
                      }}
                    >
                      <span className="text-gray-700 font-montserrat text-[16px]">
                        {distance}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="absolute left-0 right-0 h-px bg-gray-300"></div>
        </div>
      </div>

      {/* MOBILE */}
<div className="block sm:hidden px-4 pt-[120px] pb-4">
  {/* Title */}
  <div className="mb-6">
    <h2 className="font-montserrat text-2xl font-semibold text-black leading-tight">
      SERVICE PROVIDERS{" "}
      <span className="font-normal">- Hair Treatments & Salons</span>
    </h2>
  </div>

  {/* Filters */}
  <div className="flex items-center gap-2 mb-4">
    <img src={FilterIcon} alt="Filters" className="w-5 h-5" />
    <span className="text-gray-600 font-montserrat text-lg">Filters</span>
  </div>

  {/* Categories & Distance - Now side by side */}
  <div className="flex flex-row items-center gap-3 mb-4">
    {/* Categories Dropdown - Takes half width */}
    <div className="relative flex-1 min-w-0">
      <div
        className="flex items-center gap-2 px-4 py-3 rounded-full border border-gray-300 bg-white relative cursor-pointer"
        onClick={() => {
          setShowCategories(!showCategories);
          setShowDistance(false);
          setOpenNested(null);
        }}
      >
        <img src={CategoriesIcon} alt="Categories" className="w-5 h-5" />
        <span className="text-[#606060] font-montserrat text-base font-medium truncate">
          Categories
        </span>
        <img
          src={ArrowIcon}
          alt="Arrow"
          className="w-[16px] h-[14px] absolute right-3 transition-transform duration-200"
          style={{
            top: "50%",
            transform: showCategories
              ? "translateY(-50%) rotate(270deg)"
              : "translateY(-50%) rotate(90deg)",
            filter:
              "invert(0%) sepia(0%) saturate(0%) hue-rotate(45deg) brightness(0) contrast(100%)"
          }}
        />
      </div>

      {/* Categories Dropdown Menu */}
      {showCategories && (
        <div className="absolute z-50 mt-2 w-full max-w-[90vw] bg-white rounded-lg shadow-lg border border-gray-200">
          {categories.map((category, index) => (
            <React.Fragment key={category.name}>
              {/* Main Category */}
              <div
                className={`flex items-center justify-between cursor-pointer px-4 py-3 rounded-md ${
                  openNested === index
                    ? "bg-purple-200"
                    : "hover:bg-purple-100"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (category.subcategories.length > 0) {
                    toggleNestedDropdown(index);
                  } else {
                    handleCategorySelect(category.name);
                  }
                }}
              >
                <span
                  className="font-montserrat text-sm"
                  style={{ color: "#202020" }}
                >
                  {category.name}
                </span>
                {category.subcategories.length > 0 && (
                  <img
                    src={ArrowIcon}
                    alt="Arrow"
                    className={`w-[14px] h-[12px] transition-transform duration-200 ${
                      openNested === index ? "rotate-270" : "rotate-90"
                    }`}
                    style={{
                      transform:
                        openNested === index
                          ? "rotate(270deg)"
                          : "rotate(90deg)",
                      filter:
                        openNested === index
                          ? "invert(25%) sepia(75%) saturate(630%) hue-rotate(250deg) brightness(90%) contrast(85%)"
                          : "invert(40%) sepia(10%) saturate(0%) hue-rotate(0deg) brightness(60%) contrast(80%)"
                    }}
                  />
                )}
              </div>

              {/* Subcategories */}
              {openNested === index && category.subcategories.length > 0 && (
                <div className="bg-white">
                  {category.subcategories.map((subcat) => (
                    <div
                      key={subcat}
                      className="px-4 py-2 cursor-pointer hover:bg-purple-100 rounded-md"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCategorySelect(subcat);
                      }}
                    >
                      <span
                        className="font-montserrat text-xs"
                        style={{ color: "#606060" }}
                      >
                        {subcat}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Divider only under Legal Services */}
              {category.name === "Legal Services" && (
                <div className="h-px bg-gray-200 my-1 mx-3"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>

    {/* Distance Dropdown - Takes half width */}
    <div className="relative flex-1 min-w-0">
      <div
        className="flex items-center gap-2 px-4 py-3 rounded-full border border-gray-300 bg-white relative cursor-pointer"
        onClick={() => {
          setShowDistance(!showDistance);
          setShowCategories(false);
          setOpenNested(null);
        }}
      >
        <img src={DistanceIcon} alt="Distance" className="w-5 h-5" />
        <span className="text-gray-600 font-montserrat text-base font-medium truncate">
          {selectedDistance}
        </span>
        <img
          src={ArrowIcon}
          alt="Arrow"
          className={`w-[16px] h-[14px] absolute right-3 transition-transform duration-200 ${
            showDistance ? "rotate-270" : "rotate-90"
          }`}
          style={{
            top: "50%",
            transform: showDistance
              ? "translateY(-50%) rotate(270deg)"
              : "translateY(-50%) rotate(90deg)",
            filter:
              "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0) contrast(100%)"
          }}
        />
      </div>

      {/* Distance Dropdown Menu */}
      {showDistance && (
        <div className="absolute z-50 mt-2 w-full max-w-[90vw] bg-white rounded-lg shadow-lg border border-gray-200">
          {distances.map((distance) => (
            <div
              key={distance}
              className="hover:bg-gray-50 cursor-pointer px-4 py-3"
              onClick={() => {
                setSelectedDistance(distance);
                setShowDistance(false);
              }}
            >
              <span className="text-gray-700 font-montserrat text-sm">
                {distance}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>

  {/* Bottom Divider */}
  <div className="h-px bg-gray-300 w-full"></div>
</div>
    </div>
  );
}

export default ServiceProviders;
