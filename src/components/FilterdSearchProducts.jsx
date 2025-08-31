import Search from "../components/Search";
import Select from "../ui/Select";
import useGetCategories from "../hooks/useGetCategories";
import { useSearchParams } from "react-router-dom";

function FilterdSearchProducts() {
  let { data } = useGetCategories();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";
  const category = searchParams.get("category") || "all";

  function handelOptionSelected(item) {
    const params = Object.fromEntries(searchParams.entries());
    params.category = item.slug;
    params.page = 1;

    setSearchParams(params, { replace: true });
  }

  function onSubmit(valueSearch) {
    const params = Object.fromEntries(searchParams.entries());
    params.query = valueSearch;
    params.page = 1;

    setSearchParams(params, { replace: true });
  }

  if (data) {
    data = [{ name: "All Categories", slug: "all" }, ...data];
  }

  return (
    <div className="flex flex-wrap justify-between gap-4 items-center mb-6">
      <div className="md:px-4 md:py-2 rounded w-full md:w-1/2">
        <Search onSubmit={onSubmit} value={query} />
      </div>
      <div className="w-45">
        <Select
          optionSelected={handelOptionSelected}
          options={data}
          itemSelected={category}
        >
          All Categories
        </Select>
      </div>
    </div>
  );
}

export default FilterdSearchProducts;
