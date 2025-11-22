import React from "react";

const allLabels = [
  "4x6 Labels / 3x5 Water Marking Labels",
  "AC Bee Star Labels",
  "Airline Labels Sticker",
  "Amazon Labels / Myntra Labels / Flipkart Labels",
  "Bakery Labels",
  "Bottle Printed Labels",
  "Cable Labels / Wrapwire Marking Labels",
  "Carton Labels",
  "Centre Fold Clothing Labels",
  "Clear on Clear Labels",
  "Cold Storage Stickers",
  "Coloured Ribbons",
  "Computerized Wown Labels",
  "Cosmetic Labels",
  "Cotton Printed Garment Labels/Apparel Labels",
  "Custom Printed Stickers",
  "Die Cut Labels",
  "Dogbone RFID Tag",
  "Dry Fruit Label Sticker",
  "DT Labels - 100 X 150 / 3 X 5",
  "DTF Sticker Printing Services",
  "Embroidered Cloth Labels",
  "Ethnic Garment Labels",
  "Export House Labels",
  "Fancy Labels / Fancy Stickers",
  "Fire Extinguisher Labels",
  "Flag Labels",
  "Food Product Labels / Beverage Labels",
  "Fragile Handle with care Labels",
  "Frozen Products Labels",
  "Garment Labels",
  "Ghee Bottle Sticker Labels",
  "Gym Equipment Labels",
  "HD Stickers & Labels",
  "Heat Absorbent / Heat Transfer Stickers",
  "Hologram Stickers",
  "Hosiery Sticker Labels",
  "Ice-cream Labels / Ice cream Stickers",
  "IMEI Labels & Stickers",
  "Jewelry Labels / Tags",
  "Kids Stickers",
  "Kurti Woven Labels",
  "Library RFID Labels & Tags",
  "Market Place Labels",
  "Medicine Bottle Label / Sticker",
  "Metal Labels / Metal Branding Plate",
  "MRP Labels / MRP Stickers",
  "NFC Sticker Paper Tags",
  "Paper Labels",
  "Perfume Labels",
  "Piggy Labels",
  "Pouch Labels",
  "Printed Packaging Labels / Printed Stickers",
  "Product Labels",
  "PVC Sticker & Labels /Polyester Labels",
  "QC Passed Labels",
  "QR Code Sticker A92",
  "RFID Mapping & Printing",
  "Ribbons-Pure Resin",
  "ROHS Labels",
  "Satin Printed Labels",
  "Sealing Labels",
  "Self Adhesive Labels",
  "Semiconductor Labels",
  "Serial Sticker Printing Services",
  "Sew in Clothing Labels",
  "Sherwani Labels",
  "Shipping Labels / Stickers",
  "Shirt Labels / Pant Labels / Coat Labels",
  "Shoe Barcode Labels",
  "Spectacle Barcode Tags",
  "Supermarket Barcode Labels",
  "Syrup Label Stickers",
  "Tafetta Label/Printed Tafetta Labels",
  "Tea Packing Labels",
  "Thermal Paper Rolls",
  "Toilet Cleaner Stickers",
  "Tranformer / Voltage Stabilizer Labels",
  "Translucent Clothing Labels",
  "Transparent Round Stickers",
  "UV Coated Labels & Stickers",
  "Vinyle Labels / Vinyle Stickers",
  "Voltage Stabilizer Labels / Cable Labels / Holographic Labels",
  "Warehousing Labels / Packaging Labels",
  "Waterproof Labels / Waterproof stickers",
  "Wax Ribbons",
  "Wax-Resin Ribbons / Wax Ribbons / Resin Ribbons",
  "Woven Size Labels",
  "Wowen Labels / Wowen Size Labels",
  "Wrap Around Labels"
];

export default function AllProductsServicesPage() {
  return (
    <div className="min-h-screen bg-white py-10 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900 font-serif">
          FULL LIST OF LABELS AVAILABLE
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {allLabels.map((label, idx) => (
            <div key={idx} className="bg-purple-50 border border-purple-200 rounded-lg px-4 py-3 text-gray-800 text-sm sm:text-base font-medium shadow-sm hover:bg-purple-100 transition-colors">
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
