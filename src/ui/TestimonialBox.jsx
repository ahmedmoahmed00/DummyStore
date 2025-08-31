import sarah from "../assets/Avatar/sarah.jpg";
import Stars from "./Stars";

function TestimonialBox() {
  return (
    <div className="relative flex flex-col justify-between w-100  cursor-pointer rounded-xl border p-4 transition-transform duration-300 hover:scale-105 border-gray-900/[.3] bg-gray-50">
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center gap-3">
          <img
            loading="lazy"
            className="rounded-full w-10 h-10 border-2 border-purple-100"
            src={sarah}
            alt="Avatar Srah"
          />
          <div>
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold text-black">
                Sarah Johnson
              </h3>
              <p className="text-xs font-medium text-gray-900">@sarahj_shop</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 mt-2 mb-2 ">
          <Stars maxStars={5} rating={5} size={16} showrating={false} />
        </div>
      </div>
      <div>
        <div className="mt-2 text-sm leading-relaxed text-black ">
          Amazing product quality and super fast shipping! My iPhone arrived in
          perfect condition. DummyStore is now my go-to for electronics.
        </div>
      </div>
      <div className="mt-3 pt-2 border-t border-gray-300 ">
        <p className="text-xs font-medium text-pink-800 ">
          Purchased: iPhone 15 Pro
        </p>
      </div>
    </div>
  );
}

export default TestimonialBox;
