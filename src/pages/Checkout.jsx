import FormCheckout from "../components/FormCheckout";
import { useCart } from "../context/useCart";
import OrderSummary from "../ui/OrderSummary";

function Checkout() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-gray-600 mb-8">
          Add some items to your cart before checking out.
        </p>
        <a
          href="/products"
          className="inline-flex bg-black text-white hover:bg-black/70 items-center justify-center gap-2 rounded-md text-sm font-medium transition-all bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2"
        >
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="container max-w-7xl mx-auto py-8 px-4 flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-purple-600">
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-purple-600 text-white">
              1
            </div>
            <span>Information</span>
          </div>
          <div className="flex-1 h-px bg-gray-200"></div>
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-300">
              2
            </div>
            <span>Payment</span>
          </div>
        </div>
      </header>
      <div className=" grid lg:grid-cols-2 gap-8">
        <FormCheckout />
        <OrderSummary />
      </div>
    </div>
  );
}

export default Checkout;
