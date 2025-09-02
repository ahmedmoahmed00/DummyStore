import { User } from "lucide-react";
import { Link } from "react-router-dom";

function UserIcon({ children }) {
  return (
    <Link to={"/user"} className="flex items-center gap-2.5 cursor-pointer">
      <User size={28} />
      {children}
    </Link>
  );
}

export default UserIcon;
