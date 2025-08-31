import { useCart } from "../context/useCart";
import { formatCurrency } from "../utils/helpers";

function CheckoutProducts() {
  const { cart } = useCart();

  return (
    <div>
      <div className="flex flex-col gap-5 max-h-[260px] overflow-y-auto py-2 ">
        {cart.map((product) => {
          return (
            <div key={product.id} className="flex items-center gap-3 w-full">
              <div className="relative ">
                <img
                  alt={product.title}
                  className="rounded-md size-[60px] object-cover"
                  src={product.images?.[0] || product.thumbnail}
                />
                <span className="border font-medium absolute min-w-fit -top-2 -right-2 bg-black text-white size-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {product.quantity}
                </span>
              </div>

              <div className="flex-1 ">
                <h3 className="font-medium text-sm line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {formatCurrency(product.price)} each
                </p>
              </div>

              <div className="text-right ">
                <p className="font-medium">
                  {formatCurrency(product.price * product.quantity)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CheckoutProducts;
