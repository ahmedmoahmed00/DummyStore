import { ArrowLeft } from "lucide-react";
import ProductDetailsSkeleton from "../ui/ProductDetailsSkeleton";
import useProductDetails from "../hooks/useProductDetails";
import { Link, useParams } from "react-router-dom";
import ProductGallery from "../ui/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import { useState } from "react";
import ShowReviews from "../ui/ShowReviews";
import SpecificationsProduct from "../ui/SpecificationsProduct";
import ProductNotFound from "../ui/ProductNotFound";

function ProductsDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("reviews");

  const { isLoading, data: item, error } = useProductDetails(id);

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  if (error?.message?.length > 0) {
    return <ProductNotFound />;
  }

  const reviews = item.reviews ? item.reviews : [];

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <div className="w-fit ">
        <Link
          to={"/products"}
          className="flex gap-4 p-3 rounded-lg hover:bg-gray-200 duration-300 items-center"
        >
          <ArrowLeft size={18} />
          Back to products
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-6">
        <ProductGallery images={item.images} titleAlt={item.title} />
        <ProductInfo item={item} />
      </div>

      <div className="mt-12 flex flex-col gap-2">
        <div className="grid grid-cols-2 py-2 px-2 bg-gray-100 relative rounded-md">
          <button
            onClick={() => setActiveTab("reviews")}
            className={`cursor-pointer relative z-10 text-sm`}
            aria-label="Show Reviews "
          >
            Reviews ({item.reviews.length})
          </button>

          <span
            className={`absolute  top-1 left-1  w-[calc(50%-4px)] h-[calc(100%-8px)] bg-amber-200 rounded-md transition-all duration-300`}
            style={{
              transform:
                activeTab === "reviews" ? "translateX(0)" : "translateX(100%)",
            }}
          ></span>

          <button
            onClick={() => setActiveTab("specifications")}
            className={`cursor-pointer relative z-10 text-sm`}
            aria-label="Show Specifications"
          >
            Specifications
          </button>
        </div>

        {activeTab === "reviews" && <ShowReviews reviews={reviews} />}
        {activeTab === "specifications" && (
          <SpecificationsProduct item={item} />
        )}
      </div>
    </div>
  );
}

export default ProductsDetails;
