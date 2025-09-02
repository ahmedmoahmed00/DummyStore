import Logo from "../ui/Logo";
import Menu from "./Menu";
import Search from "./Search";
import NavLinks from "../ui/NavLinks";
import Cart from "./Cart";
import { useEffect, useRef, useState } from "react";
import UserIcon from "../ui/UserIcon";

function Header() {
  const prevScrollY = useRef(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      const isVisibleNow =
        currentScrollY < 50 || currentScrollY < prevScrollY.current;

      setVisible(isVisibleNow);

      prevScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky ${
        visible ? "translate-y-0" : "-translate-y-full"
      } top-0 z-3 w-full border-b   border-gray-300 backdrop-blur  supports-[backdrop-filter]:bg-white/30 transition-transform duration-300`}
    >
      <div className="container px-5 max-w-7xl h-20 xl:mx-auto py-2 flex items-center justify-between">
        <div>
          <Logo />
        </div>
        <nav className="hidden lg:ml-14 lg:flex flex-1 items-center gap-8 justify-center">
          <NavLinks className={"flex items-center gap-5"} />
          <Search className={"hidden flex-1 lg:block"} />
        </nav>
        <Menu />
        <div className="hidden lg:flex items-center gap-5 relative lg:ml-14">
          <UserIcon />
          <Cart />
        </div>
      </div>
      <div className="flex justify-center">
        <Search className={" max-w-[80%] w-full lg:hidden pb-4"} />
      </div>
    </header>
  );
}

export default Header;
