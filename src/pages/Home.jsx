import HeroSection from "../ui/HeroSection";
import ProductsSection from "../components/ProductsSection";
import SummarySection from "../ui/SummarySection";
import TestimonialsSection from "../ui/TestimonialsSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <SummarySection />
      <ProductsSection />
      <TestimonialsSection />
    </div>
  );
}

export default Home;
