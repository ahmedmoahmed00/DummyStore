import { Minus, Plus } from "lucide-react";
import { useRef, useState } from "react";

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all items in original condition with receipt.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to over 50 countries worldwide. Shipping costs vary by location.",
  },
  {
    question: "What is your return policy?",
    answer:
      "You'll receive a tracking number via email once your order ships. Use it on our tracking page.",
  },
];

function ContactAskedQuestions() {
  const [openIndex, setOpenIndex] = useState(null);
  const refs = useRef([]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-6  lg:py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <header className="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Quick answers to common questions
          </p>
        </header>
        <div className="space-y-3">
          {faqs.map((item, index) => (
            <div key={index} className="border border-gray-300 ">
              <div
                className="flex items-center w-full justify-between p-4 bg-gray-100 cursor-pointer  "
                onClick={() => toggle(index)}
              >
                <h2 className="font-semibold">{item.question}</h2>

                {openIndex === index ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </div>

              <div
                ref={(el) => (refs.current[index] = el)}
                className="overflow-hidden transition-[max-height] duration-300 ease-in-out bg-gray-50 "
                style={{
                  maxHeight:
                    openIndex === index
                      ? refs.current[index]?.scrollHeight + "px"
                      : "0px",
                }}
              >
                <div className="p-4">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactAskedQuestions;
