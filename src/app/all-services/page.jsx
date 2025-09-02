import React from "react";

const softwareServices = [
  "Customized Software Development on any subject/Industry.",
  "Invenvory Management Software of Online Portals (with Implementation)",
  "Inventory Management Software for Shoes Wholesalers/Readymade Garments Wholesalers",
  "Billing & Inventory Management Software for Shoes Retailers/Readymade Garments Retailers",
  "ERP Management Software for Shoes Manufacturers/Readymade Garments Manufacturers",
  "Order Processing Software",
  "Barcode/QR Code Printing Software for any Industry"
];

const barcodeServices = [
  "IMEI Barcode Printing Services",
  "Barcode Label Printing Services",
  "QR Code Printing Services",
  "Batch Printing Services",
  "QC Passed sticker Printing Services",
  "Bottle Label Shrink Printing Services",
  "Logo Printing on Cloth Label / Satin Label / Taffeta Label",
  "Heat Transfer / DTF Printing Services",
  "Repair & Service of Bar Code Printer (any make) with provision of providing  a standby Printer",
  "Repair & Service of Barcode Scanner."
];

export default function AllServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-16 pb-10 px-2 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-12 text-purple-900 font-serif tracking-tight">
          All Services
        </h1>
        <div className="mb-12 bg-white/80 rounded-2xl shadow-lg p-4 sm:p-8 border border-purple-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-800 mb-6 text-center">Software Development Services</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-800 text-base sm:text-lg">
            {softwareServices.map((item, idx) => (
              <li key={idx} className="pl-2">{item}</li>
            ))}
          </ol>
        </div>
        <div className="bg-white/80 rounded-2xl shadow-lg p-4 sm:p-8 border border-purple-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-800 mb-6 text-center">Barcode Label Printing & Repair Services</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-800 text-base sm:text-lg">
            {barcodeServices.map((item, idx) => (
              <li key={idx} className="pl-2">{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
