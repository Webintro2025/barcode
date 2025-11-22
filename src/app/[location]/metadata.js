export function generateMetadata({ params }) {
	const rawLocation = params?.location || "India";

	const locationName = decodeURIComponent(rawLocation)
		.replace(/-/g, " ")
		.replace(/\s+/g, " ")
		.trim()
		.replace(/\b\w/g, (c) => c.toUpperCase());

	const baseTitle = "SRSB Barcode Solutions";

	const title = `${baseTitle} | Barcode Labels, Printers & Scanners in ${locationName}`;

	const description = `SRSB Barcode Solutions provides barcode labels, printers, scanners, ribbons and software in ${locationName}. Get reliable barcode systems, thermal labels, asset tracking and inventory management solutions with fast support.`;

	const keywords = [
		"SRSB Barcode Solutions",
		"barcode labels",
		"barcode printers",
		"barcode scanners",
		"barcode ribbons",
		"barcode software",
		"thermal labels",
		"asset tracking",
		"inventory management",
		"label printing",
		"barcode solutions",
		"custom barcode labels",
		`barcode solutions in ${locationName}`,
		`barcode labels in ${locationName}`,
		`barcode printers in ${locationName}`,
		`barcode scanners in ${locationName}`,
	];

	const baseUrl = "https://www.srsbbarcode.com";
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

export default generateMetadata;

