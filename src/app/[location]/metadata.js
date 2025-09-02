export  function generateMetadata({ params }) {
  const location = params.location?.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()) || "Your City";
  return {
    title: `Mobile Accessories Label Manufacturers in ${location} | SRSB Barcode Solutions`,
    description: `Need Mobile Accessories Label Manufacturers in ${location} Call SRSB Barcode Solutions, Mobile Accessories Label Suppliers, IMEI Label Printing Services in ${location}.`,
    keywords: [
      `Mobile Accessories Label Manufacturers in ${location}`,
      `Mobile Accessories Label Suppliers in ${location}`,
      `IMEI Label Printing Services in ${location}`,
      `SRSB Barcode Solutions`,
      `Mobile Accessories Labels in ${location}`
    ],
    alternates: {
      canonical: `https://www.srsbbarcode.com/${params.location || ""}`
    }
  };
}
