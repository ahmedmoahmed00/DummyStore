import { FaRegStar, FaStar, FaStarHalfStroke } from "react-icons/fa6";

function Stars({
  maxStars = 5,
  rating = 2.5,
  size = 22,
  showrating = true,
  gap = 2,
}) {
  const filledStars = Math.floor(rating);
  const halfFilledStars = rating % 1 > 0.3 ? 1 : 0;
  const emptyStars = maxStars - filledStars - halfFilledStars;

  return (
    <div className="flex items-center gap-2">
      <div style={{ gap: `${gap}px` }} className={`flex items-center`}>
        {Array.from({ length: filledStars }).map((_, i) => {
          return (
            <FaStar
              key={i}
              size={size}
              className="fill-yellow-400 text-yellow-400"
            />
          );
        })}
        {halfFilledStars > 0 && (
          <FaStarHalfStroke size={size} className="fill-yellow-400 " />
        )}
        {Array.from({ length: emptyStars }).map((_, i) => {
          return <FaRegStar key={i} className="text-gray-400" size={size} />;
        })}
      </div>
      {showrating && (
        <div>
          <p className="text-gray-600 text-sm">{rating}</p>
        </div>
      )}
    </div>
  );
}

export default Stars;
