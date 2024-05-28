import React, { useEffect } from 'react';
import backgroundVideo from '../assets/model.mp4'; 
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'; 

export default function Hero() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video data-aos="zoom-out" autoPlay loop muted playsInline className="absolute inset-0 object-cover w-full h-full z-0">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full  z-10 flex flex-col items-center justify-center">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white z-10 text-center px-4 sm:px-8 lg:px-0"
          data-aos="fade-up"
          data-aos-delay="500" 
          style={{ fontFamily: 'Didot' }}
        >
          BIENVENUE CHEZ LUMINIS
        </h1>
        <div className="flex flex-col lg:flex-row">
          <Link to="/rabat"> 
            <button
              data-aos="fade-right"
              data-aos-delay="1000" 
              className="p-2 lg:p-3 mr-4 mb-4 lg:mb-0 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl transition-all duration-300 ease-in-out focus:outline-none  text-white"
              style={{ fontFamily: 'Didot', transform: 'scale(1)', fontSize: '2.5rem'}}
              onMouseEnter={(e) => e.target.style.color = '#8A2BE2'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.06)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              RABAT
            </button>
          </Link>
          <Link to="/marseille"> 
            <button
              data-aos="fade-left"
              data-aos-delay="1200" 
              className="p-2 lg:p-3 mr-4 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl transition-all duration-300 ease-in-out focus:outline-none  text-white"
              style={{ fontFamily: 'Didot', transform: 'scale(1)', fontSize: '2.5rem' }}
              onMouseEnter={(e) => e.target.style.color = '#8A2BE2'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.06)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              MARSEILLE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
