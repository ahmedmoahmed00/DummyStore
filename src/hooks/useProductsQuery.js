import { useQuery } from "@tanstack/react-query";
import getProducts from "../services/products/getProducts";

export default function useProductsQuery(skip, limit) {
  const { isLoading, data, error, isFetching } = useQuery({
    queryKey: ["products", skip, limit],
    queryFn: () => getProducts(skip, limit),
    keepPreviousData: true,
  });

  return { isLoading, data, error, isFetching };
}
