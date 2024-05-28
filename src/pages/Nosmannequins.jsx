import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import leftImage from '../assets/img2.jpg';
import rightImage from '../assets/imp1.jpg';

const ImagePage = ({ leftImageSrc, rightImageSrc }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200, 
    });
  }, []);

  return (
    <div className="flex flex-col sm:flex-row sm:p-0 p-5 lg:p-20">
      <Link to="/women" className="w-full sm:w-1/2 relative mb-4 sm:mr-4 p-6 sm:p-0" data-aos="fade-right">
        <img src={leftImageSrc} alt="Left" className="w-full h-auto sm:h-full object-cover rounded" style={{ maxHeight: '70vh' }} />
        <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="pt-80 hover:text-blue-700 text-white font-bold py-2 px-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" data-aos="fade-up" data-aos-delay="1200">FEMMES</h1>
        </div>
      </Link>
      <Link to="/men" className="w-full sm:w-1/2 relative mb-4 sm:mr-4 p-6 sm:p-0" data-aos="fade-left">
        <img src={rightImageSrc} alt="Right" className="w-full h-auto sm:h-full object-cover rounded" style={{ maxHeight: '70vh' }} />
        <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="pt-80 hover:text-blue-700 text-white font-bold py-2 px-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" data-aos="fade-up" data-aos-delay="1200">HOMMES</h1>
        </div>
      </Link>
    </div>
  );
};

const Nosmannequins = () => {
  return <ImagePage leftImageSrc={leftImage} rightImageSrc={rightImage} />;
};

export default Nosmannequins;
