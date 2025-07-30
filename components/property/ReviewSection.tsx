import { ReviewProps } from "@/interfaces/index";

interface ReviewSectionProps {
  reviews: ReviewProps[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (!reviews || reviews.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <div className="text-gray-400 text-lg mb-2">
          <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="text-gray-400 text-lg mb-2">No reviews yet</div>
        <p className="text-gray-600">Be the first to leave a review for this property!</p>
      </div>
    );
  }

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div>
      {/* Reviews Header */}
      <div className="flex items-center justify-between mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Guest Reviews</h3>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              {renderStars(averageRating)}
              <span className="text-lg font-semibold text-gray-800 ml-2">
                {averageRating.toFixed(1)}
              </span>
            </div>
            <span className="text-gray-600">
              Based on {reviews.length} review{reviews.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-indigo-600">{averageRating.toFixed(1)}</div>
          <div className="text-sm text-gray-500">out of 5</div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start space-x-4">
              {/* Avatar */}
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold text-lg">
                  {review.author.charAt(0).toUpperCase()}
                </span>
              </div>
              
              {/* Review Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">{review.author}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex">{renderStars(review.rating)}</div>
                      <span className="text-sm text-gray-500">
                        {formatDate(review.date)}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm font-medium">
                      {review.rating}/5
                    </div>
                  </div>
                </div>
                
                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mt-3">
                  &ldquo;{review.comment}&rdquo;
                </p>
                
                {/* Helpful Actions */}
                <div className="flex items-center space-x-4 mt-4 pt-3 border-t border-gray-100">
                  <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <span>Helpful</span>
                  </button>
                  <span className="text-gray-300">•</span>
                  <button className="text-sm text-gray-500 hover:text-gray-700">
                    Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Reviews Button */}
      {reviews.length > 3 && (
        <div className="text-center mt-8">
          <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 font-medium">
            Show all {reviews.length} reviews
          </button>
        </div>
      )}

      {/* Leave a Review CTA */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
        <div className="text-center">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Share Your Experience
          </h4>
          <p className="text-gray-600 mb-4">
            Help other guests by sharing your review of this property
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium">
            Write a Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
