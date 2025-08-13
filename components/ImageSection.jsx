import React from 'react';
import image1 from '../assets/a2f934c83d5fdb2bda690c36ef015564d122ea96.png'; 
import image2 from '../assets/8c9fa45609ace4f02eb036c043ba06d353abc790.png';
import image3 from '../assets/8c9fa45609ace4f02eb036c043ba06d353abc790.png';

const ImagesSection = () => {
  return (
    <>
      {/* Desktop Version - All 3 images in one row */}
      <div className="hidden md:block relative bg-white w-full" style={{ height: '305.455px', margin: '40px 0' }}>
        <div 
          className="absolute left-0 flex gap-[22px]"
          style={{
            top: '0',
            fontFamily: '"Sukhumvit Set", "Kanit", sans-serif',
            width: '100%',
            maxWidth: '1280px',
            padding: '0 120px',
            boxSizing: 'border-box'
          }}
        >
          {/* Image 1 - Wide Banner */}
          <div
            className="flex-shrink-0 relative"
            style={{
              width: '630px',
              height: '305.455px',
              aspectRatio: '33 / 16',
              backgroundImage: `url(${image1})`,
              backgroundColor: '#f5f5f5',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0'
            }}
          />
          
          {/* Image 2 - Square */}
          <div
            className="flex-shrink-0 relative"
            style={{
              width: '305px',
              height: '305px',
              aspectRatio: '1 / 1',
              backgroundImage: `url(${image2})`,
              backgroundColor: '#f5f5f5',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0'
            }}
          />
          
          {/* Image 3 - Square */}
          <div
            className="flex-shrink-0 relative"
            style={{
              width: '305px',
              height: '305px',
              aspectRatio: '1 / 1',
              backgroundImage: `url(${image3})`,
              backgroundColor: '#f5f5f5',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0'
            }}
          />
        </div>
      </div>

      {/* Mobile Version - Stacked layout */}
<div className="block md:hidden pl-[10px] pr-[30px] mb-10">
  <div className="space-y-4">
    {/* First large image */}
    <div
      className="w-full aspect-[33/16] rounded-3xl overflow-hidden shadow-md border border-gray-200"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundColor: '#f5f5f5',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}
    />

    {/* Two side-by-side images */}
    <div className="flex gap-5">
      {[image2, image3].map((img, idx) => (
        <div
          key={idx}
          className="flex-shrink-0 w-1/2 aspect-square rounded-3xl overflow-hidden shadow-md border border-gray-200"
          style={{
            backgroundImage: `url(${img})`,
            backgroundColor: '#f5f5f5',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            borderRadius: '25px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        />
      ))}
    </div>
  </div>
</div>
    </>
  );
};

export default ImagesSection;
