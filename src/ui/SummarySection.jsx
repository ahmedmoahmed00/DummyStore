import { Package, TrendingUp, Users } from "lucide-react";
import SummaryBox from "./SummaryBox";

function SummarySection() {
  return (
    <div className="p-16">
      <div className="container max-w-7xl mx-auto px-4 ">
        <div className={` grid grid-cols-1 md:grid-cols-3 gap-8 duration-300`}>
          <SummaryBox count={"194"} desc={"Products Available"}>
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-blue-600" />
            </div>
          </SummaryBox>
          <SummaryBox count={"208"} desc={"Happy Customers"}>
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
          </SummaryBox>
          <SummaryBox count={"251"} desc={"Community Posts"}>
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
          </SummaryBox>
        </div>
      </div>
    </div>
  );
}

export default SummarySection;
