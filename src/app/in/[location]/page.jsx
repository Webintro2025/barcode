import ConsultationForm from '@/components/ConsultationForm';
import locationList from '@/Location';


export function generateMetadata({ params }) {
	const rawLocation = params?.location || "india";

	const locationName = decodeURIComponent(rawLocation)
		.replace(/-/g, " ")
		.replace(/\s+/g, " ")
		.trim()
		.replace(/\b\w/g, (c) => c.toUpperCase());

	const baseTitle = "SRSB Barcode Solutions";

	const title = `Garments Labels Manufacturer in ${locationName}, SRSB Barcode Solutions`;

	const description = `Need Garments Labels Manufacturer in ${locationName} Call SRSB Barcode Solutions, Footwear Industry Labels Manufacture in ${locationName}, QR Code Printing Service.`;

	const keywords = [
		`Garments labels manufacturer in ${locationName}`,
		`Garments labels manufacturer in ${locationName}, India`,
		`Woven labels manufacturer in ${locationName}`,
		`Satin labels manufacturer in ${locationName}`,
		`Taffeta labels manufacturer in ${locationName}`,
		`Footwear labels manufacturer in ${locationName}`,
		`Carton labels manufacturer in ${locationName}`,
		`Label printing in ${locationName}`,
		`QR code label printing in ${locationName}`,
		`Product labels manufacturer in ${locationName}`,
		`Transparent labels manufacturer in ${locationName}`,
		`Vinyl labels manufacturer in ${locationName}`,
		`PVC labels manufacturer in ${locationName}`,
		`Garment label printing services in ${locationName}`,
		`Best garments labels supplier in ${locationName}`,
		`Custom clothing labels in ${locationName}`,
		`Barcode labels and printing in ${locationName}`,
	];

	const baseUrl = "https://www.srsbbarcode.com/in";
	const pathSegment = encodeURIComponent(rawLocation.toLowerCase());
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



export default function LocationPage({ params }) {
  const { location } = params;

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
     Garments Labels Manufacturer in {locationName}
    </h1>
    <p className="text-white font-medium text-[10px] xs:text-xs sm:text-sm md:text-base mt-2 sm:mt-4 max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl drop-shadow">
      Welcome To <a href="https://srsbbarcode.com/">SRSB Barcode Solutions</a>, If You Are Looking For <strong>Garments Labels Manufacturer in {locationName}</strong>, We Are The Best Option For You. We Manufacture <strong>Best Garments Labels Supplier in {locationName}</strong>, <strong>Footwear Industry Labels Manufacture in {locationName}</strong>, India.
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
          Garments Labels Manufacturer in {locationName} – SRSB Barcode Solutions
        </h2>
        <p className="mb-4 sm:mb-6 max-w-[600px] text-xs xs:text-sm sm:text-base leading-relaxed font-normal">
          As a leading <strong>Garments Labels Manufacturer in {locationName}</strong>, we deliver high-performance, precisely crafted, and fully customized labeling solutions designed to elevate brand identity, product presentation, and customer trust. In the highly competitive textile and apparel ecosystem, labels serve as the most powerful branding tool—showcasing quality, authenticity, and attention to detail. Our advanced manufacturing capabilities, premium-grade materials, and world-class printing technology allow us to produce labels that outshine and outperform traditional labeling standards.
          <br />
          <br />
          We specialize in a wide range of <strong>Garments Labels Manufacturer in {locationName}</strong>, including Woven Labels, Satin Labels, Taffeta Labels, Footwear Industry Labels, Carton Labels, Label Printing, QR Code Printing, Product Labels, Transparent Labels, Vinyl Labels, and PVC Labels. Every label is crafted to perfection, ensuring durability, clarity, and unmatched visual appeal.
          <br />
          <br />
        </p>
      </section>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          alt={`Blood Bank Refrigerator Manufacturers in ${locationName}`}
          className="object-cover rounded-lg w-full max-w-[350px] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-auto shadow"
          height={500}
          src="/img6.png"
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
      The Leading Garments Labels Manufacturer in {locationName}
    </h2>
    <p className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-xl">
      As a premier <strong>Garments Labels Manufacturer in {locationName}</strong>, we create world-class labels that reflect the sophistication and identity of your brand. Whether you're an apparel manufacturer, exporter, boutique brand, or fashion label, your garments deserve labels that highlight excellence. Our innovative production techniques and extensive material options enable us to deliver labels that withstand rigorous washing, ironing, and daily wear without fading or fraying.
      <br />
      <br />
      We offer end-to-end solutions from conceptualization and design to final <a href="https://en.wikipedia.org/wiki/Clothing_label">Printing</a> and finishing ensuring your labels align with your brand's aesthetic and functional requirements.
    </p>
  </div>
  <div >
   
    <ConsultationForm />
  </div>
</div>







<hr />




<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
    Our Comprehensive Product Range in {locationName}
  </h2>
  <div className="space-y-8 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6]">
    <p>
      As a leading <strong>Garments Labels Manufacturer in {locationName}</strong>, we offer one of the most extensive and high-performance label ranges in the industry. Our labels are designed to add value to your garments, enhance brand visibility, support product authentication, and deliver a premium experience to your customers. Each product is manufactured using advanced technology, high-grade materials, and rigorous quality standards. Below is a complete overview of our full product range, explained in detail.
    </p>
    <div>
      <span className="font-bold block mb-1">1. Garments Labels Manufacture in {locationName} </span>
      <p>
        We specialize in producing custom clothing labels for all types of brandswhether small boutique designers or large-scale garment exporters. These labels showcase your brand name, size, care instructions, and other essential details. Our garment labels are crafted to withstand wash cycles, friction, and long-term usage while maintaining clarity and sharpness. As the top <strong>Garments Labels Manufacturer in {locationName}</strong>, we ensure every label reflects your brands identity and professionalism.
      </p>
    </div>
    <div>
      <span className="font-bold block mb-1">2. Woven Labels Manufacture in {locationName}</span>
      <p>
        Woven Labels are the most premium and widely used labels in the fashion industry. Manufactured on high-precision looms, these labels are created using fine polyester yarns that give a luxurious texture and long-lasting finish. They are perfect for branding high-value clothing like shirts, denim, jackets, ethnic wear, kidswear, and more.<strong> Woven Labels Manufacture in {locationName}</strong> These labels maintain durability even after multiple washes, making them ideal for both domestic and export-quality garments.
      </p>
    </div>
    <div>
      <span className="font-bold block mb-1">3. Satin Labels Manufacture in {locationName}</span>
      <p>
        Satin Labels offer a soft, glossy, and elegant appearance that enhances the premium feel of any garment. They are gentle on the skin, making them a preferred choice for innerwear, kidswear, and luxury apparel. <strong>Satin Labels Manufacture in {locationName}</strong> allow smooth printing of logos, care instructions, and brand names with high readability. Their silky texture adds a touch of sophistication to the product.
      </p>
    </div>
    <div>
      <span className="font-bold block mb-1">4. Taffeta Labels Manufacture in {locationName}</span>
      <p>
        Taffeta Labels are known for their strength, cost-effectiveness, and high clarity. They are widely used in mass-production clothing, uniforms, corporate wear, and value-priced garments. Despite being economical, <strong>Taffeta Labels Manufacture in {locationName}</strong> provide excellent durability and resistance to wear and tear. They hold printed text and designs very well, making them ideal for care labels, wash instructions, size tags, and branding labels.
      </p>
    </div>
    <div>
      <span className="font-bold block mb-1">5. Footwear Industry Labels Manufacture in {locationName}</span>
      <p>
        Our specialized Footwear Labels are designed to handle rough usage, moisture, and continuous friction. These labels are produced using long-lasting materials that do not peel off or fade easily. They are commonly used for branding shoes, slippers, sandals, sports footwear, safety shoes, and leather products. <strong>Footwear Industry Labels Manufacture in {locationName}</strong> can be customized for size numbering, logos, model codes, and other branding needs.
      </p>
    </div>
    <div>
      <span className="font-bold block mb-1">6. Carton Labels Manufacture in {locationName}</span>
      <p>
        Carton Labels are essential for packaging, product identification, logistics, and inventory management. We manufacture high-quality carton labels that adhere strongly to cardboard surfaces and withstand rough transport conditions. <strong>Carton Labels Manufacture in {locationName}</strong> These labels come with options like waterproof material, barcode printing, high-tack glue, and smudge-proof printing ensuring your packaging remains professional and traceable throughout the supply chain.
      </p>
    </div>
    <div>
      <span className="font-bold block mb-1">7. Label Printing Manufacture in {locationName}</span>
      <p>
        We offer full-service Label Printing Solutions, covering all types of label materials, finishes, colors, and textures. Whether you need high-definition branding labels, price tags, product labels, or barcode stickers, our advanced printing technology ensures sharpness, accuracy, and long-lasting results. <strong>Label Printing Manufacture in {locationName}</strong> We use fade-resistant inks and durable materials that maintain quality even after prolonged usage.
      </p>
    </div>
    <div>
      <span className="font-bold block mb-1">8. QR Code Printing Service in {locationName}</span>
      <p>
        In today's digital world, <strong>QR Code Printing Service in {locationName}</strong> are essential for product authentication, tracking, marketing, and customer interaction. Our QR-printed labels deliver precise scanning results and can be printed on various materials such as vinyl, PVC, paper, or fabric. Brands use these labels for warranty activation, customer engagement, digital manuals, traceability, and anti-counterfeit protection.
      </p>
    </div>
    <div>
      <span className="font-bold block mb-1">9. Product Labels Manufacture in {locationName}</span>
      <p>
        Our Product Labels are used across industries garments, cosmetics, electronics, accessories, food packaging, home décor, and more. These labels carry essential information like branding, ingredients, instructions, pricing, safety guidelines, and barcodes. <strong>Product Labels Manufacture in {locationName}</strong> We produce long-lasting product labels that resist moisture, chemicals, oils, and sunlight, ensuring your product always looks professional on retail shelves.
      </p>
    </div>
    <div>
      <span className="font-bold block mb-1">10. Transparent Labels Manufacture in {locationName}</span>
      <p>
        Transparent Labels offer a clean, modern, and premium look, ideal for brands wanting a "no-label" aesthetic. These labels are printed on clear film materials, allowing the product surface to remain visible. <strong>Transparent Labels Manufacture in {locationName}</strong> are commonly used on cosmetics, glass bottles, food containers, gift items, and luxury packaging. They provide a flawless finish that enhances the product's visual appeal.
      </p>
    </div>
    <div>
      <span className="font-bold block mb-1">11. Vinyl Labels Manufacture in {locationName}</span>
      <p>
        Vinyl Labels are known for their extreme durability and weather resistance. They are waterproof, UV-resistant, and highly flexible, making them ideal for outdoor products, accessories, appliances, industrial equipment, and long-term branding. <strong>Vinyl Labels Manufacture in {locationName}</strong> maintain color quality even under sunlight, rain, or rough environmental conditions.
      </p>
    </div>
    <div>
      <span className="font-bold block mb-1">12. PVC Labels Manufacture in {locationName}</span>
      <p>
        PVC Labels are strong, long-lasting, and available in various thicknesses and textures. These labels can be printed, embossed, or made in 3D forms, creating a premium branding effect. They are commonly used for bags, footwear, sportswear, jackets, and corporate promotional items. <strong>PVC Labels Manufacture in {locationName}</strong> are highly durable, giving your brand a stylish and modern identity.
      </p>
    </div>
  </div>

  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6 mt-6 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
    <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-blue-800 mb-2 text-center">📞 Contact us today to discuss your requirements, request a quote, or place an order.</h3>
  <p className="text-xs xs:text-sm sm:text-base text-gray-800 mb-2 text-center">If you are Looking for the <strong>Garments Labels Manufacturer in {locationName}</strong>? SRSB Barcode Solutions is your trusted partner.</p> <br/> 
      <ul className="list-disc pl-4 sm:pl-6 text-xs xs:text-sm sm:text-base text-gray-700 mb-2">
      <li>👉 <strong>Call Now:</strong> +91-9810244624</li>
      <li>👉 <strong>Visit Our Website</strong> <a href="https://srsbbarcode.com">www.srsbbarcode.com</a></li>
      <li>👉 <strong>Our Email Address</strong> – info@srsbbarcode.com </li>
    </ul>
  </div>
</div>







<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
    Why Choose Us – The Most Trusted Garments Labels Manufacturer in {locationName}
  </h2>
  <p className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6]">
    Choosing the right labeling partner is one of the most important decisions for any apparel or fashion brand. Your label is the first point of connection between your product and your customer it reflects quality, reliability, and the identity of your brand. As one of the most experienced and quality-focused <strong>Garments Labels Manufacturer in {locationName}</strong>, we stand out because we deliver not just labels, but long-term value, precision, durability, and brand excellence. Below is a detailed explanation of why top garment manufacturers, fashion houses, export units, and retail brands trust us for their labeling requirements.
  </p>
  <ul className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6] list-none">
    <li>
      <span className="font-bold">1. Unmatched Quality That Reflects Your Brand Standards</span><br />
      In the fashion and apparel industry, quality cannot be compromised. Every label we produce undergoes stringent quality checks to ensure absolute perfection. We use high-density woven threads, premium satin fabrics, durable taffeta materials, and top-grade adhesives to ensure that your labels stay intact even after repeated washing, ironing, or daily wear. Our labels retain their colors, edges, and readability over long periods, helping your brand maintain a strong, professional identity.
    </li>
    <li>
      <span className="font-bold">2. Complete Customization to Match Your Brand Identity</span><br />
      Every brand has its own unique style, aesthetic, and personality. That’s why we offer complete customization in design, size, color, typography, material, weave density, finish, and printing techniques. Whether you need a luxury woven label for a premium clothing line or a simple taffeta care label for mass production, we tailor every detail to align perfectly with your brand. You get exactly what represents your brand’s essence—no compromises, no templates, just pure customization.
    </li>
    <li>
      <span className="font-bold">3. Advanced Printing & Manufacturing Technology</span><br />
      What sets us apart as a leading Garments Labels Manufacturer in India is our investment in world-class production technology. Our facility is equipped with advanced looms, thermal transfer printers, digital printing systems, flexographic printers, and high-resolution machines capable of producing crystal-clear text, barcodes, and QR codes. This ensures your labels are not only visually appealing but also technologically accurate for scanning, tracking, and authentication.
    </li>
    <li>
      <span className="font-bold">4. Durability That Withstands Harsh Conditions</span><br />
      Garments undergo a variety of treatmentswashing, drying, ironing, dry cleaning, stretching, and daily use. Our <strong>Garments Labels Manufacturer in {locationName}</strong> are specifically engineered to withstand all of these conditions without fading, tearing, shrinking, or peeling. Whether it’s a satin label for children’s wear or a vinyl label for outdoor products, we ensure exceptional durability. This adds long-term value, reduces returns, and enhances customer satisfaction.
    </li>
    <li>
      <span className="font-bold">5. Wide Product Range for All Industries</span><br />
      Unlike suppliers who focus on limited product categories, we offer a complete spectrum of labels under one roof. From woven labels to satin tags, from QR code printing to carton labeling. we meet all your labeling needs without you having to coordinate with multiple vendors. This saves time, reduces cost, and ensures brand consistency across all product types. Our ability to serve fashion, footwear, retail, packaging, and industrial sectors makes us a versatile and reliable partner.
    </li>
    <li>
      <span className="font-bold">6. Expertise Backed by Years of Experience</span><br />
      Experience matters especially in an industry where precision and brand identity are crucial. With years of expertise as a <strong>Garments Labels Manufacturer in {locationName}</strong>, we deeply understand the needs of apparel manufacturers, boutique brands, and export houses. Our rich industry knowledge enables us to recommend the right materials, finishes, and printing techniques for your product line. We don't just produce labels—we guide you toward the best labeling solutions for your brand’s long-term growth.
    </li>
    <li>
      <span className="font-bold">7. Fast Production, On-Time Delivery & Hassle-Free Service</span><br />
      We understand that apparel manufacturing runs on deadlines. Delayed labels can delay entire production batches. That’s why we prioritize fast production and on-time delivery without compromising quality. Our streamlined workflow, skilled workforce, and automated processes ensure you receive your labels quickly, safely, and accurately. With smooth communication, flexible ordering, and professional support, we deliver a completely hassle-free experience.
    </li>
    <li>
      <span className="font-bold">8. Affordable Pricing Without Compromising Quality</span><br />
      Premium labels don’t have to come with premium pricing. We offer competitive and budget-friendly rates due to our optimized manufacturing, bulk production capabilities, and efficient material sourcing. This allows businesses of all sizes—from startups to large export houses—to access high-quality labels without financial strain. You get world-class quality at cost-effective prices, making your branding investment truly worthwhile.
    </li>
    <li>
      <span className="font-bold">9. Commitment to Long-Term Partnerships</span><br />
      We don't believe in one-time transactions—we believe in building long-term relationships. When you choose us, you’re choosing a dedicated partner committed to your brand’s success. Our team stays connected with you throughout production, offering assistance, design improvements, suggestions, and future support. Your growth is our priority, and we take pride in being the trusted choice of brands across India.
    </li>
    <li>
      <span className="font-bold">10. A Reputation Built on Trust, Consistency & Excellence</span><br />
      Our reputation as a leading <strong>Garments Labels Manufacturer in {locationName}</strong> is built on years of consistent excellence, satisfied clients, and innovative solutions. With thousands of successful deliveries and countless brands relying on our labeling expertise, we have established a strong position in the industry. Our reliability, honesty, quality, and professionalism make us the preferred choice for garment labeling solutions nationwide.
    </li>
  </ul>
</div>

<hr />






<hr />
<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif mb-2 sm:mb-4">Conclusion:-</h2>
  <p className="text-xs xs:text-sm sm:text-base font-sans text-black leading-relaxed">
 In today’s competitive apparel and manufacturing market, every detail matters—and your product label is one of the strongest elements of your brand identity. As a trusted <strong>Garments Labels Manufacturer in {locationName}</strong>, we are committed to delivering premium-quality labels that enhance the visual appeal, durability, and authenticity of your garments and products. Our complete range of woven labels, satin labels, taffeta labels, product labels, QR code labels, transparent labels, vinyl labels, PVC labels, and footwear labels ensures that every brand finds a perfect solution for its unique requirements. With advanced production technology, strict quality control, and a deep understanding of industry standards, we provide labels that stand the test of time and reflect the true professionalism of your brand. Whether you are a startup clothing brand, a large garment exporter, or an industrial manufacturer, our labeling solutions help you build trust, improve product presentation, and create a stronger connection with your customers. Choosing us means choosing reliability, innovation, and excellence—qualities that define why we are recognized as one of the most dependable <strong>Garments Labels Manufacturer in {locationName}</strong>.
  </p>
</div>

    </main>
    </>
  );
}