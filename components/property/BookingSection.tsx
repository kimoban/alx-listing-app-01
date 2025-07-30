import { useState } from "react";

interface BookingSectionProps {
  price: number;
  rating: number;
  reviewCount: number;
}

const BookingSection: React.FC<BookingSectionProps> = ({ price, rating, reviewCount }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-sm ${
          index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const nights = calculateNights();
  const subtotal = nights * price;
  const serviceFee = Math.round(subtotal * 0.14); // 14% service fee
  const cleaningFee = 62; // Fixed cleaning fee
  const taxes = Math.round(subtotal * 0.12); // 12% taxes
  const total = subtotal + serviceFee + cleaningFee + taxes;

  const handleReserve = () => {
    if (!checkIn || !checkOut) {
      alert('Please select check-in and check-out dates');
      return;
    }
    alert(`Reservation request submitted for ${nights} night${nights > 1 ? 's' : ''} - Total: $${total.toLocaleString()}`);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg sticky top-8">
      {/* Price and Rating Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-baseline">
          <span className="text-2xl font-bold text-gray-900">${price.toLocaleString()}</span>
          <span className="text-gray-600 ml-1 text-base">per night</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="flex">{renderStars(rating)}</div>
          <span className="text-sm text-gray-600 ml-1">
            ({reviewCount} review{reviewCount !== 1 ? 's' : ''})
          </span>
        </div>
      </div>

      {/* Booking Form */}
      <div className="space-y-4 mb-6">
        {/* Check-in/Check-out */}
        <div className="grid grid-cols-2 border border-gray-300 rounded-lg overflow-hidden">
          <div className="p-3 border-r border-gray-300">
            <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">
              Check-in
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full text-sm border-none outline-none bg-transparent"
              aria-label="Check-in date"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className="p-3">
            <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">
              Checkout
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full text-sm border-none outline-none bg-transparent"
              aria-label="Check-out date"
              min={checkIn || new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>

        {/* Guests */}
        <div className="border border-gray-300 rounded-lg p-3">
          <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">
            Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full text-sm border-none outline-none bg-transparent"
            aria-label="Number of guests"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((num) => (
              <option key={num} value={num}>
                {num} guest{num > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Reserve Button */}
      <button
        onClick={handleReserve}
        className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
          !checkIn || !checkOut
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
        }`}
        disabled={!checkIn || !checkOut}
      >
        {!checkIn || !checkOut ? 'Select dates' : 'Reserve'}
      </button>

      <p className="text-center text-gray-600 text-sm mt-3">
        You won&apos;t be charged yet
      </p>

      {/* Price Breakdown */}
      {nights > 0 && (
        <div className="mt-6 space-y-3 border-t pt-4">
          <div className="flex justify-between text-gray-700">
            <span className="underline">${price.toLocaleString()} x {nights} night{nights > 1 ? 's' : ''}</span>
            <span>${subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span className="underline">Cleaning fee</span>
            <span>${cleaningFee}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span className="underline">Service fee</span>
            <span>${serviceFee}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span className="underline">Taxes</span>
            <span>${taxes}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg border-t pt-3 text-gray-900">
            <span>Total before taxes</span>
            <span>${total.toLocaleString()}</span>
          </div>
        </div>
      )}

      {/* Additional Info */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Free cancellation for 48 hours</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>This is a rare find</span>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
