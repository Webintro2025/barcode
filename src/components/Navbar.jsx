
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { labelServicesData } from '@/lib/services';
import { FaWhatsapp } from 'react-icons/fa';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  // Services list with slugs from labelServicesData
  const servicesList = [
    { title: 'Barcode Generation & Label', slug: labelServicesData.barcodeGenerationLabel.slug },
  { title: 'Mobile accessories & IMEI', slug: labelServicesData.mobileAccessoriesIMEI.slug },
    { title: 'Product Labels & Hologram Labels', slug: labelServicesData.productHologramLabels.slug },
    { title: 'Label Printing', slug: labelServicesData.labelPrinting.slug },
  { title: 'Footwear Labels & Shop Label & Cartoon', slug: labelServicesData.footwearShopCartoon.slug },
    { title: 'Garment Labels & Woven Labels &Taffeta Label', slug: labelServicesData.garmentWovenTaffeta.slug },
    { title: 'RFID labels & RFID solutions', slug: labelServicesData.rfidLabelsSolutions.slug },
    { title: 'Product labels & Transparent labels', slug: labelServicesData.productTransparentLabels.slug },
    { title: 'Bakery labels, Foods product labels & Beverage labels', slug: labelServicesData.bakeryFoodBeverageLabels.slug },
    { title: 'Voltage & Transformer labels &Cable labels & Hologram labels', slug: labelServicesData.voltageTransformerCableHologram.slug },
    { title: 'Software Label', slug: labelServicesData.softwareLabel.slug },
  ];

  return (
    <nav className="fixed top-10 sm:top-12 left-0 right-0 z-50 bg-white shadow-lg shadow-gray-400">
      <div className="flex items-center justify-between px-4 sm:px-5 lg:px-8 py-4">
        {/* Logo/Brand */}
        <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent truncate">
          S.R.S.B. Barcode Solutions
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-base font-semibold">
          <li><Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link></li>
          <li><Link href="/about" className="hover:text-indigo-600 transition-colors">About</Link></li>
          <li className="relative">
            <button 
              className="hover:text-indigo-600 transition-colors flex items-center gap-1"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              Services
              <svg className="w-4 h-4 text-gray-500 group-hover:text-indigo-600 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {/* Services Dropdown */}
            <div 
              className={`absolute top-full left-0 mt-1 w-60 bg-white rounded-lg shadow-xl border border-gray-100 z-50 transition-all duration-300 ${
                isServicesDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
              }`}
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <div className="py-2">
                {servicesList.map((service, index) => (
                  <Link
                    key={index}
                    href={`/service/${service.slug}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200 border-l-3 border-transparent hover:border-indigo-500"
                    onClick={handleNavClick}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li><Link href="/contact" className="hover:text-indigo-600 transition-colors">Contact Us</Link></li>
        </ul>

        {/* Desktop CTA Button */}
        <a
          href="https://wa.me/919810244624"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 ml-6 rounded-md bg-gradient-to-r from-green-500 to-green-700 px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base text-white font-semibold hover:from-green-600 hover:to-green-800 transition-colors"
        >
          <FaWhatsapp className="text-xl" />
          WhatsApp me
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
          <ul className="space-y-2">
            <li>
              <Link 
                href="/" 
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
                onClick={handleNavClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
                onClick={handleNavClick}
              >
                About
              </Link>
            </li>
            <li>
              <div className="relative">
                <button 
                  className="w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
                  onClick={toggleServicesDropdown}
                >
                  Services
                </button>
                {/* Mobile Services Dropdown */}
                {isServicesDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-1 bg-gray-50 rounded-md p-2">
                    {servicesList.map((service, index) => (
                      <Link
                        key={index}
                        href={`/service/${service.slug}`}
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 rounded-md transition-all duration-200"
                        onClick={handleNavClick}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
                onClick={handleNavClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          
          {/* Mobile CTA Button */}
          <div className="mt-4 pb-2">
            <a
              href="https://wa.me/919810244624"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-green-500 to-green-700 px-4 py-3 text-base text-white font-semibold hover:from-green-600 hover:to-green-800 transition-colors"
              onClick={handleNavClick}
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp me: 9810244624
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;