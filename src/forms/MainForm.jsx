import { useForm } from "react-hook-form";
import PersonalInfoSection from "./sections/ContactInformationSection";
import AddressSection from "./sections/PaymentSection";

function MainForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 p-4 max-w-lg mx-auto"
    >
      <PersonalInfoSection register={register} errors={errors} />
      <AddressSection register={register} errors={errors} />

      <button
        type="submit"
        className="bg-blue-600 text-white rounded-md px-6 py-2 hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

export default MainForm;
