import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

function Search({ className, onSubmit, value }) {
  const [valueSearch, setValueSearch] = useState(value);

  function handelSubmit(e) {
    e.preventDefault();

    onSubmit(valueSearch);
  }

  return (
    <form className={className} onSubmit={handelSubmit}>
      <div className=" flex items-center rounded-md border border-gray-300">
        <input
          value={valueSearch}
          onChange={(e) => {
            setValueSearch(e.target.value);
            onSubmit(e.target.value);
          }}
          id="inputsearch"
          placeholder="Search products..."
          className="pl-4 pr-2 py-2  focus:outline-none w-full"
        />
        <button className="pr-3 py-2 cursor-pointer border-l border-l-gray-400 h-full pl-1">
          <SearchIcon
            aria-label="SearchIcon"
            size={16}
            className=" cursor-pointer  h-full w-5 text-gray-400"
          />
        </button>
      </div>
    </form>
  );
}

export default Search;
