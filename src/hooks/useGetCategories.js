import { useQuery } from "@tanstack/react-query";
import getCategories from "../services/categories/getAllCategories";

export default function useGetCategories() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return { data, error, isLoading };
}
