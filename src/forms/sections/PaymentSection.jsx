import { MdOutlinePayment } from "react-icons/md";
import FormInput from "../FormInput";

function PaymentSection({ register, errors }) {
  return (
    <div className="flex flex-col gap-6 border shadow-sm border-gray-200 py-6  px-6 rounded-xl">
      <div className="flex items-center gap-2">
        <MdOutlinePayment size={20} />
        <h2 className="leading-none font-semibold gap-2">Payment Method</h2>
      </div>
      <div className="flex items-center gap-2 p-4 border border-gray-200 rounded-lg">
        <input id="payment" type="radio" />
        <label
          className="flex items-center gap-2 cursor-pointer w-full text-sm"
          htmlFor="payment"
        >
          <MdOutlinePayment size={20} />
          <p>Credit/Debit Card</p>
        </label>
      </div>

      <div className="flex flex-col gap-3">
        <FormInput
          error={errors.cardnumber}
          register={{
            ...register("cardnumber", {
              required: "Card Number is required",
            }),
          }}
          id={"cardnumber"}
          placeholder={"1234 5678 9012 3456"}
          label={"Card Number"}
        />

        <FormInput
          error={errors.namecard}
          register={{
            ...register("namecard", {
              required: "Name on Card is required",
            }),
          }}
          id={"namecard"}
          placeholder={"John Doe"}
          label={"Name on Card"}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormInput
            error={errors.expirydate}
            register={{
              ...register("expirydate", {
                required: "Card Number is required",
              }),
            }}
            id={"expirydate"}
            placeholder={"MM/YY"}
            label={"Expiry Date"}
          />

          <FormInput
            error={errors.cvv}
            register={{
              ...register("cvv", {
                required: "CVV is required",
              }),
            }}
            id={"cvv"}
            placeholder={"123"}
            label={"CVV"}
          />
        </div>
      </div>
    </div>
  );
}

export default PaymentSection;
