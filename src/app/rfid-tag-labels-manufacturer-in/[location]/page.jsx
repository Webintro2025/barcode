import ConsultationForm from '@/components/ConsultationForm';
import locationList from '@/Location';


export async function generateMetadata({ params }) {
  const rawLocation = params?.location;

	const locationName = decodeURIComponent(rawLocation)
		.replace(/-/g, " ")
		.replace(/\s+/g, " ")
		.trim()
		.replace(/\b\w/g, (c) => c.toUpperCase());

	const baseTitle = "SRSB Barcode Solutions";

  const title = `RFID Tag Manufacturer in ${locationName}, SRSB Barcode Solutions`;

  const description = `Need RFID Tag Manufacturer in ${locationName}? Call SRSB Barcode Solutions for RFID Tags, RFID Labels, RFID Cards, NFC Tags and UHF RFID Tags in ${locationName}.`;

  const keywords = [
    `RFID Tag Manufacturer in ${locationName}`,
    `RFID Tags Supplier in ${locationName}`,
    `RFID Labels Manufacturer in ${locationName}`,
    `RFID Jewellery Labels in ${locationName}`,
    `RFID Cards Manufacturer in ${locationName}`,
    `NFC Tag Manufacturer in ${locationName}`,
    `RFID Keychain Manufacturer in ${locationName}`,
    `RFID Smart Card Manufacturer in ${locationName}`,
    `RFID Coin Tag Manufacturer in ${locationName}`,
    `UHF RFID Tag Manufacturer in ${locationName}`,
    `RFID Solution Provider in ${locationName}`,
    `RFID inventory management in ${locationName}`,
    `RFID asset tracking in ${locationName}`,
    `RFID warehouse automation in ${locationName}`,
    `RFID logistics and supply chain in ${locationName}`,
  ];

	const baseUrl = "https://www.srsbbarcode.com/in";
	// Defensive: ensure rawLocation is defined and a string
	const safeRawLocation = typeof rawLocation === 'string' ? rawLocation : '';
	const pathSegment = encodeURIComponent(safeRawLocation.toLowerCase());
	const canonicalUrl = `${baseUrl}/${pathSegment}`;

	return {
		title,
		description,
		keywords,
		alternates: {
			canonical: canonicalUrl,
		},
		openGraph: {
			title,
			description,
			url: canonicalUrl,
			siteName: baseTitle,
			type: "website",
		},
	};
}



