import { PropertyProps } from "@/interfaces/index";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'amenities' | 'reviews'>('overview');

  const tabs = [
    { id: 'overview', label: 'What we offer' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'reviews', label: 'Reviews' }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li>
              <Link href="/properties" className="text-gray-500 hover:text-gray-700 transition-colors">
                Properties
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li>
              <span className="text-gray-900 font-medium">{property.name}</span>
            </li>
          </ol>
        </nav>

        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {property.name}
          </h1>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-1">
                {renderStars(property.rating)}
                <span className="ml-2 text-gray-700 font-semibold">
                  {property.rating}
                </span>
                <span className="text-gray-500">
                  ({property.reviews?.length || 0} reviews)
                </span>
              </div>
              
              <div className="flex items-center space-x-1 text-gray-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{property.address.city}, {property.address.state}, {property.address.country}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a1 1 0 00.364 0l1.818-.78v3.957a8.972 8.972 0 00-1.7 1.638z" />
                </svg>
                <span>{property.offers.bed} beds</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM12 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM12 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" clipRule="evenodd" />
                </svg>
                <span>{property.offers.shower} baths</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
                <span>{property.offers.occupants} guests</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              <span className="text-sm font-medium">Share</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-sm font-medium">Save</span>
            </button>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-8 h-64 sm:h-80 md:h-96">
          <div className="md:col-span-2 md:row-span-2 relative">
            <Image
              src={property.image}
              alt={property.name}
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-lg"
              priority
            />
          </div>
          {property.images?.slice(1, 5).map((image: string, index: number) => (
            <div key={index} className={`relative ${index >= 2 ? 'hidden md:block' : ''}`}>
              <Image
                src={image}
                alt={`${property.name} ${index + 2}`}
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Section - Property Details */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            {/* Property Type and Host Info */}
            <div className="border-b pb-6 mb-6">
              <h2 className="text-xl font-semibold mb-2">
                {property.category[0]} hosted by Property Owner
              </h2>
              <p className="text-gray-600">
                {property.offers.occupants} guests · {property.offers.bed} bedrooms · {property.offers.shower} bathrooms
              </p>
            </div>

            {/* Tabs Navigation */}
            <div className="border-b mb-6">
              <nav className="flex space-x-4 sm:space-x-8 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as 'overview' | 'amenities' | 'reviews')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-gray-900 text-gray-900'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="mb-8">
              {activeTab === 'overview' && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">About this place</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {property.description}
                  </p>
                  {property.discount && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-medium text-green-800 mb-1">Special Offer</h4>
                      <p className="text-green-700">{property.discount}</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'amenities' && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {property.amenities?.map((amenity: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-xs text-green-600">✓</span>
                        </div>
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <ReviewSection reviews={property.reviews || []} />
              )}
            </div>

            {/* Category Tags */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Property Features</h3>
              <div className="flex flex-wrap gap-2">
                {property.category.map((cat: string, index: number) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <BookingSection 
                price={property.price} 
                rating={property.rating}
                reviewCount={property.reviews?.length || 0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
