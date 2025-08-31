import { Shield, Truck } from "lucide-react";
import CheckoutProducts from "./CheckoutProducts";
import { useCart } from "../context/useCart";
import { formatCurrency } from "../utils/helpers";
import { CHECK_OUT_DETAILS } from "../config/checkoutdetailes";

function OrderSummary() {
  const { totalPriceCart } = useCart();

  return (
    <div className="h-fit sticky top-20 flex flex-col gap-4 rounded-xl border border-gray-200 p-6 shadow-sm ">
      <h2 className="leading-none font-semibold">Order Summary</h2>
      <div>
        <CheckoutProducts />
      </div>
      <div>
        <div className="space-y-2">
          <div className="space-y-2 border-y border-y-gray-300 py-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatCurrency(totalPriceCart)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{formatCurrency(CHECK_OUT_DETAILS.SHIPPING)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>{formatCurrency(CHECK_OUT_DETAILS.TAX)}</span>
            </div>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>
              {formatCurrency(
                totalPriceCart +
                  CHECK_OUT_DETAILS.SHIPPING +
                  CHECK_OUT_DETAILS.TAX
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
          <Shield className="text-green-700" size={18} />
          <div>
            <p className="text-sm font-medium text-green-900">
              Secure Checkout
            </p>
            <p className="text-xs text-green-700">
              Your information is protected
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
          <Truck size={18} className="text-blue-600" />
          <div>
            <p className="text-sm font-medium text-blue-800">Free Shipping</p>
            <p className="text-xs text-blue-600">On orders over $50</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
