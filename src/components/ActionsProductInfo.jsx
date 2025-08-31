import { GoShareAndroid } from "react-icons/go";
import { useShare } from "../hooks/useShare";
import toast from "react-hot-toast";
import { useCart } from "../context/useCart";
import { Heart } from "lucide-react";

function ActionsProductInfo({ item, quantity }) {
  const { share } = useShare();
  const {
    checkItemInCart,
    addItemToCart,
    incrementQuantity: incrementQuantityCart,
  } = useCart();

  const itemInCart = checkItemInCart(item.id);

  const handleShareClick = () => {
    share({
      title: "Super Cool Product",
      text: "Check out this amazing product!",
      url: window.location.href,
    });
  };

  function handelAddItem() {
    if (!itemInCart) {
      addItemToCart({ ...item, quantity });
      toast.success("Product added to cart!");
    } else {
      const { success, message } = incrementQuantityCart(item.id, quantity);

      if (success) {
        toast.success(`Added ${quantity} more items to your cart.`);
      } else {
        toast.error(message);
      }
    }
  }

  return (
    <div className="flex gap-4">
      <button
        onClick={() => handelAddItem()}
        className="inline-flex cursor-pointer hover:bg-white hover:border hover:text-black hover:border-black  bg-black text-white items-center justify-center gap-2 text-sm font-medium transition-all outline-none h-10 rounded-md px-6 flex-1"
      >
        Add to Cart
      </button>
      <button
        aria-label="Add to Favorites"
        className="px-4 cursor-pointer border border-gray-300 rounded-lg"
      >
        <Heart size={16} />
      </button>
      <button
        aria-label="Share Product With Other People"
        onClick={() => handleShareClick()}
        className="px-4 cursor-pointer border border-gray-300 rounded-lg"
      >
        <GoShareAndroid />
      </button>
    </div>
  );
}

export default ActionsProductInfo;
