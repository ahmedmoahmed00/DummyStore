import AboutFeaturesSection from "../ui/AboutFeaturesSection";
import AboutOurStory from "../ui/AboutOurStory";
import AboutSummarySection from "../ui/AboutSummarySection";
import AboutHeroSection from "../ui/AboutHeroSection";
import OutTeamSection from "../ui/OurTeamSection";
import TestimonialsSection from "../ui/TestimonialsSection";
import AboutOurMissionSection from "../ui/AboutOurMissionSection";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <AboutHeroSection />
      <div className="bg-gray-50">
        <AboutSummarySection />
      </div>
      <AboutOurStory />
      <AboutFeaturesSection />
      <TestimonialsSection />
      <OutTeamSection />
      <AboutOurMissionSection />
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Experience the difference of shopping with DummyStore. Join millions
            of satisfied customers today.
          </p>
          <div className="flex gap-4 justify-center ">
            <Link
              className="inline-flex items-center text-white justify-center gap-2 text-sm font-medium transition-all shadow-xs h-10 rounded-md px-6  bg-pink-600 hover:bg-pink-700"
              to="/products"
            >
              Start Shopping
            </Link>

            <Link
              className="inline-flex items-center text-black justify-center bg-white gap-2 text-sm font-medium transition-all shadow-xs h-10 rounded-md px-6   hover:bg-black/2 border border-gray-200"
              to="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
