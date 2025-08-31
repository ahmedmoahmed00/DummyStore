import emailjs from "emailjs-com";
import logo from "../../assets/logo.png";

export async function SendEmail(orderId, cart, shipping, tax, customer) {
  try {
    const templateParams = {
      email: customer.email,
      logo,
      order_id: orderId,
      orders: cart.map((item) => ({
        name: item.title,
        units: item.quantity,
        price: (item.price * item.quantity).toFixed(2),
        image_url: item.images?.[0] || item.thumbnail,
      })),
      cost: {
        shipping: shipping.toFixed(2),
        tax: tax.toFixed(2),
        total: (
          cart.reduce((sum, item) => sum + item.price * item.quantity, 0) +
          shipping +
          tax
        ).toFixed(2),
      },
    };

    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    console.log("Message sent:", result.text);
    return { success: true, errorMessage: "" };
  } catch (error) {
    console.error("Error sending email:", error.text);
    return { success: false, errorMessage: error.text };
  }
}
