import ConsultationForm from '@/components/ConsultationForm';
import MarketPlace from '../../MarketPlace';

export default  async function  LocationPage({ params }) {
  const { location } = await params;
  // Normalize for case-insensitive match
  const locationName = MarketPlace.find(
    (loc) => loc.replace(/\s+/g, '').toLowerCase() === location.replace(/\s+/g, '').toLowerCase()
  );

  if (!locationName) {
    return (
      <div className="max-w-xl mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Location Not Found</h1>
        <p className="text-gray-700">Sorry, the location you are looking for does not exist in our Market Place list.</p>
      </div>
    );
  }

  return (
    <>

      <main className="w-full ">
     



<div className="relative bg-purple-400 w-full h-[220px] xs:h-[320px] sm:h-[320px] md:h-[380px] lg:h-[400px] xl:h-[500px]">
 
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-2 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10">
    <h1 className="text-white mt-32 font-serif text-sm xs:text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-5xl leading-tight drop-shadow-md">
     Mobile Accessories Label Manufacturers in {locationName}
    </h1>
    <p className="text-white font-medium text-[10px] xs:text-xs sm:text-sm md:text-base mt-2 sm:mt-4 max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl drop-shadow">
      Welcome To <a href="https://srsbbarcode.com/">SRSB Barcode Solutions</a>, If You Are Looking For <strong>Mobile Accessories Label Manufacturers in {locationName}</strong>, We Are The Best Option For You. We Manufacture <strong>Best Mobile Accessories Label Suppliers in {locationName}</strong>, IMEI Label Printing Services Suppliers in {locationName}, India.
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
          Mobile Accessories Label Manufacturers in {locationName} – SRSB Barcode Solutions.
        </h2>
        <p className="mb-4 sm:mb-6 max-w-[600px] text-xs xs:text-sm sm:text-base leading-relaxed font-normal">
          Walk into any electronics store in India and you'll see a world of innovation—sleek smartphones, smartwatches, powerful chargers, and wireless headphones. But what you might not notice is the tiny, powerful mark on each of these products: the label.

In a market defined by speed, scale, and intense competition, this unassuming label is far more than just a sticker. It's a guardian of authenticity, a key to operational intelligence, and a silent ambassador for your brand. In India's booming mobile accessories industry, where a single fraudulent product can tarnish a brand's reputation, the demand for high-quality, reliable, and secure labeling has never been more critical.
        </p>
      </section>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          alt={`Blood Bank Refrigerator Manufacturers in ${locationName}`}
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
Mobile Accessories Label Suppliers in  {locationName}
    
    </h2>
    <p className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-xl">
 This is a job for more than just a printer. It requires a partner with a deep understanding of technology, logistics, and brand security. This is the role played by SRSB Barcode Solutions, a leading mobile accessories labels manufacturer in India, and a company that has been a silent force behind the country’s tech growth for over 23 years. <br />
 Creating a high-quality custom mobile label in India is a meticulous process that blends material science with advanced printing technology. We use specialized materials like durable polyester films and tear-resistant synthetic papers, selecting the perfect adhesive to ensure a permanent bond. Our advanced thermal transfer and flexographic printers deliver a crisp, high-resolution print, and our precision die-cutting machinery ensures every label is cut to the exact specification, ready for seamless integration into your production line.
    </p>
  </div>
  <div >
   
    <ConsultationForm />
  </div>
</div>








<div className="bg-white text-[#1a1a1a] w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <div className="flex flex-col md:flex-row gap-6 md:gap-10 border-t border-b border-gray-300 py-4 sm:py-6">
    <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-gray-300 pr-0 md:pr-6 pb-6 md:pb-0">
      <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl text-center leading-[1.2] mb-4 sm:mb-8 font-semibold">
        More Than a Sticker: The Indispensable Role of Mobile Accessories Labels
      </h2>
      <div className="text-xs xs:text-sm sm:text-base text-gray-800 leading-relaxed text-left space-y-3">
        <p>
          Every business in the mobile accessories ecosystem—from manufacturers to retailers to exporters—faces a unique set of challenges. A robust labeling strategy is the definitive solution to each of them.
        </p>
        <h3 className="font-semibold mt-2 mb-1">The Battle Against Counterfeits</h3>
        <p>
          The Indian market is flooded with counterfeit products. These fraudulent goods not only strip away your revenue but also pose a significant threat to your brand's reputation and consumer safety. A professionally manufactured label with unique barcodes, serial numbers, and tamper-evident features acts as your first and most effective line of defense.
        </p>
        <h3 className="font-semibold mt-2 mb-1">The Backbone of Your Supply Chain</h3>
        <p>
          In today's fast-paced logistics, inefficiency is a luxury no business can afford. Labels with scannable barcodes provide the operational intelligence to streamline every process, from the assembly line to the retail counter. This allows for seamless inventory management and reduced human error, giving you a competitive edge.
        </p>
        <h3 className="font-semibold mt-2 mb-1">The Seal of Trust and Compliance</h3>
        <p>
          A clear, professional label is a signal of quality. It shows that you’ve met mandatory regulatory standards and provides consumers with essential information, building a foundation of trust that transforms a one-time purchase into lasting brand loyalty.
        </p>
      </div>
    </div>
    <div className="w-full md:w-1/2 pl-0 md:pl-6 mt-8 md:mt-0">
      <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl text-center leading-[1.2] mb-4 sm:mb-8 font-semibold">
        The Science of Security: Our IMEI Label Printing Services
      </h2>
      <div className="text-xs xs:text-sm sm:text-base leading-relaxed text-gray-800">
        <p className="mb-2">
          For mobile phone manufacturers, the label is not just about inventory; it's about identity. The International Mobile Equipment Identity (IMEI) is the unique digital fingerprint of every mobile device. The printing of this number is a mission-critical operation that demands absolute precision and security.
        </p>
        <h3 className="font-semibold mt-3 mb-1">Why Every Phone Needs a Perfect IMEI Label</h3>
        <ul className="list-disc pl-4 mb-2">
          <li><strong>Global Security:</strong> The IMEI number is the primary tool used by law enforcement and network operators to track and disable stolen phones. An accurate, legible IMEI label is the first step in protecting your consumers from theft.</li>
          <li><strong>Warranty and Service:</strong> An IMEI number is the key to managing your service and warranty claims. It allows you to instantly verify a device’s authenticity, track its manufacturing date, and access its service history, making after-sales support fast and efficient.</li>
          <li><strong>Regulatory Mandate:</strong> In India, as in most countries, printing the unique IMEI on the device or its packaging is a mandatory regulatory requirement for all mobile phones sold.</li>
        </ul>
        <p className="mb-0">
          At SRSB, we treat IMEI label printing services as a mission-critical operation. We utilize state-of-the-art variable data printing technology to ensure that each label is a unique, scannable masterpiece. Our process guarantees that the data is accurate, the print is smudge-proof, and the material is durable enough to withstand years of handling.
        </p>
      </div>
    </div>
  </div>
</div>





<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">

  SRSB Barcode Solutions – Our Product Range
  </h2>
<div className="space-y-8 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6]">
  <div>
    <span className="font-bold block mb-1">1. Mobile Accessories Labels: Engineered for Endurance</span>
    <p>Your mobile accessories—from power banks and data cables to earphones and cases—are a reflection of your brand's quality. The labels on these products must be just as durable and professional. Our Mobile Accessories Labels are not generic stickers; they are precision-engineered to withstand the demands of real-world use while providing critical information and brand security.</p>
    <span className="font-semibold block mt-2 mb-1">Product Features & Benefits:</span>
    <ul className="list-disc pl-4 mb-2">
      <li><strong>Superior Materials:</strong> We select from a range of high-performance materials, including durable polyester (PET), flexible polypropylene (PP), and tamper-evident synthetics. Each material is chosen to resist heat, moisture, friction, and abrasion, ensuring your label remains intact and legible for the product's entire lifecycle.</li>
      <li><strong>High-Resolution Printing:</strong> Our labels are printed using advanced thermal transfer and flexographic technology, guaranteeing a crisp, clear print. This is essential for scannable barcodes and legible text that won't fade or smudge, even with repeated handling.</li>
      <li><strong>Robust Adhesives:</strong> The adhesive is the soul of a label. We use industrial-grade adhesives that create a strong, permanent bond with various surfaces, from smooth plastic to textured metal, preventing peeling and tampering.</li>
      <li><strong>Customization is Key:</strong> As a specialist mobile accessories labels manufacturer in India, we offer complete customization. We can produce labels in any size, shape, color, and design to perfectly match your brand's aesthetics and technical specifications. This includes everything from simple barcode labels to intricate, multi-color branding labels.</li>
    </ul>
  </div>
  <div>
    <span className="font-bold block mb-1">2. IMEI Label Printing Services: The Fingerprint of Security</span>
    <p>For mobile phone manufacturers, the IMEI number is a mission-critical part of a device's identity. At SRSB Barcode Solutions, we provide specialized and secure IMEI label printing services that are trusted by top brands across the country. We understand that an IMEI label must be more than just a number; it must be a guarantee of authenticity and traceability.</p>
    <span className="font-semibold block mt-2 mb-1">Product Features & Benefits:</span>
    <ul className="list-disc pl-4 mb-2">
      <li><strong>Variable Data Printing:</strong> Our state-of-the-art variable data printing technology ensures that each IMEI label is completely unique. We can seamlessly process large volumes of data, generating a unique barcode and serial number for every single device without error.</li>
      <li><strong>Tamper-Evident Security:</strong> To prevent fraudulent activities like device swapping or cloning, our IMEI labels are produced on tamper-evident materials. Any attempt to remove or tamper with the label will leave a clear "VOID" or "Tamper" residue, instantly invalidating the label.</li>
      <li><strong>Precision and Scannability:</strong> We guarantee a high-resolution print that ensures every barcode is easily scannable on the first attempt, crucial for automated production lines and quality control.</li>
      <li><strong>Full Compliance:</strong> Our IMEI label printing services are designed to meet all national and international regulatory requirements, giving you complete peace of mind and allowing your products to move smoothly through the supply chain.</li>
    </ul>
  </div>
</div>

  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6 mt-6 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
    <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-blue-800 mb-2 text-center">📞 Contact us today to discuss your requirements, request a quote, or place an order.</h3>
  <p className="text-xs xs:text-sm sm:text-base text-gray-800 mb-2 text-center">If you are Looking for the <strong>Mobile Accessories Labels in {locationName}</strong>? SRSB Barcode Solutions is your trusted partner.</p> <br/> 
      <ul className="list-disc pl-4 sm:pl-6 text-xs xs:text-sm sm:text-base text-gray-700 mb-2">
      <li>👉 <strong>Call Now:</strong> +91-9810244624</li>
      <li>👉 <strong>Visit Our Website</strong> <a href="https://srsbbarcode.com">www.srsbbarcode.com</a></li>
      <li>👉 <strong>Our Email Address</strong> – info@srsbbarcode.com </li>
    </ul>
  </div>
</div>

``





<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
    Why SRSB Barcode Solutions is the Best Choice
  </h2>
  <p className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6]">
    In a market saturated with options, what truly sets a partner apart is not just their product, but their promise. With over 23 years of excellence, SRSB Barcode Solutions offers more than just labels; we offer a strategic advantage built on a foundation of trust and unparalleled expertise.
  </p>
  <ul className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6] list-none">
    <li>
      <span className="font-bold">1. The Power of a 23+ Year Legacy</span><br />
      In a market that reinvents itself every few years, our 23+ year legacy is a testament to our resilience, our adaptability, and our unwavering commitment to excellence. We have witnessed the evolution of the mobile industry from its nascent stages to its current scale. This deep-seated knowledge means we don’t just react to trends; we anticipate them, providing you with a partner who understands your business from the ground up.
    </li>
    <li>
      <span className="font-bold">2. Specialized Expertise in Mobile & IMEI Solutions</span><br />
      We are not a generic label manufacturer. Our decades of experience have allowed us to specialize in the intricate needs of the mobile and electronics industry. Our mastery of producing durable mobile accessories labels is matched only by our proficiency in providing mission-critical IMEI label printing services. We understand the specific materials, adhesives, and security features required to meet the unique challenges of your products.
    </li>
    <li>
      <span className="font-bold">3. A Partner, Not Just a Vendor</span><br />
      At SRSB, we believe in building long-term relationships. We take a consultative approach, working closely with you to understand your specific needs. This allows us to deliver fully custom mobile labels in India that are perfectly engineered for your products. Our comprehensive barcode label printing solutions extend beyond manufacturing to include everything from hardware and software to expert advice, making us a true one-stop-shop for your entire labeling ecosystem.
    </li>
    <li>
      <span className="font-bold">4. Unwavering Commitment to Quality</span><br />
      Our reputation is built on the quality of our work. Every label that leaves our facility undergoes rigorous quality checks to ensure it meets our high standards for durability, print quality, and scannability. This commitment to excellence ensures that our labels perform flawlessly in real-world applications, protecting your brand and streamlining your operations.
    </li>
    <li>
      <span className='font-bold'>5. Efficient & Localized Supply</span><br />
      <li>We leverage our strategic logistics network to provide prompt, radius-based supply to our clients. Whether you are 5 km, 10 km, or 15 km away, our commitment to fast and reliable delivery ensures your operations are never delayed, making our services feel like we are always just around the corner.</li>
    </li>
  </ul>
