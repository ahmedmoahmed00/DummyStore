import { User } from "lucide-react";
import FormInput from "../FormInput";
import { emailRegex } from "@/utils/regex";

function ContactInformationSection({ register, errors }) {
  return (
    <div className="border shadow-sm border-gray-200 py-6  px-6 rounded-xl">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <User size={20} />
          <h2 className="leading-none font-semibold gap-2">
            Contact Information
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <FormInput
              required={false}
              error={errors.email}
              register={{
                ...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: emailRegex,
                    message: "Please enter a valid email address",
                  },
                }),
              }}
              id={"email"}
              placeholder={"john@example.com"}
              label={"Email Address"}
              type={"email"}
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              id="newsletter"
              className="accent-black size-4 "
              type="checkbox"
            />
            <label
              className="flex items-center gap-2 font-medium text-sm"
              htmlFor="newsletter"
            >
              Subscribe to our newsletter for updates and special offers
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInformationSection;
