function SpecificationsProduct({ item }) {
  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 py-6 shadow-sm">
      <div className="px-6 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Product Details</h4>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center justify-between">
                <p className="text-gray-600 text-sm">Brand:</p>
                <p className="font-medium text-sm">
                  {item.brand || "Undefined"}
                </p>
              </li>
              <li className="flex items-center justify-between">
                <p className="text-gray-600 text-sm">Category:</p>
                <p className="font-medium text-sm">
                  {item.category || "Undefined"}
                </p>
              </li>
              <li className="flex items-center justify-between">
                <p className="text-gray-600 text-sm">Stock:</p>
                <dd
                  className={`font-medium ${
                    item.stock < 10 ? "text-red-500" : ""
                  }`}
                >
                  {item.stock || "Undefined"}
                </dd>
              </li>
              <li className="flex items-center justify-between">
                <p className="text-gray-600 text-sm">Rating:</p>
                <p className="font-medium text-sm">
                  {item.rating || "Undefined"}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecificationsProduct;
