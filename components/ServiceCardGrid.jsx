import React from "react";
import locationIcon from "../assets/mdi_location.svg";

// Import images
import img1 from "../assets/The Rusty Spur Salon.jpg";
import img2 from "../assets/The Gilded Rose.jpg";
import img3 from "../assets/The Velvet Lounge.jpg";
import img4 from "../assets/The Golden Oasis.jpg";
import img5 from "../assets/Dusty Trails.jpg";
import img6 from "../assets/Cactus Bloom.jpg";
import img7 from "../assets/Silver Creek Tavern.jpg";
import img8 from "../assets/Whiskey Hollow.jpg";
import img9 from "../assets/Wild West Hideout.jpg";
import img10 from "../assets/Pine Ridge.jpg";
import img11 from "../assets/Grit & Grain.jpg";
import img12 from "../assets/Saddleback Pub.jpg";
import img13 from "../assets/Frontier Stop.jpg";
import img14 from "../assets/Coyote Corner.jpg";
import img15 from "../assets/Lone Star Lounge.jpg";
import img16 from "../assets/Rusty Wagon.jpg";
import img17 from "../assets/Mavericks Nook.jpg";
import img18 from "../assets/Trailblazers Retreat.jpg";
import img19 from "../assets/Boulder Creek.jpg";
import img20 from "../assets/Ranch House.jpg";

// Card data with unique titles
const data = [
  { title: "Hair Treatments & Salons", subtitle: "The Rusty Spur Salon", location: "Sector 21, Gurugram, India", img: img1 },
  { title: "Hair Treatments & Salons", subtitle: "The Gilded Rose", location: "Sector 21, Gurugram, India", img: img2 },
  { title: "Hair Treatments & Salons", subtitle: "The Velvet Lounge", location: "Sector 21, Gurugram, India", img: img3 },
  { title: "Hair Treatments & Salons", subtitle: "The Golden Oasis", location: "Sector 21, Gurugram, India", img: img4 },
  { title: "Hair Treatments & Salons", subtitle: "Dusty Trails", location: "Sector 21, Gurugram, India", img: img5 },
  { title: "Hair Treatments & Salons", subtitle: "Cactus Bloom", location: "Sector 21, Gurugram, India", img: img6 },
  { title: "Hair Treatments & Salons", subtitle: "Silver Creek Tavern", location: "Sector 21, Gurugram, India", img: img7 },
  { title: "Hair Treatments & Salons", subtitle: "Whiskey Hollow", location: "Sector 21, Gurugram, India", img: img8 },
  { title: "Hair Treatments & Salons", subtitle: "Wild West Hideout", location: "Sector 21, Gurugram, India", img: img9 },
  { title: "Hair Treatments & Salons", subtitle: "Pine Ridge", location: "Sector 21, Gurugram, India", img: img10 },
  { title: "Hair Treatments & Salons", subtitle: "Grit & Grain", location: "Sector 21, Gurugram, India", img: img11 },
  { title: "Hair Treatments & Salons", subtitle: "Saddleback Pub", location: "Sector 21, Gurugram, India", img: img12 },
  { title: "Hair Treatments & Salons", subtitle: "Frontier Stop", location: "Sector 21, Gurugram, India", img: img13 },
  { title: "Hair Treatments & Salons", subtitle: "Coyote Corner", location: "Sector 21, Gurugram, India", img: img14 },
  { title: "Hair Treatments & Salons", subtitle: "Lone Star Lounge", location: "Sector 21, Gurugram, India", img: img15 },
  { title: "Hair Treatments & Salons", subtitle: "Rusty Wagon", location: "Sector 21, Gurugram, India", img: img16 },
  { title: "Hair Treatments & Salons", subtitle: "Maverick's Nook", location: "Sector 21, Gurugram, India", img: img17 },
  { title: "Hair Treatments & Salons", subtitle: "Trailblazer's Retreat", location: "Sector 21, Gurugram, India", img: img18 },
  { title: "Hair Treatments & Salons", subtitle: "Boulder Creek", location: "Sector 21, Gurugram, India", img: img19 },
  { title: "Hair Treatments & Salons", subtitle: "Ranch House", location: "Sector 21, Gurugram, India", img: img20 },
];

function ServiceCardGrid() {
  return (
    <section className="w-full bg-white pt-[45.75px] pb-[50px]">
      {/* Breadcrumb */}
      <div className="container mx-auto px-[85px] mb-[37px]">
        <p className="text-[#666] font-montserrat text-[14px] font-medium leading-normal">
          Skin, Hair & Beauty / Hair Treatments & Salons
        </p>
      </div>

      {/* Grid Container */}
      <div className="container mx-auto px-[80px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[17.97px]">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col w-[305px] h-[400px] p-[16.256px_17.967px] rounded-[17.111px] bg-white shadow-[0_3.422px_15.999px_rgba(0,0,0,0.10)] transform transition duration-300 hover:scale-[1.03] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
            >
              {/* Image */}
              <div
                className="h-[273.778px] w-full rounded-t-[17.111px] rounded-b-[3.422px] bg-cover bg-center"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>

              {/* Title */}
              <p className="text-[#414141] font-montserrat text-[14px] font-medium leading-[125%] truncate mt-[7px]">
                {item.title}
              </p>
              <p className="text-[#210303] font-montserrat text-[20px]  font-bold leading-[125%] truncate mt-[7px]">
                {item.subtitle}
              </p>

              {/* Location */}
              <div className="flex items-center gap-[8.556px] mt-3">
                <img
                  src={locationIcon}
                  alt="location"
                  className="w-[14px] h-[14px]"
                  style={{
                    filter:
                      "invert(28%) sepia(0%) saturate(0%) hue-rotate(181deg) brightness(95%) contrast(90%)",
                  }}
                />
                <span className="text-ellipsis overflow-hidden whitespace-nowrap text-[#4A4A4A] font-montserrat text-[13.689px] font-normal leading-[125%]">
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-[35.5px] flex justify-center">
          <button className="inline-flex h-[60px] px-[44px] py-[20px] justify-center items-center gap-[10px] rounded-[10px] bg-[#121212] text-white font-montserrat text-[20px] font-medium leading-[110%] hover:bg-[#333] transition-colors">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServiceCardGrid;
