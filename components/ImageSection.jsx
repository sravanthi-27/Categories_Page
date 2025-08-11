import React from 'react';
import image1 from '../assets/a2f934c83d5fdb2bda690c36ef015564d122ea96.png'; 
import image2 from '../assets/8c9fa45609ace4f02eb036c043ba06d353abc790.png';
import image3 from '../assets/8c9fa45609ace4f02eb036c043ba06d353abc790.png';

const ImagesSection = () => {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:block relative bg-white w-full" style={{ height: '330px', margin: '40px 0px' }}>
        <div 
          className="absolute left-0 flex gap-[22px] items-center"
          style={{
            top: '0',
            fontFamily: '"Sukhumvit Set", "Kanit", sans-serif',
            width: '100%',
            maxWidth: '1440px',
            padding: '0 80px',
            boxSizing: 'border-box',
            margin: '0 auto'
          }}
        >
          {/* Image 1 - Wide Banner */}
          <div 
            className="flex-shrink-0 relative transition-all duration-300 ease-in-out hover:scale-105 hover:z-10"
            style={{
              width: '645px',
              height: '305.455px',
              aspectRatio: '33 / 16',
              backgroundImage: `url(${image1})`,
              backgroundColor: '#f5f5f5',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0',
              transformOrigin: 'center center'
            }}
          />
          
          {/* Image 2 - Square */}
          <div 
            className="flex-shrink-0 relative transition-all duration-300 ease-in-out hover:scale-105 hover:z-10"
            style={{
              width: '325px',
              height: '305px',
              aspectRatio: '1 / 1',
              backgroundImage: `url(${image2})`,
              backgroundColor: '#f5f5f5',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0',
              transformOrigin: 'center center'
            }}
          />
          
          {/* Image 3 - Square */}
          <div 
            className="flex-shrink-0 relative transition-all duration-300 ease-in-out hover:scale-105 hover:z-10"
            style={{
              width: '325px',
              height: '305px',
              aspectRatio: '1 / 1',
              backgroundImage: `url(${image3})`,
              backgroundColor: '#f5f5f5',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0',
              transformOrigin: 'center center'
            }}
          />
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden pl-[10px] pr-[30px] mb-10">
        <div className="space-y-4">
          <div 
            className="w-full h-64 rounded-3xl overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02]"
            style={{
              width: '100%',
              height: '300px',
              backgroundImage: `url(${image1})`,
              backgroundColor: '#f5f5f5',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              borderRadius: '20px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0',
              transformOrigin: 'center center'
            }}
          />
          
          <div className="flex gap-5">
            {[image2, image3].map((img, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 relative transition-all duration-300 ease-in-out hover:scale-[1.03]"
                style={{
                  width: '48%',
                  height: '300px',
                  backgroundImage: `url(${img})`,
                  backgroundColor: '#f5f5f5',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  borderRadius: '25px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  border: '1px solid #e0e0e0',
                  transformOrigin: 'center center'
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