import Marquee from "react-fast-marquee";
import TestimonialBox from "./TestimonialBox";

function TestimonialsSection() {
  return (
    <div className="container max-w-7xl mx-auto py-12 overflow-visible">
      <div className="mb-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-2 ">
          What Our Customers Say
        </h2>
        <p className=" text-gray-900 ">
          Join thousands of satisfied customers who love shopping with
          DummyStore
        </p>
      </div>
      <div>
        <Marquee
          speed={100}
          pauseOnHover
          gradient={true}
          className="py-3 relative overflow-y-hidden"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div className="mx-2" key={i}>
              <TestimonialBox />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default TestimonialsSection;
