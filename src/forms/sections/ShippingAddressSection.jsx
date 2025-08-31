import { MapPin } from "lucide-react";
import { egyptPhoneRegex } from "../../utils/regex";
import FormInput from "../FormInput";

function ShippingAddressSection({ register, errors }) {
  return (
    <div className="flex flex-col gap-6 border shadow-sm border-gray-200 py-6  px-6 rounded-xl">
      <div className="flex items-center gap-2">
        <MapPin size={20} />
        <h2 className="leading-none font-semibold gap-2">Shipping Address</h2>
      </div>
      <div className="flex flex-col gap-2">
        <div className="grid md:grid-cols-2 gap-4">
          <FormInput
            id={"firstName"}
            label={"First Name"}
            placeholder="John"
            register={{
              ...register("firstName", {
                required: "First Name is required",
              }),
            }}
            error={errors.firstName}
          />
          <FormInput
            id={"lastName"}
            label={"Last Name"}
            placeholder="Doe"
            register={{
              ...register("lastName", {
                required: "Last Name is required",
              }),
            }}
            error={errors.lastName}
          />
        </div>
        <div>
          <FormInput
            id={"address"}
            label={"Address"}
            placeholder="123 Main Street"
            register={{
              ...register("address", {
                required: "Address is required",
              }),
            }}
            error={errors.address}
          />
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <FormInput
            id={"city"}
            label={"City"}
            placeholder="Buffalo, NY"
            register={{
              ...register("city", {
                required: "City is required",
              }),
            }}
            error={errors.city}
          />
          <FormInput
            id={"state"}
            label={"State"}
            placeholder="New York"
            register={{
              ...register("state", {
                required: "State is required",
              }),
            }}
            error={errors.state}
          />
          <FormInput
            id={"zipCode"}
            label={"ZIP Code"}
            placeholder="14201"
            register={{
              ...register("zipcode"),
            }}
            error={errors.zipcode}
          />
        </div>
        <div>
          <FormInput
            id={"phone"}
            label={"Phone Number"}
            placeholder="+1 (555) 123-4567"
            register={{
              ...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: egyptPhoneRegex,
                  message: "Please enter a valid Egyptian phone number",
                },
              }),
            }}
            error={errors.phone}
          />
        </div>
      </div>
    </div>
  );
}

export default ShippingAddressSection;
