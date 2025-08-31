import { Trash2Icon } from "lucide-react";
import { formatCurrency } from "../utils/helpers";
import { useCart } from "../context/useCart";
import toast from "react-hot-toast";

function CartItemBox({ item }) {
  const { deleteItem, incrementQuantity, decrementQuantity } = useCart();
  const img = item.images?.[0] || item.thumbnail;

  function handelRemoveItem() {
    deleteItem(item.id);
    toast.success("Product removed from cart!");
  }

  function handelQuantity(type) {
    switch (type) {
      case "Increment":
        incrementQuantity(item.id);
        break;
      case "Decrement":
        decrementQuantity(item.id);
        break;
    }
  }

  return (
    <div className="flex items-center justify-between gap-4 border border-gray-300 rounded p-3">
      <div>
        <img
          className="w-14 h-14 object-cover rounded"
          src={img}
          alt={item.title}
        />
      </div>

      <div className="flex-1">
        <h4 className="text-sm font-medium">{item.title}</h4>
        <p className="text-sm text-gray-600">{formatCurrency(item.price)}</p>

        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => handelQuantity("Decrement")}
            className="border border-gray-300 rounded w-6 h-6 flex items-center justify-center text-sm cursor-pointer"
          >
            -
          </button>
          <span className="w-5 flex items-center justify-center">
            {item.quantity}
          </span>
          <button
            onClick={() => handelQuantity("Increment")}
            className="border border-gray-300 rounded w-6 h-6 flex items-center justify-center text-sm cursor-pointer"
          >
            +
          </button>
        </div>
      </div>

      <div>
        <Trash2Icon
          onClick={handelRemoveItem}
          className="w-5 h-5 text-red-500 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default CartItemBox;
