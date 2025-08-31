import Stars from "./Stars";
import { formatDate } from "../utils/helpers";
import useUniqueAvatar from "../hooks/useUniqueAvatar";

function ReviewCard({ review }) {
  return (
    <div
      key={review.id}
      className="p-6 bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 shadow-sm"
    >
      <header className="flex items-center justify-between">
        <div className="flex items-center  gap-2">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src={useUniqueAvatar(review.reviewerEmail)}
              alt={`Avatar ${review.reviewerName}`}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-sm md:text-lg">
              {review.reviewerName}
            </p>
            <p className="text-[12px] text-gray-600">
              {formatDate(review.date)}
            </p>
          </div>
        </div>
        <div>
          <Stars rating={review.rating} size={16} showrating={false} />
        </div>
      </header>
      <div>
        <p>{review.comment}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
