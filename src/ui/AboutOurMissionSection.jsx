import { Award, Globe, Heart } from "lucide-react";
import MissionCard from "./MissionCard";

const missionCards = [
  {
    Icon: Heart,
    title: "Customer First",
    description:
      "Every decision we make is guided by what's best for our customers",
  },
  {
    Icon: Award,
    title: "Quality Excellence",
    description: "We never compromise on quality, from products to service",
  },
  {
    Icon: Globe,
    title: "Global Impact",
    description:
      "Building a platform that connects people and products worldwide",
  },
];

function AboutOurMissionSection() {
  return (
    <div className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission &amp; Values</h2>
          <p className="text-xl max-w-3xl mx-auto">
            We're driven by a simple mission: to make online shopping better for
            everyone
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {missionCards.map((card, index) => (
            <MissionCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutOurMissionSection;
