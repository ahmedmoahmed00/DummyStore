import { NavLink } from "react-router-dom";

function NavLinks({ className }) {
  return (
    <ul className={className}>
      <li className="px-3 py-2 text-lg hover:text-pink-600 font-medium transition-colors">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "underline text-pink-600" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="px-3 py-2 text-lg hover:text-pink-600 font-medium transition-colors">
        <NavLink
          to={"products"}
          className={({ isActive }) =>
            isActive ? "underline text-pink-600" : ""
          }
        >
          Products
        </NavLink>
      </li>
      <li className="px-3 py-2 text-lg hover:text-pink-600 font-medium transition-colors">
        <NavLink
          to={"about"}
          className={({ isActive }) =>
            isActive ? "underline text-pink-600" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li className="px-3 py-2 text-lg hover:text-pink-600 font-medium transition-colors">
        <NavLink
          to={"contact"}
          className={({ isActive }) =>
            isActive ? "underline text-pink-600" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
