
import { labelServicesData } from '@/lib/services';
import { notFound } from 'next/navigation';

export default async function ServicePage({ params }) {
  const { slug } = await params; // ✅ REQUIRED
  // Find the service by slug in labelServicesData (support both old and new structures)
  const service = Object.values(labelServicesData).find(s => s.slug === slug || s.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug);

  if (!service) {
    return notFound();
  }

  // Helper to render array sections
  const renderListSection = (title, arr, icon) => (
    arr && arr.length > 0 && (
      <div className="mb-8 w-full">
        <h2 className="text-2xl font-bold text-indigo-700 mb-3 flex items-center gap-2">
          {icon && <span>{icon}</span>}{title}
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800 text-base sm:text-lg">
          {arr.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    )
  );

  return (
    <div className="w-full mt-36 pb-12 flex flex-col items-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center text-gray-900 drop-shadow-lg tracking-tight">
        {service.title}
      </h1>
      {/* Show video for softwareLabel, else show image */}
      {service.video ? (
        <div className="overflow-hidden group rounded-xl mb-8 flex justify-center items-center bg-white" style={{ width: 320, height: 320 }}>
          <video
            src={service.video}
            controls
            className="object-contain w-full h-full"
            style={{ width: '320px', height: '320px' }}
            poster={service.image}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      ) : service.image && (
        <div className="overflow-hidden group rounded-xl mb-8 flex justify-center items-center bg-white" style={{ width: 320, height: 320 }}>
          <img
            src={service.image}
            alt={service.title}
            className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
            style={{ width: '320px', height: '320px', transition: 'transform 0.5s' }}
          />
        </div>
      )}
      <div className="w-full px-4 sm:px-8 lg:px-16 py-8 flex flex-col items-center bg-white bg-opacity-90 rounded-xl">
        {service.about && (
          <p className="text-lg sm:text-xl text-gray-700 text-center mb-8 font-medium">
            {service.about}
          </p>
        )}
        {/* First row: Why Choose Us & Why Important */}
        <div className="w-full flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-1">{renderListSection('Why Choose Us', service.whyChooseUs, '✅')}</div>
          <div className="flex-1">{renderListSection('Why Important', service.whyImportant || service.whyWeAreImportant, '⭐')}</div>
        </div>
        {/* Second row: Advantages & Benefits & Why We Are Unique */}
        <div className="w-full flex flex-col md:flex-row gap-8">
          <div className="flex-1">{renderListSection('Advantages & Benefits', service.advantagesAndBenefits, '💡')}</div>
          <div className="flex-1">{renderListSection('Why We Are Unique', service.whyWeAreUnique, '🌟')}</div>
        </div>
      </div>
    </div>
  );
}
