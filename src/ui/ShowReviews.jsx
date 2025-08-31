import { memo } from "react";
import ReviewCard from "./ReviewCard";
import { FiMessageSquare } from "react-icons/fi";

const ShowReviews = memo(function ShowReviews({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 bg-gray-50 rounded-lg border border-gray-200 space-y-4">
        <FiMessageSquare size={64} className="text-gray-400" />

        <p className="text-gray-600 text-lg font-medium text-center">
          There are no reviews yet.
        </p>
      </div>
    );
  }

  console.log(reviews);

  return (
    <div className="grid grid-cols-1 gap-4 ">
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  );
});

export default ShowReviews;
