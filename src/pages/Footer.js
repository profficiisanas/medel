// src/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer bg-white p-4 bottom-0 left-0 w-full z-20 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-100">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center md:space-x-4">
          <button onClick={() => navigate('/')} className="text-black font-semibold hover:text-gray-600 mb-2 md:mb-0" style={{ fontFamily: 'Didot', textTransform: 'uppercase' }}>Accueil</button>
          <button onClick={() => navigate('/men')} className="text-black font-semibold hover:text-gray-600 mb-2 md:mb-0" style={{ fontFamily: 'Didot', textTransform: 'uppercase' }}>Hommes</button>
          <button onClick={() => navigate('/women')} className="text-black font-semibold hover:text-gray-600 mb-2 md:mb-0" style={{ fontFamily: 'Didot', textTransform: 'uppercase' }}>Femmes</button>
          <button onClick={() => navigate('/services')} className="text-black font-semibold hover:text-gray-600 mb-2 md:mb-0" style={{ fontFamily: 'Didot', textTransform: 'uppercase' }}>nos services</button>
          <button onClick={() => navigate('/contact')} className="text-black font-semibold hover:text-gray-600 mb-2 md:mb-0" style={{ fontFamily: 'Didot', textTransform: 'uppercase' }}>Contactez-nous</button>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
            <FaInstagram className="text-2xl" />
          </a>
        </div>
        <div className="flex flex-col mt-4 md:mt-0 md:ml-4">
          <div className="flex items-center text-black hover:text-gray-600 mb-2">
            <FaEnvelope className="text-xl mr-2" />
            <a href="mailto:contact@luminis.com" className="text-black font-semibold" style={{ fontFamily: 'Didot', textTransform: 'uppercase' }}>contact@luminis.com</a>
          </div>
          <div className="flex items-center text-black hover:text-gray-600 mb-2">
            <FaPhone className="text-xl mr-2" />
            <span className="text-black font-semibold" style={{ fontFamily: 'Didot', textTransform: 'uppercase' }}>+1 (234) 567-890</span>
          </div>
          <div className="flex items-center text-black hover:text-gray-600">
            <span className="text-black font-semibold" style={{ fontFamily: 'Didot', textTransform: 'uppercase' }}>1234 Avenue St, City, Country</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
