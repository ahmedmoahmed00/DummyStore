import Stars from "../ui/Stars";
import Tag from "../ui/Tag";
import { formatCurrency, getOriginalPrice } from "../utils/helpers";
import { useState } from "react";
import ActionsProductInfo from "./ActionsProductInfo";
import QuantitySelector from "./QuantitySelector";

function ProductInfo({ item }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <div className="mb-2">
        <Tag type={"main"} title={item.tags[0]} />
      </div>

      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
        <div className="flex items-center gap-1">
          <Stars maxStars={5} rating={item.rating} size={20} />
          <div className="text-sm text-gray-600">
            ({item.reviews.length} reviews)
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-center gap-2 lg:gap-4">
          <span className="text-3xl font-bold text-purple-600">
            {formatCurrency(item.price)}
          </span>
          <span className="text-xl text-gray-500 line-through">
            {item.discountPercentage
              ? formatCurrency(
                  getOriginalPrice(item.price, item.discountPercentage)
                )
              : null}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-600">
            Brand: <span className="font-medium">{item.brand}</span>
          </p>
          <p className="text-sm text-gray-600">
            Stock:{" "}
            <span className="font-medium">
              {item.stock > 10
                ? `${item.stock} available`
                : `${item.stock} Low stock`}
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <p className="text-gray-700">{item.description}</p>
        </div>

        <div className="flex items-center gap-2">
          {item.tags.map((tag, index) => (
            <Tag type={"sub"} title={tag} key={index} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <QuantitySelector item={item} onQuantityChange={setQuantity} />

        <ActionsProductInfo item={item} quantity={quantity} />
      </div>
    </div>
  );
}

export default ProductInfo;
