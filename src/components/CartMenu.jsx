import { createPortal } from "react-dom";
import OverLay from "../ui/OverLay";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import CartItemBox from "./CartItemBox";
import { formatCurrency } from "../utils/helpers";

import EmptyCartIcon from "../assets/CartImages/EmptyCartIcon.png";

function CartMenu({ open, handler }) {
  const { QuantityAllItems, cart, totalPriceCart } = useCart();
  return (
    <div>
      {createPortal(
        <>
          {open ? <OverLay fullZindex={true} handler={handler} /> : null}
          <div
            className={`${
              open ? "translate-x-0" : "translate-x-full"
            } fixed top-0 right-0 min-h-screen max-w-96 w-full bg-white  rounded-bl-md transition-transform duration-200 ease-in-out overflow-y-auto z-99999`}
          >
            <div className="p-4 border-b border-b-gray-300 flex justify-between items-center">
              <p className="text-xl font-bold">
                Shopping Cart ({QuantityAllItems})
              </p>
              <button onClick={handler} aria-label="Close Menu">
                <X className=" cursor-pointer hover:text-red-500 duration-200" />
              </button>
            </div>
            {QuantityAllItems === 0 ? (
              <div className=" mt-[10%] flex items-center justify-center flex-col gap-5">
                <div>
                  <img
                    className="mx-auto"
                    src={EmptyCartIcon}
                    alt="EmptyCartIcon"
                  />
                </div>
                <div>
                  <p className="text-gray-500 text-lg font-semibold ">
                    Your cart is currently empty
                  </p>
                </div>
                <Link
                  onClick={handler}
                  to="/products"
                  className="mt-4 inline-block px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Go to Products
                </Link>
              </div>
            ) : (
              <>
                <div className="p-4 space-y-4 overflow-y-auto max-h-[70vh]">
                  {cart.map((item) => (
                    <CartItemBox item={item} key={item.id} />
                  ))}
                </div>
                <div className="p-4 border-t border-gray-300">
                  <p className="text-right text-lg font-bold">
                    Total: {formatCurrency(totalPriceCart)}
                  </p>
                  <div>
                    <Link
                      onClick={handler}
                      className=" py-2 bg-black text-white block text-center mt-3 hover:bg-white hover:text-black duration-200 border-2"
                      to="/checkout"
                    >
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </>,
        document.body
      )}
    </div>
  );
}

export default CartMenu;
