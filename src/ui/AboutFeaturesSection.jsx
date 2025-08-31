import { Clock, Heart, Shield, Truck } from "lucide-react";
import FeaturesCard from "./FeaturesCard";
import { useInView } from "../hooks/useInView";

const features = [
  {
    Icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on orders over $50 worldwide",
  },
  {
    Icon: Shield,
    title: "Secure Payment",
    description: "100% secure payment with SSL encryption",
  },
  {
    Icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support",
  },
  {
    Icon: Heart,
    title: "Quality Guarantee",
    description: "30-day money-back guarantee",
  },
];

function AboutFeaturesSection() {
  const { ref, visible } = useInView(0);

  return (
    <div className="py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose DummyStore?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to providing you with the best shopping experience
            possible
          </p>
        </header>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, i) => (
            <div
              style={{ transitionDelay: `${i * 300}ms` }}
              className={`${
                visible
                  ? "translate-y-[0] opacity-100"
                  : " translate-y-[1000px] opacity-0"
              } duration-400`}
              key={i}
            >
              <FeaturesCard
                Icon={feature.Icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutFeaturesSection;
