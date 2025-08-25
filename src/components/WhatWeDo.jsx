"use client"
import React, { useState } from 'react';

// Helper to truncate text to N words
function truncateText(text, wordLimit) {
  const words = text.split(' ');
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
}

const services = [
    {
      id: 1,
      title: 'Barcode Gun & Cable',
      description: 'High-quality barcode scanners and durable cables for fast, reliable data capture in any environment.',
      icon: '🔫',
    },
    {
      id: 2,
  title: 'Mobile accessories & IMEI',
      description: 'IMEI and mobile labeling solutions for device tracking, compliance, and inventory management.',
      icon: '📱',
    },
    {
      id: 3,
      title: 'Product Labels & Hologram Labels',
      description: 'Custom product and hologram labels for brand protection, authentication, and attractive packaging.',
      icon: '🏷️',
    },
    {
      id: 4,
      title: 'Label Printing',
      description: 'Professional label printing services for all industries, with a variety of materials and finishes.',
      icon: '🖨️',
    },
    {
      id: 5,
  title: 'Footwear Labels & Shop Label & Cartoon',
      description: 'Specialized labels for footwear, retail shops, and custom coasters to enhance your brand.',
      icon: '👟',
    },
    {
      id: 6,
      title: 'Garment Labels & Woven Labels &Taffeta Label',
      description: 'Premium garment, woven, and taffeta labels for fashion, uniforms, and textile branding.',
      icon: '👕',
    },
    {
      id: 7,
      title: 'RFID labels & RFID solutions',
      description: 'RFID labels and complete RFID solutions for smart tracking, automation, and security.',
      icon: '📶',
    },
    {
      id: 8,
      title: 'Product labels & Transparent labels',
      description: 'Clear and custom product labels for a seamless, professional look on any packaging.',
      icon: '🪪',
    },
    {
      id: 9,
      title: 'Bakery labels, Foods product labels & Beverage labels',
      description: 'Attractive, food-safe labels for bakeries, food products, and beverages to boost shelf appeal.',
      icon: '🍞',
    },
    {
      id: 10,
      title: 'Voltage & Transformer labels &Cable labels & Hologram labels',
      description: 'Durable voltage, transformer, cable, and hologram labels for industrial and electrical use.',
      icon: '⚡',
    },
  ];

const WhatWeDo = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const toggleExpanded = (id) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">What We Do</h2>
          <p className="text-lg text-gray-600 w-full mx-auto">
            At S.R.S.B. Barcode Solutions, we specialize in providing a wide range of labeling and barcode solutions tailored for various industries. Our products are crafted to deliver precision, quality, and performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out hover:bg-blue-50 border border-gray-200 hover:border-blue-300"
            >
              {/* Icon */}
              <div className="text-3xl mb-3 transform hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Description */}
              <div className="text-gray-600 leading-relaxed">
                <p className="mb-2">
                  {expandedItems[service.id] ? service.description : truncateText(service.description, 10)}
                </p>
                {service.description.split(' ').length > 10 && (
                  <button 
                    onClick={() => toggleExpanded(service.id)}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 focus:outline-none"
                  >
                    {expandedItems[service.id] ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </div>
              
              {/* Hover indicator */}
              <div className="mt-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <div className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-white mb-4">
              Contact us today to discuss your labeling and barcode solution needs. We're here to help you find the perfect solution for your business.
            </p>
            <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};




export default WhatWeDo;
