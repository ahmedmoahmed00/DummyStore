import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { formatCurrency, getOriginalPrice } from "../utils/helpers";
import { useInView } from "../hooks/useInView";
import { useCart } from "../context/useCart";
import toast from "react-hot-toast";
import { useMemo } from "react";

function ProductBox({ item }) {
  const percent = Math.round(item.discountPercentage);
  const { ref, visible } = useInView(0);
  const { addItemToCart, checkItemInCart, incrementQuantity } = useCart();

  const isInCart = useMemo(
    () => checkItemInCart(item.id),
    [checkItemInCart, item.id]
  );

  function handleCartToggle() {
    if (!isInCart) {
      const data = { ...item, quantity: 1 };
      addItemToCart(data);
      toast.success("Product added to cart!");
    } else {
      const { message, success } = incrementQuantity(item.id);
      if (success) {
        toast.success(`Product quantity increased by 1.`);
      } else {
        toast.error(message);
      }
    }
  }

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col`}
    >
      <div className=" relative">
        <img
          alt={item.title}
          className=" h-52 object-cover mx-auto w-auto rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
          src={item.images?.[0] || item.thumbnail}
          crossOrigin="anonymous"
          loading="lazy"
        />
        <span
          className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded shadow-sm drop-shadow-sm"
          aria-label={`Discount ${percent}%`}
          title={`Discount ${percent}%`}
        >
          -{percent}%
        </span>{" "}
      </div>
      <div className={`p-4 flex-1 flex flex-col justify-between`}>
        <div
          className={`${
            visible
              ? " translate-y-0 opacity-100 "
              : " translate-y-10 opacity-0 "
          }  transition-all duration-700 ease-out`}
        >
          <h3 className="text-lg font-medium text-gray-800 mb-1 line-clamp-2">
            {item.title}
          </h3>
          <div className="flex items-center gap-1 mb-2">
            <Star size={14} className=" text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-gray-600">{item.rating}</span>
          </div>
        </div>
        <div
          className={` ${
            visible
              ? " translate-y-0 opacity-100 "
              : " translate-y-10 opacity-0 "
          }  transition-all duration-700 ease-out delay-200 flex items-center gap-2 mb-4`}
        >
          <span className="text-xl font-bold text-gray-900">
            {formatCurrency(item.price)}
          </span>
          <span className="text-sm text-gray-700 line-through">
            {item.discountPercentage
              ? formatCurrency(
                  getOriginalPrice(item.price, item.discountPercentage)
                )
              : null}
          </span>
        </div>
        <div className=" gap-3 mx-auto flex flex-col w-full justify-between">
          <button
            onClick={handleCartToggle}
            className="mt-2  inline-flex items-center justify-center gap-2 px-3 py-2  rounded-xl cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border-black border-2"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
          <Link
            className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white text-black hover:text-white hover:bg-black   hover:border-black border-2"
            to={`/products/${item.id}`}
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
