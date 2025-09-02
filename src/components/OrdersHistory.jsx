import { Calendar, Package, Truck } from "lucide-react";
import { useCart } from "../context/useCart";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/helpers";

function OrdersHistory() {
  const { orders, totalPriceOrders } = useCart();

  const hasOrders = orders.length !== 0;

  return (
    <div className="py-6 border border-gray-200 shadow-sm rounded-xl h-full">
      {hasOrders ? (
        <>
          <div className="px-6 flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <h2 className="leading-none font-semibold">Order History </h2>
              <p className="text-sm text-gray-600">
                {orders.length} items in Order History
              </p>
            </div>
            <div className="flex flex-col gap-4 overflow-auto max-h-[600px] ">
              {orders?.map((order) => {
                return (
                  <div
                    key={order.id}
                    className="p-4 border flex flex-col gap-3 border-gray-300 hover:shadow-sm rounded-xl"
                  >
                    <div>
                      <h4 className="font-semibold">{order.title}</h4>
                      <p className="text-sm text-gray-600">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        {order.addedAt}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="size-[60px]">
                        <img
                          src={order.images?.[0] || order.thumbnail}
                          alt={order.title}
                        />
                      </div>
                      <div>
                        <p className="font-medium">
                          Quantity: {order.quantity}
                        </p>
                        <p className="text-sm text-gray-600">
                          Price: {formatCurrency(order.price)}
                        </p>
                        <p className="text-sm font-semibold">
                          Total: {formatCurrency(order.price * order.quantity)}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap  md:w-fit">
                      <button className="inline-flex cursor-pointer items-center w-full md:w-fit gap-1.5 rounded-md border border-gray-200 bg-white shadow-sm hover:bg-gray-100 text-sm font-medium h-8 px-3">
                        <Truck className="w-4 h-4 mr-1" />
                        Track
                      </button>

                      <Link
                        className="w-full md:w-fit"
                        to={`/products/${order.id}`}
                      >
                        <button className="inline-flex cursor-pointer items-center w-full md:w-fit gap-1.5 rounded-md border border-gray-200 bg-white shadow-sm hover:bg-gray-100 text-sm font-medium h-8 px-3">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="px-6 py-4 mt-6 border-t-gray-300 border-t flex items-center gap-2">
            <h2 className="text-2xl font-semibold mb-2">
              Total:{" "}
              <span className="font-bold text-2xl text-gray-700">
                {formatCurrency(totalPriceOrders)}
              </span>
            </h2>
          </div>
        </>
      ) : (
        <div className="h-full flex items-center justify-center">
          <div className="text-center py-12 ">
            <Package className=" w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              No Orders Yet
            </h3>
            <p className="text-gray-500 mb-6 px-2">
              Your cart is empty. Start shopping to see your orders here!
            </p>
            <Link
              className="flex items-center bg-black text-white w-fit mx-auto hover:bg-black/80 justify-center gap-2 rounded-md text-sm font-medium transition-all shadow-xs h-9 px-4 py-2"
              to="/products"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrdersHistory;
