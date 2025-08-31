import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactTouchCard from "./ContactTouchCard";
import { useInView } from "../hooks/useInView";

const contactCards = [
  {
    Icon: Phone,
    title: "Phone Support",
    description: "Speak with our support team",
    mainInfo: "+1 (555) 123-4567",
    badge: "24/7 Available",
  },
  {
    Icon: Mail,
    title: "Email Support",
    description: "Send us your questions",
    mainInfo: "support@dummystore.com",
    badge: "Response within 2 hours",
  },
  {
    Icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with us in real-time",
    mainInfo: "Available on website",
    badge: "Mon-Fri 9AM-6PM EST",
  },
  {
    Icon: MapPin,
    title: "Visit Our Office",
    description: "Come see us in person",
    mainInfo: "123 Commerce St, NY 10001",
    badge: "Mon-Fri 9AM-5PM EST",
  },
];

function ContactTouchSection() {
  const { ref, visible } = useInView();
  return (
    <div className="bg-gray-50">
      <div className="container max-w-7xl flex flex-col gap-12 mx-auto py-16 px-4 ">
        <header className="flex flex-col items-center gap-4 justify-center">
          <h2 className="text-3xl font-bold ">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-center">
            Choose the method that works best for you
          </p>
        </header>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactCards.map((card, index) => (
            <div
              style={{ transitionDelay: `${index * 300}ms` }}
              className={`${
                visible ? " scale-100 opacity-100" : " scale-0 opacity-0"
              } transform transition-all duration-400`}
              key={index}
            >
              <ContactTouchCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactTouchSection;
