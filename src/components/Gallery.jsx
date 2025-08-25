
import React from 'react';
import Link from 'next/link';
import { labelServicesData } from '@/lib/services';


const Gallery = () => {
  const img1 = '/img1.png';
  const img2 = '/img2.png'; 
  const img3 = '/img3.jpg';
  const img4 = '/img4.png';
  const img5 = '/img5.png';
const img6 = '/img6.png';
  const img7 = '/img7.jpg';
  const img8 = '/img8.jpg';

    const serviceImages = [
  { id: 1, src: img1, alt: 'Barcode Generation & Label', name: 'Barcode Generation & Label', slug: labelServicesData.barcodeGenerationLabel.slug },
  { id: 2, src: img5, alt: 'Mobile accessories & IMEI', name: 'Mobile accessories & IMEI', slug: labelServicesData.mobileAccessoriesIMEI.slug },
      { id: 3, src: img3, alt: 'Product Labels & Hologram Labels', name: 'Product Labels & Hologram Labels', slug: labelServicesData.productHologramLabels.slug },
      { id: 4, src: img4, alt: 'Label Printing', name: 'Label Printing', slug: labelServicesData.labelPrinting.slug },
  { id: 5, src: img2, alt: 'Footwear Labels & Shop Label & Cartoon', name: 'Footwear Labels & Shop Label & Cartoon', slug: labelServicesData.footwearShopCartoon.slug },
      { id: 6, src: img6, alt: 'Garment Labels & Woven Labels &Taffeta Label', name: 'Garment Labels & Woven Labels &Taffeta Label', slug: labelServicesData.garmentWovenTaffeta.slug },
     
      { id: 9, src: img7, alt: 'Bakery labels, Foods product labels & Beverage labels', name: 'Bakery labels, Foods product labels & Beverage labels', slug: labelServicesData.bakeryFoodBeverageLabels.slug },
      { id: 10, src: img8, alt: 'Voltage & Transformer labels &Cable labels & Hologram labels', name: 'Voltage & Transformer labels &Cable labels & Hologram labels', slug: labelServicesData.voltageTransformerCableHologram.slug },
    ];

  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Services</h2>
          <p className="text-lg text-gray-600">Discover our comprehensive range of services</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceImages.map((image) => (
            <Link
              key={image.id}
              href={`/service/${image.slug}`}
              className="flex flex-col items-center bg-white rounded-xl shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <div className="w-full max-w-[350px] h-[180px] flex items-center justify-center overflow-hidden bg-white p-0 m-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110 p-0 m-0"
                  style={{ maxWidth: '100%', maxHeight: '180px', padding: 0, margin: 0 }}
                />
              </div>
              <div className="p-1 w-full flex flex-col items-center">
                <h3 className="text-xl font-semibold text-gray-800 text-center group-hover:text-indigo-600 transition-colors duration-300">
                  {image.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
