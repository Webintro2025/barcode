import MarketPlace from '../../MarketPlace';
import { labelServicesData } from '../../lib/services';
import location from '@/Location';

export async function GET() {
  const baseUrl = 'https://srsbbarcode.com';

  const staticPages = [
    '',
    '/about',
    '/contact',
  ];

  const servicePages = Object.values(labelServicesData).map(
    (service) => `/service/${service.slug}`
  );

  const locationPages = MarketPlace.map(
    (loc) => `/${loc.replace(/\s+/g, '')}`
  );

 

  // NEW: garments labels pages
  const garmentsLocationPages = location.map(
    (loc) => `/garments-labels-manufacturer-in/${loc}`
  );
  const rfid = location.map(
    (loc) => `/rfid-tag-labels-manufacturer-in/${loc}`
  );
  const allPages = [
    ...staticPages,
    ...servicePages,
    ...locationPages,
  
    ...garmentsLocationPages, // add here
    ...rfid, // add here
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    allPages.map((page) =>
      `  <url>\n    <loc>${baseUrl}${page}</loc>\n  </url>`
    ).join('\n') +
    '\n</urlset>';

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}