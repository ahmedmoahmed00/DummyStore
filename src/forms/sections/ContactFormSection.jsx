import { useForm } from "react-hook-form";
import FormInput from "../FormInput";
import { egyptPhoneRegex, emailRegex } from "../../utils/regex";
import toast from "react-hot-toast";

function ContactFormSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold">Send Us a Message</h2>
        <p className="text-gray-600 ">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </header>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="grid md:grid-cols-2 gap-4">
          <FormInput
            id={"firstName"}
            label={"First Name"}
            placeholder={"John"}
            required={true}
            register={{
              ...register("firstName", {
                required: "First Name is required",
              }),
            }}
            error={errors.firstName}
          />
          <FormInput
            id={"lasttName"}
            label={"Last Name"}
            placeholder={"Doe"}
            required={true}
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
        <div>
          <FormInput
            id={"subject"}
            label={"Subject"}
            placeholder="How Can We Help You?"
            {...register("subject")}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium" htmlFor={"message"}>
            Message *
          </label>
          <textarea
            className="text-sm h-[162px] border w-full resize-none border-gray-200 py-2 px-3 rounded-md focus:shadow focus:shadow-gray-400 duration-300"
            id={"message"}
            label={"Message"}
            placeholder="Please describe your inquiry in detail..."
            {...register("subject")}
          />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="subscribed" {...register("subscribed")} />
          <label htmlFor="subscribed" className="text-sm text-gray-600">
            Subscribe to our newsletter for updates and special offers
          </label>
        </div>
        <div>
          <button
            className={`${
              isValid ? " opacity-100 hover:bg-green-700" : " opacity-50"
            } inline-flex items-center text-white justify-center bg-green-600  gap-2 text-sm font-medium transition-all shadow-xs h-10 rounded-md px-6 w-full  `}
            type="submit"
            disabled={!isValid}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactFormSection;
