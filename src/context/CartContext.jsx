import { createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { formatDateNow } from "../utils/helpers";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorageState([], "cart");
  const [orders, setOrders] = useLocalStorageState([], "orders");

  const QuantityAllItems = cart.reduce((pre, curr) => pre + curr.quantity, 0);

  const totalPriceCart = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const totalPriceOrders = orders.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  function addItemToCart(item) {
    const dateNow = formatDateNow();

    if (!checkItemInCart(item.id)) {
      setCart((prev) => [
        ...prev,
        {
          ...item,
          addedAt: dateNow,
        },
      ]);
    }
  }

  function checkItemInCart(id) {
    return cart.some((item) => item.id === id);
  }

  function deleteItem(id) {
    setCart((cart) => cart.filter((item) => item.id !== id));
  }

  function QuantityInStock(id) {
    let messageError = "Product Not Found";

    const product = cart.find((item) => item.id === id);

    if (product) {
      return product.stock - product.quantity;
    }

    return messageError;
  }

  function clearCart() {
    setOrders((prevOrders) => [...prevOrders, ...cart]);
    setCart([]);
  }

  function incrementQuantity(id, quantityToAdd = 1) {
    let success = true;
    let message = "";

    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + quantityToAdd;

          if (newQuantity <= item.stock) {
            return { ...item, quantity: newQuantity };
          } else {
            success = false;
            const remaining = item.stock - item.quantity;
            message = `Only ${remaining} left of (${item.title})`;
            return item;
          }
        }
        return item;
      })
    );

    return { success, message };
  }

  function decrementQuantity(id, quantityToAdd = 1) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - quantityToAdd) }
          : item
      )
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        QuantityAllItems,
        checkItemInCart,
        deleteItem,
        incrementQuantity,
        decrementQuantity,
        totalPriceCart,
        QuantityInStock,
        clearCart,
        orders,
        totalPriceOrders,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext };
