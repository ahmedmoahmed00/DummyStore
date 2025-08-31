import { Award, Globe, Package, ShoppingCart, Users } from "lucide-react";
import SummaryBox from "./SummaryBox";

function AboutSummarySection() {
  return (
    <div className="py-16">
      <div className="container max-w-7xl mx-auto px-4 ">
        <div className={` grid grid-cols-2 md:grid-cols-4 gap-8 duration-300`}>
          <SummaryBox count={"1000000"} desc={"Products Available"}>
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="w-8 h-8 text-blue-600" />
            </div>
          </SummaryBox>
          <SummaryBox count={"500000"} desc={"Happy Customers"}>
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </SummaryBox>
          <SummaryBox count={"50"} desc={"Countries Served"}>
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
          </SummaryBox>
          <SummaryBox count={"25"} desc={"Awards Won"}>
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
          </SummaryBox>
        </div>
      </div>
    </div>
  );
}

export default AboutSummarySection;
