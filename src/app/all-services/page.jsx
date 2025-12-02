export default function AllServicesPage() {
  const services = [
    "Customized Software Development on any subject/Industry.",
    "Inventory Management Software of Online Portals (with Implementation)",
    "Inventory Management Software for Shoes Wholesalers/Readymade Garments Wholesalers",
    "Billing & Inventory Management Software for Shoes Retailers/Readymade Garments Retailers",
    "ERP Management Software for Shoes Manufacturers/Readymade Garments Manufacturers",
    "Order Processing Software",
    "Barcode/QR Code Printing Software for any Industry",
    "Barcode Label Printing Services and Repair Services of Barcode Printer and Barcode Scanners",
    "IMEI Barcode Printing Services",
    "Barcode Label Printing Services",
    "QR Code Printing Services",
    "Batch Printing Services",
    "QC Passed sticker Printing Services",
    "Bottle Label Shrink Printing Services",
    "Logo Printing on Cloth Label / Satin Label / Taffeta Label",
    "Heat Transfer / DTF Printing Services",
    "Repair & Service of Bar Code Printer (any make) with provision of providing a standby Printer",
    "Repair & Service of Barcode Scanner"
  ];

  return (
    <main className="max-w-2xl mx-auto mt-28 py-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Software Development & Printing Services</h1>
      <ul className="list-disc pl-6 space-y-2 text-base">
        {services.map((service, idx) => (
          <li key={idx}>{service}</li>
        ))}
      </ul>
    </main>
  );
}