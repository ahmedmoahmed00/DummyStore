import MemberCard from "./MemberCard";
import TeamWork1 from "../assets/About/TeamWork/teemwork1.webp";
import TeamWork2 from "../assets/About/TeamWork/teemwork2.webp";
import TeamWork3 from "../assets/About/TeamWork/teemwork3.webp";
import TeamWork4 from "../assets/About/TeamWork/teemwork4.webp";
import { useInView } from "../hooks/useInView";

function OurTeamSection() {
  const { ref, visible } = useInView(0);
  return (
    <div className="pb-16">
      <div className="container max-w-7xl mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The passionate people behind DummyStore's success
          </p>
        </header>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div
            className={`${
              visible
                ? "translate-x-0 opacity-100"
                : "translate-x-[-1000%] opacity-0"
            }  duration-300 delay-900`}
          >
            <MemberCard
              image={TeamWork1}
              name={"Sarah Johnson"}
              role={"CEO & Founder"}
              description={"Visionary leader with 15+ years in e-commerce"}
            />
          </div>
          <div
            className={`${
              visible
                ? "translate-x-0 opacity-100"
                : "translate-x-[-1000%] opacity-0"
            }  duration-300 delay-600`}
          >
            <MemberCard
              image={TeamWork2}
              name={"Michael Chen"}
              role={"CTO"}
              description={"Tech innovator passionate about user experience"}
            />
          </div>

          <div
            className={`${
              visible
                ? "translate-x-0 opacity-100"
                : "translate-x-[-1000%] opacity-0"
            }  duration-300 delay-300`}
          >
            <MemberCard
              image={TeamWork3}
              name={"Emily Rodriguez"}
              role={"Head of Marketing"}
              description={"Creative strategist driving brand growth"}
            />
          </div>
          <div
            className={`${
              visible
                ? "translate-x-0 opacity-100 "
                : "translate-x-[-1000%] opacity-0 "
            }  duration-300`}
          >
            <MemberCard
              image={TeamWork4}
              name={"David Kim"}
              role={"Head of Operations"}
              description={"Operations expert ensuring smooth delivery"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeamSection;