export default async function LocationPage({ params }) {
  const { location } = await   params;

  // Check if slug exists in our location list (all lowercase with hyphens)
  const slugExists = locationList.includes(location.toLowerCase());

  if (!slugExists) {
    return (
      <div className="max-w-xl mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Location Not Found</h1>
        <p className="text-gray-700">Sorry, the location you are looking for does not exist in our service area list.</p>
      </div>
    );
  }

  // Convert slug (e.g. "new-delhi") to display name ("New Delhi")
  const locationName = location
    .toLowerCase()
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <>


      <main className="w-full ">
     



<div className="relative bg-purple-400 w-full h-[220px] xs:h-[320px] sm:h-[320px] md:h-[380px] lg:h-[400px] xl:h-[500px]">
 
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-2 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10">
    <h1 className="text-white mt-32 font-serif text-sm xs:text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-5xl leading-tight drop-shadow-md">
      RFID Tag Manufacturer in {locationName}
    </h1>
    <p className="text-white font-medium text-[10px] xs:text-xs sm:text-sm md:text-base mt-2 sm:mt-4 max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl drop-shadow">
      Welcome To <a href="https://srsbbarcode.com/">SRSB Barcode Solutions</a>, If You Are Looking For <strong>RFID Tag Manufacturer in {locationName}</strong>, We Are The Best Option For You. We Manufacture <strong>Best RFID Tag Supplier in {locationName}</strong>, <strong> RFID Labels Manufacture in {locationName}</strong>, India.
    </p>
    <button
      className="mt-4 sm:mt-6 bg-red-600 hover:bg-red-700 text-white text-[10px] xs:text-xs sm:text-sm md:text-base font-normal py-1.5 xs:py-2 px-4 xs:px-6 rounded-full flex items-center space-x-2 shadow"
      type="button"
    >
      <span><a href="https://srsbbarcode.com/contact">Contact Now</a></span>
      <i className="fas fa-arrow-right"></i>
    </button>
  </div>
</div>







<div className="bg-white px-10">
  <main className="w-full px-3 xs:px-4 sm:px-6 py-6 sm:py-8 md:py-10">
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
      <section className="w-full md:w-1/2 text-black">
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl leading-[1.2] font-semibold mb-3 sm:mb-4 md:mb-6 max-w-[600px]">
          RFID Tag Manufacturer in {locationName} – SRSB Barcode Solutions
        </h2>
        <p className="mb-4 sm:mb-6 max-w-[600px] text-xs xs:text-sm sm:text-base leading-relaxed font-normal">
          India’s Trusted &amp; Advanced <strong>RFID Tag Manufacturer in {locationName}</strong>.
          <br />
          <br />
          Welcome to SRSB Barcode Solutions, a leading and technology-driven <strong>RFID Tag Manufacturer in {locationName}</strong>, delivering next-generation RFID and NFC solutions for businesses across industries. We specialize in designing, manufacturing, and supplying high-performance RFID Tag, RFID labels, RFID cards, NFC Tag, and complete RFID solutions that enable smart identification, tracking, automation, and security.
          <br />
          <br />
          In today’s fast-moving digital and industrial ecosystem, RFID technology is no longer optional—it is essential. As a professional <strong>RFID Tag Manufacturer in {locationName}</strong>, we help businesses streamline operations, improve inventory accuracy, enhance security, and achieve real-time visibility across assets, products, and people.
          <br />
          <br />
          Our <strong>RFID</strong> products are engineered using international standards, premium raw materials, and advanced encoding technology, ensuring reliability, durability, and superior read performance in real-world environments.
          <br />
          <br />
        </p>
      </section>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          alt={`RFID Tag Manufacturer in ${locationName}`}
          className="object-cover rounded-lg w-full max-w-[350px] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-auto shadow"
          height={500}
          src="/img10.jpg"
          width={500}
        />
      </div>
    </div>
  </main>
</div>



<hr />





<div className="bg-white w-full px-16 xs:px-16 sm:px-16 py-6 sm:py-10 flex flex-col md:flex-row md:space-x-10 lg:space-x-20 ">
  <div className="w-full md:w-1/2 flex flex-col justify-center">
    <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl leading-[1.2] mb-3 sm:mb-6 font-semibold">
      The Power of RFID Technology
    </h2>
    <p className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-xl">
     <a href="https://en.wikipedia.org/wiki/Radio-frequency_identification">RFID</a>  (Radio Frequency Identification) technology enables contactless identification and data capture using radio waves. Unlike traditional barcodes, RFID does not require line-of-sight scanning, making it faster, more accurate, and highly scalable for modern businesses.
      <br />
      <br />
      As a trusted <strong>RFID Tag Manufacturer in {locationName}</strong>, we provide advanced RFID solutions that help businesses:
      <br />
      <br />
      • Automate tracking &amp; identification
      <br />
      • Reduce human errors
      <br />
      • Improve operational efficiency
      <br />
      • Enhance security &amp; authentication
      <br />
      • Enable real-time data visibility
      <br />
      • Support digital transformation &amp; Industry 4.0
    </p>
  </div>
  <div >
   
    <ConsultationForm />
  </div>
</div>







<hr />




<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
		Our Comprehensive RFID Tag Product Range in {locationName}
  </h2>
  <div className="space-y-8 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6]">
    <p>
      Complete RFID Solutions from a leading <strong>RFID Tag Manufacturer in {locationName}</strong>. We offer a wide range of RFID products and solutions designed for inventory management, asset tracking, logistics, retail, manufacturing, access control, and more. Each product is engineered using advanced RFID technology, premium materials, and strict quality standards to ensure high performance and long-term reliability.
    </p>
    <div>
      <span className="font-bold block mb-1">1. RFID Tag Manufacturer in {locationName}</span>
      <p>
        We manufacture high-quality RFID Tag suitable for a wide range of applications including inventory management, asset tracking, logistics, retail, manufacturing, and access control. Our RFID Tag are available in LF, HF, and UHF frequencies, ensuring compatibility with global RFID systems.
        <br />
        <br />
        Uses of RFID Tag:
        <br />
         Asset tracking
        <br />
         Inventory management
        <br />
         Supply chain monitoring
        <br />
         Warehouse automation
        <br />
         Industrial identification
        <br />
        <br />
        Our RFID Tag are designed for high read accuracy, long lifespan, and stable performance, even in harsh industrial environments.
      </p>
    </div>
    <div>
      <span className="font-bold block mb-1">2. RFID Labels Manufacturer in {locationName}</span>
      <p>
        As a professional <strong>RFID Tag Manufacturer in {locationName}</strong>, we also produce RFID Labels that combine traditional printed labels with embedded RFID inlays. These labels are ideal for fast-moving products and large-scale operations.
        <br />
        <br />
        Uses of RFID Labels:
        <br />
         Retail inventory tracking
        <br />
         Apparel &amp; footwear tagging
        <br />
         Logistics &amp; shipping
        <br />
         Carton and pallet tracking
        <br />
         Anti-theft solutions
        <br />
        <br />
        RFID labels improve stock accuracy, speed up operations, and enable real-time product visibility.
      </p>
    </div>
    <div>
      <span className="font-bold block mb-1">3. RFID Jewellery Labels Manufacturer in {locationName}</span>
      <p>
        Our RFID Jewellery Labels are specially designed for the jewelry industry, offering high security, tamper resistance, and precise identification for high-value items.
        <br />
        <br />
        Uses of RFID Jewellery Labels:
        <br />
         Jewelry inventory management
        <br />
         Anti-theft protection
        <br />
         Store-to-store tracking
        <br />
         Real-time stock reconciliation
        <br />
        <br />
        These labels help jewelers reduce losses, improve audit accuracy, and manage inventory with confidence.
      </p>
    </div>
    <div>
      <span className="font-bold block mb-1">4. RFID Solutions Provider in {locationName}</span>
      <p>
        Beyond manufacturing, we are a complete <strong>RFID Solution Provider in {locationName}</strong>, offering end-to-end RFID implementation from tag selection to system integration.
        <br />
        <br />
        Our RFID Solutions Include:
        <br />
         RFID hardware &amp; Tag
        <br />
         Encoding &amp; data programming
        <br />
         Software integration support
        <br />
         Custom RFID project solutions
        <br />
        <br />
        We design RFID systems tailored to your business workflow and industry requirements.
      </p>
    </div>
    <div>
      <span className="font-bold block mb-1">5. RFID Cards Manufacturer in {locationName}</span>
      <p>
        We manufacture premium-quality RFID Cards for secure identification and access control systems.
        <br />
        <br />
        Uses of RFID Cards:
        <br />
         Employee ID cards
        <br />
         Access control systems
        <br />
         Attendance management
        <br />
         Membership &amp; loyalty cards
        <br />
         Hotel &amp; hospitality key cards
        <br />
        <br />
        Our RFID cards offer secure data storage, long life, and consistent performance.
      </p>
    </div>
    <div>
      <span className="font-bold block mb-1">6. NFC Tag Manufacturer in {locationName}</span>
      <p>
        As an innovative <strong>RFID Tag Manufacturer in {locationName}</strong>, we also supply NFC Tag for short-range communication and smart interactions.
        <br />
        <br />
        Uses of NFC Tag:
        <br />
         Smart marketing &amp; promotions
        <br />
         Product authentication
        <br />
         Digital business cards
        <br />
         Mobile payments &amp; tap-based actions
        <br />
        <br />
        NFC Tag help brands create interactive, tech-enabled customer experiences.
      </p>
    </div>
    <div>
      <span className="font-bold block mb-1">7. RFID Keychain Manufacturer in {locationName}</span>
      <p>
        Our RFID Keychain Tag are compact, durable, and ideal for daily use.
        <br />
        <br />
        Uses of RFID Keychains:
        <br />
         Access control
        <br />
         Parking management
        <br />
         Gated communities
        <br />
         Gyms &amp; clubs
        <br />
        <br />
        They are water-resistant, stylish, and built for long-term use.
      </p>
    </div>
    <div>
      <span className="font-bold block mb-1">8. RFID Smart Card Manufacturer in {locationName}</span>
      <p>
        RFID Smart Cards offer enhanced security with embedded chips and memory.
        <br />
        <br />
        Uses of RFID Smart Cards:
        <br />
         Secure access systems
        <br />
         Banking &amp; payment systems
        <br />
         Corporate security
        <br />
         Government &amp; institutional use
        <br />
        <br />
        These cards ensure data security, encryption, and reliable authentication.
      </p>
    </div>
    <div>
      <span className="font-bold block mb-1">9. RFID Coin Tag Manufacturer in {locationName}</span>
      <p>
        RFID Coin Tag are compact, rugged, and suitable for challenging environments.
        <br />
        <br />
        Uses of RFID Coin Tag:
        <br />
         Asset tracking
        <br />
         Tool tracking
        <br />
         Laundry management
        <br />
         Industrial equipment tagging
        <br />
        <br />
        Their durable construction ensures performance in heat, moisture, and rough handling.
      </p>
    </div>
    <div>
      <span className="font-bold block mb-1">10. UHF RFID Tag Manufacturer in {locationName}</span>
      <p>
        We are a specialized <strong>UHF RFID Tag Manufacturer in {locationName}</strong>, offering long-range RFID solutions.
        <br />
        <br />
        Uses of UHF RFID Tag:
        <br />
         Warehouse management
        <br />
         Logistics &amp; supply chain
        <br />
         Vehicle &amp; toll management
        <br />
         Large inventory tracking
        <br />
        <br />
        UHF RFID enables bulk reading, fast processing, and long-distance scanning, making it ideal for large-scale operations.
      </p>
    </div>
  </div>

  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6 mt-6 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
    <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-blue-800 mb-2 text-center">📞 Contact us today to discuss your requirements, request a quote, or place an order.</h3>
  <p className="text-xs xs:text-sm sm:text-base text-gray-800 mb-2 text-center">If you are Looking for the <strong> RFID Tag Manufacturer in {locationName}</strong>? SRSB Barcode Solutions is your trusted partner.</p> <br/> 
      <ul className="list-disc pl-4 sm:pl-6 text-xs xs:text-sm sm:text-base text-gray-700 mb-2">
      <li>👉 <strong>Call Now:</strong> +91-9810244624</li>
      <li>👉 <strong>Visit Our Website</strong> <a href="https://srsbbarcode.com">www.srsbbarcode.com</a></li>
      <li>👉 <strong>Our Email Address</strong> – info@srsbbarcode.com </li>
    </ul>
  </div>
</div>







<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
    Why Choose Us? The Most Reliable RFID Tag Manufacturer in {locationName}
  </h2>
  <p className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6]">
    Choosing the right RFID partner is critical for any business that wants to automate operations, improve traceability, and enhance security. As a leading and technology-driven <strong>RFID Tag Manufacturer in {locationName}</strong>, we provide end-to-end RFID solutions that are built for reliability, scalability, and long-term performance.
  </p>
  <ul className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6] list-none">
    <li>
      <span className="font-bold">1. Industry-Leading Manufacturing Expertise</span><br />
      As a seasoned <strong>RFID Tag Manufacturer in {locationName}</strong>, we combine deep technical expertise with advanced production facilities to deliver world-class RFID products across multiple sectors and applications.
    </li>
    <li>
      <span className="font-bold">2. Complete Customization</span><br />
      We offer full customization in size, frequency, chip type, antenna design, material, and data encoding, ensuring every RFID tag, label, or card is perfectly matched to your application and environment.
    </li>
    <li>
      <span className="font-bold">3. Advanced Technology & Global Standards</span><br />
      Our RFID products comply with international RFID and EPC standards, ensuring global compatibility, seamless integration, and consistently high performance in real-world deployments.
    </li>
    <li>
      <span className="font-bold">4. High Durability & Accuracy</span><br />
      Every product is thoroughly tested for read range, accuracy, durability, and environmental resistance to heat, moisture, dust, and impact, ensuring long-term stability and reliable performance.
    </li>
    <li>
      <span className="font-bold">5. Cost-Effective Solutions</span><br />
      We provide highly competitive pricing without compromising on quality or performance, making advanced RFID technology accessible to startups, SMEs, and large enterprises alike.
    </li>
    <li>
      <span className="font-bold">6. End-to-End Support</span><br />
      From initial consultation and product selection to deployment support and after-sales assistance, we offer complete guidance at every stage of your RFID implementation.
    </li>
    <li>
      <span className="font-bold">7. Trusted by Multiple Industries</span><br />
      Retail, logistics, manufacturing, jewelry, healthcare, education, hospitality, and government organizations trust us as their preferred <strong>RFID Tag Manufacturer in {locationName}</strong> for mission-critical identification and tracking applications.
    </li>
  </ul>
</div>

<hr />






<hr />
<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif mb-2 sm:mb-4">Conclusion:-</h2>
  <p className="text-xs xs:text-sm sm:text-base font-sans text-black leading-relaxed">
 If you are searching for a reliable, innovative, and experienced <strong>RFID Tag Manufacturer in {locationName}</strong>, SRSB Barcode Solutions is your ideal partner. Our advanced RFID Tag, labels, cards, NFC products, and complete RFID solutions empower businesses to operate smarter, faster, and more securely.

With a strong focus on quality, customization, technology, and customer satisfaction, we help you unlock the full potential of RFID technology and stay ahead in a competitive market.
  </p>
</div>

    </main>
    </>
  );
}