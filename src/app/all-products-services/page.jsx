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
  // Split the list into two nearly equal columns
  const mid = Math.ceil(allLabels.length / 2);
  const col1 = allLabels.slice(0, mid);
  const col2 = allLabels.slice(mid);

  return (
    <div className="min-h-screen bg-white pt-28 pb-8 ">
      <div >
        <div className="relative flex  bg-purple-500 h-60 justify-center mb-10">
          <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-16rounded-xl blur-sm opacity-60"></span>
          <h1 className="relative text-3xl mt-20 sm:text-4xl font-bold text-center text-white font-serif px-8 py-4 z-10 drop-shadow-lg">
            All Products
          </h1>
        </div>
        <div className="flex justify-center px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full max-w-3xl">
          <ol className="list-decimal list-inside space-y-2 text-gray-800 text-base sm:text-lg">
            {col1.map((label, idx) => (
              <li key={idx}>{label}</li>
            ))}
          </ol>
          <ol className="list-decimal list-inside space-y-2 text-gray-800 text-base sm:text-lg" start={mid + 1}>
            {col2.map((label, idx) => (
              <li key={idx}>{label}</li>
            ))}
          </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
