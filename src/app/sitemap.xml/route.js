import MarketPlace from '../../MarketPlace';
import { labelServicesData } from '../../lib/services';
import location from '@/Location';
export async function GET() {
  const baseUrl = 'https://srsbbarcode.com'; // Change to your actual domain

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
   
  ];

  // Service pages
  const servicePages = Object.values(labelServicesData).map(
    (service) => `/service/${service.slug}`
  );

  // Location pages
  const locationPages = MarketPlace.map(
    (loc) => `/${loc.replace(/\s+/g, '')}`
  );
  const locationInPages = location.map(
    (loc) => `/in/${loc.replace(/\s+/g, '')}`
  );

  const allPages = [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...locationInPages,
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