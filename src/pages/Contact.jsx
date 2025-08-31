import ContactFormSection from "../forms/sections/ContactFormSection";
import ContactInformationSection from "../forms/sections/ContactInformationSection";
import ContactAskedQuestions from "../ui/ContactAskedQuestions";
import ContactHeroSection from "../ui/ContactHeroSection";
import ContactPageInformationSection from "../ui/ContactPageInformationSection";
import ContactTouchSection from "../ui/ContactTouchSection";

function Contact() {
  return (
    <div>
      <ContactHeroSection />
      <ContactTouchSection />
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 py-6  lg:py-16">
        <ContactFormSection />
        <ContactPageInformationSection />
      </div>
      <ContactAskedQuestions />
    </div>
  );
}

export default Contact;
