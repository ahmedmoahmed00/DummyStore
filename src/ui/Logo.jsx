import { Package } from "lucide-react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"}>
      <div className="flex items-center gap-2">
        <div className="bg-pink-600 text-white p-2 rounded-lg w-fit  ">
          <Package size={24} color="white" />
        </div>
        <span className="text-xl font-bold">DummyStore</span>
      </div>
    </Link>
  );
}

export default Logo;
