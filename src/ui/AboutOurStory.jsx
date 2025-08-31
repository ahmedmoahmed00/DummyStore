import { CircleCheckBig } from "lucide-react";
import aboutteemwork2 from "../assets/About/aboutteemwork2.webp";
import Stars from "./Stars";

function AboutOurStory() {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-16">
      <div className="grid  lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>
              Founded in 2020, DummyStore began as a simple idea: to create an
              online marketplace that puts customers first. What started as a
              small team of passionate entrepreneurs has grown into a global
              platform serving millions of customers worldwide.
            </p>
            <p>
              We believe that shopping should be easy, enjoyable, and accessible
              to everyone. That's why we've built our platform using the latest
              technologies, including the powerful DummyJSON API, to provide you
              with real-time product information, seamless transactions, and
              personalized experiences.
            </p>
            <p>
              Today, we're proud to offer thousands of products across multiple
              categories, from the latest smartphones and laptops to beauty
              products and home essentials. Our commitment to quality,
              innovation, and customer satisfaction drives everything we do.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <CircleCheckBig className="w-6 h-6 text-green-600" />
            <span className="text-lg font-medium">
              Trusted by 500K+ customers
            </span>
          </div>
        </div>
        <div className="relative mx-auto">
          <img
            src={aboutteemwork2}
            alt="About Team Work"
            className="rounded-lg h-fit shadow-lg"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <Stars rating={5} size={20} gap={8} showrating={false} />
            </div>
            <p className="font-bold text-lg">4.9/5 Rating</p>
            <p className="text-sm text-gray-600">From 50K+ reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutOurStory;
