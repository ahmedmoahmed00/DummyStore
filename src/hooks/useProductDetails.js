import { useQuery } from "@tanstack/react-query";
import getProductDetails from "../services/products/getProductDetails";

export default function useProductDetails(id) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["product-details", id],
    queryFn: () => getProductDetails(id),
    retry: false,
  });

  return { isLoading, data, error };
}
