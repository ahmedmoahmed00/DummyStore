import { Headphones, Shield } from "lucide-react";

function ContactHeroSection() {
  return (
    <div className="py-30  bannercontact">
      <div className="text-center container mx-auto text-white px-1">
        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          We're here to help! Get in touch with our friendly support team for
          any questions, concerns, or feedback you may have.
        </p>
        <div className="flex gap-4 flex-wrap items-center justify-center">
          <div className="flex items-center flex-wrap  justify-center">
            <p className=" text-lg border-2 flex items-center gap-2  bg-white text-green-600 px-6 py-2 border-white rounded-md">
              <Headphones size={15} />
              24/7 Support
            </p>
          </div>
          <div className="flex items-center flex-wrap  justify-center">
            <p className=" text-lg border-2 flex items-center gap-2  bg-white text-green-600 px-6 py-2 border-white rounded-md">
              <Shield size={15} />
              Secure & Private
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactHeroSection;