</div>

<hr />




<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
    Frequently Asked Questions (FAQs)
  </h2>
  <div className="flex flex-col md:flex-row md:items-start md:space-x-10">
    <div className="flex-1 space-y-6 text-xs xs:text-sm sm:text-base leading-relaxed text-gray-800">
      <div>
        <h3 className="font-semibold mb-1">1. What are Mobile Accessories Labels and why are they important?</h3>
        <p>
          Mobile accessories labels are printed tags containing essential information like product details, barcodes, and certifications. They are vital for product identification, brand protection, efficient inventory management, and ensuring compliance with market regulations in India.
        </p>
      </div>
      <div>
        <h3 className="font-semibold mb-1">2. How does IMEI label printing work?</h3>
        <p>
          IMEI label printing services involve generating a unique, variable barcode and serial number for each mobile device. This data is printed onto small, durable, and often tamper-evident labels using high-resolution thermal transfer printers, ensuring a unique and secure identity for every phone.
        </p>
      </div>
      <div>
        <h3 className="font-semibold mb-1">3. Which is the best company for Mobile Accessories Labels in India?</h3>
        <p>
          With a 23+ year legacy of excellence, SRSB Barcode Solutions is widely regarded as a leading mobile accessories labels manufacturer in India. Our deep expertise, unwavering commitment to quality, and comprehensive product portfolio—including specialized IMEI label printing services—make us the ideal partner for any business in the mobile and electronics industry.
        </p>
      </div>
    </div>
    <div className="flex-shrink-0 mt-8 md:mt-0 md:w-96 flex justify-center">
      <img src="/img2.png" alt="FAQ illustration" className="w-80 md:w-96 h-auto rounded-lg shadow" />
    </div>
  </div>
</div>

<hr />
<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif mb-2 sm:mb-4">Conclusion:-</h2>
  <p className="text-xs xs:text-sm sm:text-base font-sans text-black leading-relaxed">
 In a market where every detail matters, the label on your product can be the difference between a sale and a return, brand loyalty and a loss of trust. With SRSB Barcode Solutions, you are not just getting a product; you are gaining a strategic advantage built on two decades of unparalleled expertise.

Contact SRSB Barcode Solutions today to explore our comprehensive barcode and labeling solutions and secure your brand's future in the Indian market.
  </p>
</div>

    </main>
    </>
  );
}