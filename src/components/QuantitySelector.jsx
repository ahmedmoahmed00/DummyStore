import { MinusIcon, PlusIcon } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";

function QuantitySelector({ item, onQuantityChange }) {
  const [quantity, setQuantity] = useState(1);
  const [activePlus, setActivePlus] = useState(true);
  const [activeMinus, setActiveMinus] = useState(false);

  const incrementQuantity = () => {
    setQuantity((prev) => {
      if (prev < item.stock) {
        setActiveMinus(true);
        return prev + 1;
      } else {
        setActivePlus(false);
        return prev;
      }
    });
  };

  const decrementQuantity = () => {
    setQuantity((prev) => {
      if (prev > 1) {
        setActivePlus(true);
        return prev - 1;
      } else {
        setActiveMinus(false);
        return prev;
      }
    });
  };

  useEffect(() => {
    onQuantityChange?.(quantity);
  }, [quantity, onQuantityChange]);

  return (
    <div className="flex items-center gap-4 mt-6">
      <span className="font-medium">Quantity:</span>
      <div className="flex items-center border rounded-lg border-gray-300 ">
        <button
          onClick={decrementQuantity}
          className={`${
            activeMinus ? "hover:bg-gray-200 " : "pointer-events-none "
          } inline-flex items-center justify-center px-3 py-2 cursor-pointer`}
        >
          <MinusIcon size={15} />
        </button>
        <span className="px-0 py-2 min-w-10 text-center">{quantity}</span>
        <button
          onClick={incrementQuantity}
          className={`${
            activePlus ? "hover:bg-gray-200 " : "pointer-events-none "
          } inline-flex items-center justify-center px-3 py-2 cursor-pointer`}
        >
          <PlusIcon size={15} />
        </button>
      </div>
    </div>
  );
}

export default QuantitySelector;
