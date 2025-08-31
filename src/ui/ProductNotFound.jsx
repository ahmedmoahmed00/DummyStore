import { FiAlertCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

function ProductNotFound() {
  return (
    <div className="flex  flex-col items-center justify-center py-10 space-y-4">
      <FiAlertCircle size={64} className="text-gray-400" />
      <p className="text-gray-600 text-lg font-medium text-center">
        Product not found.
      </p>
      <Link
        to={"/products"}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Back to Products Page
      </Link>
    </div>
  );
}

export default ProductNotFound;
