import { Link } from "react-router-dom";
import useProductsQuery from "../hooks/useProductsQuery";
import ProductSkeleton from "../ui/ProductSkeleton";
import ProductBox from "./ProductBox";
import { API_CONFIG } from "../config/api";

function ProductsSection() {
  const { isLoading, error, data } = useProductsQuery(
    0,
    API_CONFIG.HOME_PRODUCTS
  );

  if (error) {
    console.log(error);
  }

  return (
    <div className="py-16">
      <div className="container max-w-7xl  mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoading ? (
            <>
              {Array.from({ length: 8 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </>
          ) : data ? (
            data.map((item) => <ProductBox item={item} key={item.id} />)
          ) : null}
        </div>
      </div>
      <div className="text-center mt-12">
        <Link
          className="text-center  bg-black text-white py-2 px-6 rounded-md mx-auto w-fit hover:bg-white hover:text-black hover:border-black border-2"
          to="/products"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
}

export default ProductsSection;
