import { Package, Settings, User } from "lucide-react";
import UserImg from "../assets/User/128.png";
import Tag from "../ui/Tag";
import { useState } from "react";
import ProfileInformation from "../components/ProfileInformation";
import OrdersHistory from "../components/OrdersHistory";
import { useCart } from "../context/useCart";
import UserSettings from "../components/UserSettings";

function UserProfile() {
  const [sectionActive, setSectionActive] = useState("profile");
  const { orders } = useCart();

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Account</h1>
        <p className="text-gray-600">
          Manage your profile and view your orders
        </p>
      </header>
      <div className="flex flex-col items-start lg:flex-row  gap-6 h-full">
        <div className="p-6 min-h-[460px] justify-center border flex flex-col gap-6 border-gray-300 w-full rounded-xl lg:max-w-[330px]">
          <div>
            <div className="max-w-24 max-h-24 mb-4 mx-auto ">
              <img
                className="aspect-square size-full"
                src={UserImg}
                alt="User Img"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold">Michael Williams</h2>
              <p className="text-gray-600 break-words">
                michael.williams@x.dummyjson.com
              </p>
              <div className="pt-2 flex  justify-center">
                <Tag title={"Premium Member"} type={"premium"} />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <button
              onClick={() => setSectionActive("profile")}
              className={`${
                sectionActive === "profile"
                  ? "bg-black/90 text-white hover:bg-black/80"
                  : "bg-white text-black hover:bg-gray-100 "
              } inline-flex items-center gap-2 rounded-md text-sm font-medium transition-all     shadow-xs  cursor-pointer h-9 px-4 py-2 w-full`}
            >
              <User className=" w-4 h-4 mr-2" />
              Profile
            </button>
            <button
              onClick={() => setSectionActive("orders")}
              className={`${
                sectionActive === "orders"
                  ? "bg-black/90 text-white hover:bg-black/80"
                  : "bg-white text-black hover:bg-gray-100 "
              } inline-flex items-center gap-2 rounded-md text-sm font-medium transition-all justify-between   shadow-xs  cursor-pointer h-9 px-4 py-2 w-full`}
            >
              <div className="flex items-center gap-2">
                <Package className=" w-4 h-4 mr-2" />
                Orders
              </div>
              <div className="inline-flex items-center justify-center rounded-md text-black border px-2 py-0.5 text-xs font-medium w-fit bg-amber-400 whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground ml-auto">
                {orders.length}
              </div>
            </button>
            <button
              onClick={() => setSectionActive("settings")}
              className={`${
                sectionActive === "settings"
                  ? "bg-black/90 text-white hover:bg-black/80"
                  : "bg-white text-black hover:bg-gray-100 "
              } inline-flex items-center gap-2 rounded-md text-sm font-medium transition-all     shadow-xs  cursor-pointer h-9 px-4 py-2 w-full`}
            >
              <Settings className=" w-4 h-4 mr-2" />
              Settings
            </button>
          </div>
        </div>
        <div className="flex-1 w-full">
          {sectionActive === "profile" && <ProfileInformation />}
          {sectionActive === "orders" && <OrdersHistory />}
          {sectionActive === "settings" && <UserSettings />}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
