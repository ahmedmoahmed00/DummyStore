function ProductDetailsSkeleton() {
  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col lg:flex-row gap-8">
      <div className="flex flex-col gap-4 flex-1">
        <div className="bg-gray-200 animate-pulse w-full h-96 rounded-lg"></div>

        <div className="flex gap-4">
          <div className="bg-gray-200 animate-pulse w-20 h-20 rounded"></div>
          <div className="bg-gray-200 animate-pulse w-20 h-20 rounded"></div>
          <div className="bg-gray-200 animate-pulse w-20 h-20 rounded"></div>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <div className="bg-gray-200 animate-pulse h-8 w-3/4 rounded"></div>

        <div className="bg-gray-200 animate-pulse h-6 w-1/4 rounded"></div>

        <div className="space-y-2">
          <div className="bg-gray-200 animate-pulse h-4 w-full rounded"></div>
          <div className="bg-gray-200 animate-pulse h-4 w-full rounded"></div>
          <div className="bg-gray-200 animate-pulse h-4 w-5/6 rounded"></div>
        </div>

        <div className="bg-gray-200 animate-pulse h-10 w-32 mt-6 rounded"></div>
      </div>
    </div>
  );
}

export default ProductDetailsSkeleton;
