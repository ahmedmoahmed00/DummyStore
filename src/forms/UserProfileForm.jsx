import { useForm } from "react-hook-form";
import FormInput from "./FormInput";

function UserProfileForm({ disabled }) {
  const showStar = false;

  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "Michael",
      lastName: "Williams",
      email: "michael.williams@x.dummyjson.com",
      phone: "+49 258-627-6644",
      birthdate: "11/11/1990",
      streetaddress: "385 Fifth Street",
      city: "Houston",
      postalcode: "38807",
      country: "United States",
    },
  });
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        <FormInput
          id={"firstName"}
          disabled={disabled}
          ShowStar={showStar}
          label={"First Name"}
          register={{ ...register("firstName") }}
          placeholder="First Name"
        />
        <FormInput
          id={"lastName"}
          disabled={disabled}
          ShowStar={showStar}
          label={"Last Name"}
          register={{ ...register("lastName") }}
          placeholder="Last Name"
        />
      </div>
      <div>
        <FormInput
          disabled={disabled}
          ShowStar={showStar}
          register={{ ...register("email") }}
          id={"email"}
          label={"Email Address"}
          type={"email"}
        />
      </div>

      <div>
        <FormInput
          disabled={disabled}
          ShowStar={showStar}
          register={{ ...register("phone") }}
          id={"phone"}
          label={"Phone Number"}
          placeholder="Phone Number"
        />
      </div>
      <div>
        <FormInput
          disabled={disabled}
          ShowStar={showStar}
          register={{ ...register("birthdate") }}
          id={"birthdate"}
          label={"Birth Date"}
          type={"date"}
          placeholder="Birth Date"
        />
      </div>
      <span className="w-full h-px bg-gray-300"></span>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-4">Address Information</h2>
        </div>
        <div>
          <FormInput
            id={"streetaddress"}
            disabled={disabled}
            ShowStar={showStar}
            label={"Street Address"}
            register={{ ...register("streetaddress") }}
            placeholder="First Name"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <FormInput
            id={"city"}
            disabled={disabled}
            ShowStar={showStar}
            label={"City"}
            register={{ ...register("city") }}
            placeholder="Houston"
          />
          <FormInput
            id={"state"}
            disabled={disabled}
            ShowStar={showStar}
            label={"State"}
            register={{ ...register("alabama") }}
            placeholder="Alabama"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <FormInput
            id={"postalcode"}
            disabled={disabled}
            ShowStar={showStar}
            label={"Postal Code"}
            register={{ ...register("postalcode") }}
            placeholder="postalcode"
          />
          <FormInput
            id={"country"}
            disabled={disabled}
            ShowStar={showStar}
            label={"Country"}
            register={{ ...register("country") }}
            placeholder="United States"
          />
        </div>
      </div>
    </>
  );
}

export default UserProfileForm;
