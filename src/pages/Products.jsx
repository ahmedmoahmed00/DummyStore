import { useState, useEffect } from "react";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import FilterdSearchProducts from "../components/FilterdSearchProducts";
import ProductBox from "../components/ProductBox";
import useProductQueryParams from "../hooks/useProductQueryParams";
import ProductSkeleton from "../ui/ProductSkeleton";
import { Link, useSearchParams } from "react-router-dom";
import { API_CONFIG } from "../config/api";

const PER_PAGE = API_CONFIG.PER_PAGE;

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    () => Number(searchParams.get("page")) || 1
  );

  let { data, isLoading } = useProductQueryParams();

  useEffect(() => {
    const pageFromUrl = Number(searchParams.get("page")) || 1;
    setCurrentPage(pageFromUrl);
  }, [searchParams]);

  let pagedData;
  if (currentPage) {
    const from = (currentPage - 1) * PER_PAGE;
    const to = from + PER_PAGE;
    pagedData = data?.slice(from, to);
  }

  return (
    <div className="mb-8 max-w-7xl mt-10 xl:mx-auto mx-5">
      <div className="mb-8 max-w-7xl mt-10 xl:mx-auto mx-5">
        <h1 className="text-3xl font-bold mb-4">Products</h1>
        <h2 className="text-gray-600">
          Discover our amazing collection of products
        </h2>
      </div>

      <div>
        <FilterdSearchProducts />
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => <ProductSkeleton key={i} />)
          : pagedData?.map((item) => <ProductBox key={item.id} item={item} />)}
        {pagedData?.length === 0 && (
          <div>
            <ProductSkeleton />
            <p class="text-red-500 mt-4 text-lg font-medium">
              No products found matching your search.
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 flex justify-center">
        <Pagination
          current={currentPage}
          total={data?.length || 0}
          pageSize={PER_PAGE}
          onChange={(page) => {
            setSearchParams({ page });
          }}
          itemRender={(page, type, originalElement) => {
            if (type === "page") {
              return <Link to={`?page=${page}`}>{page}</Link>;
            }
            return originalElement;
          }}
        />
      </div>
    </div>
  );
}

export default Products;
