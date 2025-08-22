import React from 'react';


const Gallery = () => {

  const service1 = '/cartoon.png'; // Replace with your actual image path
  const service2 = '/service2.png'; // Replace with your actual image path
  const service3 = '/product.png'; // Replace with your actual image path
  const service4 = '/marketplace.png'; // Replace with your actual image path
  const service5 = '/shoes.png'; // Replace with your actual image path
  const service6 = '/mobileaccessories.png'; // Replace with your actual image path
  const service7 = '/garmentlabel.png'; // Replace with your actual image path
  const service8 = '/service8.png'; // Replace with your actual image path
  const imeiLabel = '/ime.png'; // Replace with your actual image path
  const wovenLabel = '/woven.png'; // Replace with your actual image path
  const serviceImages = [
    { id: 1, src: service1, alt: 'Barcode Generation', name: 'Barcode Generation', description: 'Professional barcode creation services' },
    { id: 2, src: imeiLabel, alt: 'Barcode Printing Software', name: 'IMEI Mobile Labels', description: 'Advanced barcode printing software solutions' },
    { id: 3, src: service3, alt: 'Product Labels / Stickers', name: 'Product Labels / Stickers', description: 'Custom product labeling and sticker solutions' },
    { id: 4, src: service4, alt: 'Label Printing Services', name: 'Label Printing Services', description: 'Professional label printing and design services' },
    { id: 5, src: service5, alt: 'Footwear Labels / Stickers', name: 'Footwear Labels / Stickers', description: 'Specialized labeling solutions for footwear industry' },
    { id: 6, src: service6, alt: 'Mobile Accessories Labels / Stickers', name: 'Mobile Accessories Labels / Stickers', description: 'Custom labels for mobile accessories and electronics' },
    { id: 7, src: service7, alt: 'Garment Labels / Stickers', name: 'Garment Labels / Stickers', description: 'Professional garment labeling and branding solutions' },
    { id: 8, src: wovenLabel , alt: 'Jewellery Labels / Stickers', name: 'Woven Labels / Stickers', description: 'Premium labeling solutions for jewelry and accessories' },
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
            <div
              key={image.id}
              className="flex flex-col items-center bg-white rounded-xl shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
