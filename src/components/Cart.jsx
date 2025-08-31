import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import CartMenu from "./CartMenu";
import { useCart } from "../context/useCart";

function Cart({ size = 28, children }) {
  const [openCart, setOpenCart] = useState();
  const { QuantityAllItems } = useCart();

  return (
    <>
      <button
        aria-label="Show Cart"
        onClick={() => setOpenCart((prev) => !prev)}
        className="flex items-center gap-2.5 cursor-pointer"
      >
        <div className="relative" aria-label="SearchIcon">
          <ShoppingCart size={size} />
          {QuantityAllItems > 0 ? (
            <span className="absolute  top-1 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center shadow">
              {QuantityAllItems}
            </span>
          ) : null}
        </div>
        {children}
      </button>
      <CartMenu open={openCart} handler={() => setOpenCart(false)} />
    </>
  );
}

export default Cart;
