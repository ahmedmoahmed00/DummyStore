import { useForm } from "react-hook-form";
import { FaLock } from "react-icons/fa6";
import ContactInformationSection from "../forms/sections/ContactInformationSection";
import ShippingAddressSection from "../forms/sections/ShippingAddressSection";
import PaymentSection from "../forms/sections/PaymentSection";
import { useCart } from "../context/useCart";
import { formatCurrency } from "../utils/helpers";
import { SendEmail } from "../services/send-email/checkout";
import { CHECK_OUT_DETAILS } from "../config/checkoutdetailes";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function FormCheckout() {
  const { totalPriceCart } = useCart();
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    shouldFocusError: true,
  });

  const onSubmit = (data) => {
    const orderId = Math.round(Math.random() * 2453445218);
    const shipping = CHECK_OUT_DETAILS.SHIPPING;
    const tax = CHECK_OUT_DETAILS.TAX;
    const customer = {
      email: data.email,
    };
    SendEmail(orderId, cart, shipping, tax, customer).then(
      ({ success, errorMessage }) => {
        if (success) {
          clearCart();
          navigate("/products");
          toast.success(
            "Your order has been confirmed. Check your email for details.",
            {
              duration: 3000,
            }
          );
        } else {
          toast.error("Failed:", errorMessage);
        }
      }
    );
  };

  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <ContactInformationSection register={register} errors={errors} />
      <div className="flex flex-col gap-8">
        <ShippingAddressSection register={register} errors={errors} />
        <PaymentSection register={register} errors={errors} />
      </div>
      <button
        disabled={!isValid}
        className={`inline-flex items-center cursor-pointer justify-center gap-2 text-sm font-medium w-full py-3 rounded-lg text-white transition-colors
          ${
            !isValid
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } 
            `}
        type="submit"
      >
        <FaLock />
        Complete Order - {formatCurrency(totalPriceCart)}
      </button>
    </form>
  );
}

export default FormCheckout;
