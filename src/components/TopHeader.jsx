import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const TopHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between bg-black h-10 sm:h-12 px-2 sm:px-4 md:px-6 lg:px-10 xl:px-16 z-[51]">
      {/* Contact Info - Hidden on very small screens, shown on sm and up */}
      <div className="hidden sm:flex items-center space-x-4 md:space-x-4 text-white text-xs sm:text-sm font-semibold">
        <FaPhoneAlt className="text-white" />
  <span>+91-9810244624</span>
  <span className="opacity-50 hidden md:inline">|</span>
  <span className="hidden md:inline">Landline: 011-41584342</span>
  <span className="opacity-50 hidden md:inline">|</span>
  <FaEnvelope className="text-white text-xs sm:text-sm hidden md:inline" />
  <span className="hidden lg:inline">
    <a href="mailto:info@srsb.com" className="hover:underline">info@srsb.com</a>
    <span className="mx-2">|</span>
    <a href="mailto:srsb.barcode@gmail.com" className="hover:underline">srsb.barcode@gmail.com</a>
  </span>
      </div>
      
      {/* Mobile Contact Info - Only phone number on very small screens */}
      <div className="sm:hidden flex items-center space-x-2 text-white text-xs font-semibold">
        <FaPhoneAlt className="text-white" />
        <span>+91-9810244624</span>
      </div>
      
      {/* Social Media Icons */}
      <div className="flex space-x-1 sm:space-x-2 z-10">
        <a 
          href="#" 
          className="w-6 h-6 sm:w-8 sm:h-8 rounded border border-white bg-white flex items-center justify-center text-black text-lg hover:bg-gray-100 transition-colors"
          aria-label="Facebook"
        >
          <FaFacebookF className="text-black" />
        </a>
        <a 
          href="#" 
          className="w-6 h-6 sm:w-8 sm:h-8 rounded border border-white bg-white flex items-center justify-center text-black text-lg hover:bg-gray-100 transition-colors"
          aria-label="Instagram"
        >
          <FaInstagram className="text-black" />
        </a>
        <a 
          href="#" 
          className="w-6 h-6 sm:w-8 sm:h-8 rounded border border-white bg-white flex items-center justify-center text-black text-lg hover:bg-gray-100 transition-colors"
          aria-label="YouTube"
        >
          <FaYoutube className="text-black" />
        </a>
        <a 
          href="#" 
          className="w-6 h-6 sm:w-8 sm:h-8 rounded border border-white bg-white flex items-center justify-center text-black text-lg hover:bg-gray-100 transition-colors"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-black" />
        </a>
      </div>
      
      {/* Decorative Triangle - Hidden on mobile */}
      <div 
        className="absolute top-0 right-0 h-10 sm:h-12 w-16 sm:w-24 bg-white hidden sm:block" 
        style={{clipPath: 'polygon(100% 0, 0 100%, 100% 100%)'}}
      ></div>
    </div>
  );
};

export default TopHeader;
