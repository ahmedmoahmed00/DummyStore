import { Calendar, Truck } from "lucide-react";
import { useCart } from "../context/useCart";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/helpers";

function OrdersHistory() {
  const { orders, totalPriceOrders } = useCart();

  console.log(orders);

  return (
    <div className="py-6 border border-gray-200 shadow-sm rounded-xl">
      <div className="px-6 flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <h2 className="leading-none font-semibold">Order History </h2>
          <p className="text-sm text-gray-600">2 items in cart</p>
        </div>
        <div className="flex flex-col gap-4 overflow-auto max-h-[600px] ">
          {orders?.map((order) => {
            return (
              <div className="p-4 border flex flex-col gap-3 border-gray-300 hover:shadow-sm rounded-xl">
                <div>
                  <h4 class="font-semibold">{order.title}</h4>
                  <p class="text-sm text-gray-600">
                    <Calendar class="w-4 h-4 inline mr-1" />
                    8/30/2025
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
                    <p class="font-medium">Quantity: {order.quantity}</p>
                    <p class="text-sm text-gray-600">
                      Price: {formatCurrency(order.price)}
                    </p>
                    <p class="text-sm font-semibold">
                      Total: {formatCurrency(order.price * order.quantity)}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap  md:w-fit">
                  <button className="inline-flex items-center w-full md:w-fit gap-1.5 rounded-md border border-gray-200 bg-white shadow-sm hover:bg-gray-100 text-sm font-medium h-8 px-3">
                    <Truck className="w-4 h-4 mr-1" />
                    Track
                  </button>

                  <Link
                    className="w-full md:w-fit"
                    to={`/products/${order.id}`}
                  >
                    <button className="inline-flex items-center w-full md:w-fit gap-1.5 rounded-md border border-gray-200 bg-white shadow-sm hover:bg-gray-100 text-sm font-medium h-8 px-3">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div class="px-6 py-4 mt-6 border-t-gray-300 border-t flex items-center gap-2">
        <h2 className="text-2xl font-semibold mb-2">
          Total:{" "}
          <span className="font-bold text-2xl text-gray-700">
            {formatCurrency(totalPriceOrders)}
          </span>
        </h2>
      </div>
    </div>
  );
}

export default OrdersHistory;
