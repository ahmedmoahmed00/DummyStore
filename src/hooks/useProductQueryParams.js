import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import getProductQueryParams from "../services/products/getProductQueryParams";

export default function useProductQueryParams() {
  const [searchParams] = useSearchParams();

  const query = (searchParams.get("query") || "all").trim();
  const cat = (searchParams.get("category") || "all").trim();

  const { data, isLoading } = useQuery({
    queryKey: ["filterdProducts", query, cat],
    queryFn: () => getProductQueryParams(query, cat),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
  });

  return { data, isLoading };
}
