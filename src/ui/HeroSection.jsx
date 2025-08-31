import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="py-30  bannerhome">
      <div className="text-center container mx-auto text-white">
        <h1 className="text-5xl font-bold mb-6">Welcome to DummyStore</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Discover amazing products, connect with users, and explore our
          comprehensive marketplace powered by DummyJSON API
        </p>
        <div className="flex items-center flex-wrap gap-4 justify-center">
          <Link
            to={"/products"}
            className="bg-white border-2 hover:bg-transparent hover:text-white border-white py-2 px-5 rounded-md text-pink-600"
          >
            ShopNow
          </Link>
          <Link
            className="border-white border-2 py-2 px-5 rounded-md text-white hover:bg-white hover:text-pink-600"
            to="/about"
            aria-label="Learn more about our company and services"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
