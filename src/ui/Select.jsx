import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

function Select({ options, optionSelected, itemSelected, children }) {
  const [openDrobDown, setOpenDrobDown] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    if (itemSelected) {
      const selected = options?.find((item) => item.slug === itemSelected);
      setSelectedItem(selected?.name || "");
    }
  }, [itemSelected, options]);

  const parentRef = useRef();

  const ref = useOutsideClick(() => setOpenDrobDown(false), [parentRef]);

  const toogleDropDown = () => {
    setOpenDrobDown((prev) => !prev);
  };

  const handelSelectItem = (Item) => {
    optionSelected(Item);
    setSelectedItem(Item.name);
    toogleDropDown();
  };

  return (
    <div className="relative w-full">
      <button
        aria-label="Selector Category"
        ref={parentRef}
        onClick={toogleDropDown}
        className="px-2 w-full py-2 flex justify-between gap-2 items-center bg-white rounded-sm border border-gray-400 cursor-pointer"
      >
        <div className="text-sm ">{selectedItem ? selectedItem : children}</div>
        <div>
          <ChevronDown size={14} />
        </div>
      </button>
      <div
        ref={ref}
        className={`${
          openDrobDown
            ? "open-clip-custom "
            : "close-clip-custom transition-none"
        } rounded-sm absolute w-full duration-400 max-h-80 overflow-auto bg-white z-5`}
      >
        <div className="flex flex-col mt-2">
          {options?.map((option) => (
            <div
              aria-label={option.name}
              key={option.name}
              onClick={() => handelSelectItem(option)}
              className="border-b border-b-gray-300 duration-300 hover:bg-gray-200"
            >
              <button
                aria-label={option.name}
                className="py-3 px-3 w-full text-sm text-left cursor-pointer"
              >
                {option.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Select;
