import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import Logo from "../ui/Logo";
import NavLinks from "../ui/NavLinks";
import Cart from "./Cart";
import OverLay from "../ui/OverLay";
import UserIcon from "../ui/UserIcon";

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-label="Open Menu"
        className="p-2 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <MenuIcon className="h-10 w-10 border border-gray-200 rounded-md p-1" />
      </button>

      {createPortal(
        <>
          {open && <OverLay handler={() => setOpen(false)} />}

          <div
            className={`${
              open ? "translate-x-0" : "translate-x-full"
            } fixed top-0 right-0 min-h-screen w-[320px] bg-white p-5 rounded-bl-md transition-transform duration-200 ease-in-out overflow-y-auto z-9999`}
          >
            <div className="flex items-center justify-between mb-5">
              <Logo />
              <button
                className="cursor-pointer hover:text-red-500 duration-150"
                onClick={() => setOpen(false)}
                aria-label="Close Menu"
              >
                <XIcon size={30} />
              </button>
            </div>

            <NavLinks className="flex flex-col mb-4 gap-6" />

            <div className="border border-gray-400/60 my-5" />

            <div className="mt-10 space-y-5">
              <UserIcon>
                <p className="text-xl font-medium">Account</p>
              </UserIcon>
              <Cart>
                <p className="text-xl font-medium">Shopping Cart</p>
              </Cart>
            </div>
          </div>
        </>,
        document.body
      )}
    </div>
  );
}

export default Menu;
