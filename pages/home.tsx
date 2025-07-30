import Link from 'next/link';
import { PROPERTYLISTINGSAMPLE } from '@/constants';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ALX Listing App
          </h1>
          <p className="text-lg text-gray-600">
            Discover amazing properties for your next getaway
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <Link
              key={index}
              href={`/property/${encodeURIComponent(property.name)}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {property.name}
                </h3>
                <p className="text-gray-600 mb-2">
                  {property.address.city}, {property.address.country}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-gray-700 font-medium">
                      {property.rating}
                    </span>
                    <span className="text-gray-500">
                      ({property.reviews?.length || 0} reviews)
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">
                      ${property.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">per night</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Click on any property to view its detailed information, amenities, reviews, and booking options.
          </p>
        </div>
      </div>
    </div>
  );
}
