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
    title: 'Barcode Printers, Billing Printers and Scanners',
    icon: '🖨️',
    description: `We sell and service high quality Barcode Printers and Scanners. The range covers one-dimensional, two-dimensional / QR Code Scanners, desktop Barcode Printers, Heavy-duty Industrial Barcode Printers of well-known brands like TSC, Zebra, Honeywell, Motorola, New Land, Toshiba etc. An in-house facility to component level repair of Barcode Printers and Scanners is our strength. This reduces the cost of repair as compared to the cost of repairs by companies who manufacture these products and ultimately the beneficiary is our customer only. We also provide stand-by printers and scanners till the product is repaired and sent back to the customer.`
  },
  {
    id: 2,
    title: 'IMEI Label / Barcode Label Printing Services',
    icon: '📱',
    description: `We specialize in job work of printing IMIE Barcode Labels for mobile manufacturers and assemblers. We also have state of the art facility to print barcode labels for manufacturers of Mobile Accessories, Shoes Manufacturers, Garments Manufacturers etc., on job-work basis.`
  },
  {
    id: 3,
    title: 'Product Labels & Holographic Labels',
    icon: '🏷️',
    description: `We specialize in printing of multi-color Product Labels of industries like Food & Beverage, Garments, Shoes, Mobile Phones Accessories, Fertilizers, Retailing, Healthcare, Electronics, Pharmaceuticals, agricultural Products, FMCG, Automobiles, Cold Storage, E-Commerce etc. We also provide tamper proof Security Labels, Void Labels and Holographic Labels for above mentioned industries.`
  },
  {
    id: 4,
    title: 'RFID Solutions and RFID Labels',
    icon: '📶',
    description: `To automate object Identification and tracking, we provide solutions thru state of the art RFID (Radio Frequency Identification) technology. We offer smart barcodes i.e., RFID Tags to track, locate and maintain inventory at large ware-houses, where it is very difficult to manage stock of a large number and variety of items. We also provide software solutions using RFID technology to increase efficiency, security, real-time tracking of assets and reduced labor cost for overall efficiency of any organization.`
  },
  {
    id: 5,
    title: 'ERP Software Solutions with IMPLEMENTATION',
    icon: '💻',
    description: `We specialize in system-study, development and implementation of ERP Software System which includes :\n(a) Inventory Management.\n(b) Order Processing.\n(c) Manufacturing.\n(d) Finance.\n(e) Supply Chain Management.`
  },
  {
    id: 6,
    title: 'Labels, Tags, Barcode Labels, QR Code Labels & Barcode Software',
    icon: '🔖',
    description: `We are having two decades of experience in the field of Labelling industry. We provide Self-adhesive labels (plain and printed) to various industries like Shoes, Garments, Food, Jewelry, Medicine, Shipping, Cables, Voltage-Transformers, Mobile Accessories, E-Commerce, Frozen-Food, Super-markets, Export-House, Bakery, Pharmaceuticals, cosmetics, Dry-Fruit etc.\nWe have thermal paper Labels, Paper Labels, Vinyle labels, heat resistant labels, water-proof labels, transparent labels, translucent labels, viod- labels, security labels, shipping labels, carton labels, packaging labels, Taffeta Labels, Woven Labels, Flag labels, pouch labels, bottling labels, Holograms, Handle with care labels, PVC Labels, Serial Stickers, very small semiconductor Labels, IMEI Labels. We have inventory of more than 100 sizes of labels and Ribbons, off the shelf. As we deal only in high quality branded paper, shelf life of our labels is more than two years.\nWe also deal in barcode and QR Code Printing software. It’s a very user friendly Software ever made for various types of industries. It prints thousands of labels at one go, which is linked to the Excel sheet, at press of a single button. A unique feature of this software is that it’s customizable as per user’s requirements.`
  }
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
                  {expandedItems[service.id] ? service.description : truncateText(service.description, 30)}
                </p>
                {service.description.split(' ').length > 30 && (
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

      </div>
    </div>
  );
};




export default WhatWeDo;
