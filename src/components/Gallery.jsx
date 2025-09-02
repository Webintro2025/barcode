
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
  const img9 = '/img9.png';
  const img10 = '/img10.jpg';

    const serviceImages = [
      { id: 1, src: img1, alt: 'Barcode Generation, Label Design & Printing', name: 'Barcode Generation, Label Design & Printing', slug: labelServicesData.barcodeGenerationLabel.slug },
      { id: 2, src: img5, alt: 'IMIE Label Printing & Mobile Accessories Labels', name: 'IMIE Label Printing & Mobile Accessories Labels', slug: labelServicesData.mobileAccessoriesIMEI.slug },
      { id: 3, src: img3, alt: 'Product Labels, Hologram Labels, Security Labels and Tamper-proof Labels', name: 'Product Labels, Hologram Labels, Security Labels and Tamper-proof Labels', slug: labelServicesData.productHologramLabels.slug },
      { id: 4, src: img4, alt: 'Label Printing & QR Code Printing Services', name: 'Label Printing & QR Code Printing Services', slug: labelServicesData.labelPrinting.slug },
      { id: 5, src: img2, alt: 'Footwear Industry Labels & Carton Labels', name: 'Footwear Industry Labels & Carton Labels', slug: labelServicesData.footwearShopCartoon.slug },
      { id: 6, src: img6, alt: 'Garments Labels, Woven Labels, Satin Labels & Taffeta Labels', name: 'Garments Labels, Woven Labels, Satin Labels & Taffeta Labels', slug: labelServicesData.garmentWovenTaffeta.slug },
      { id: 7, src: img10, alt: 'RFID Software Solutions & RFID Labels', name: 'RFID Software Solutions & RFID Labels', slug: labelServicesData.rfidLabelsSolutions.slug },
      { id: 8, src: img9, alt: 'Product Labels, Transparent Labels,  Vinyle Labels & PVC Labels', name: 'Product Labels, Transparent Labels,  Vinyle Labels & PVC Labels', slug: labelServicesData.productTransparentLabels.slug },
      { id: 9, src: img7, alt: 'Bakery labels, Foods product labels & Beverage labels', name: 'Bakery labels, Foods product labels & Beverage labels', slug: labelServicesData.bakeryFoodBeverageLabels.slug },
      
    ];

  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Services</h2>
          <p className="text-lg text-gray-600">Discover our comprehensive range of services</p>
        </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
