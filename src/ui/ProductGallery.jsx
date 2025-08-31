import { useState } from "react";

function ProductGallery({ images, sale = 10, titleAlt }) {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div>
      <div className="relative overflow-hidden rounded-lg border border-gray-200">
        <img
          alt="Dolce Shine Eau de"
          className="w-fit mx-auto  h-96"
          src={images[imageIndex]}
        />
        <span className="items-center justify-center rounded-md text-white px-2 py-0.5 text-xs font-medium w-fit  absolute top-4 right-4 bg-red-500">
          {-sale}% OFF
        </span>
      </div>
      <div className="grid grid-cols-3 lg:flex lg:flex-wrap gap-2 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setImageIndex(index)}
            className={`${
              index === imageIndex ? "border-purple-600" : "border-gray-300"
            } mt-5 cursor-pointer border-2 rounded-lg overflow-hidden `}
          >
            <img
              alt={`${titleAlt} ${index}`}
              className="h-20 object-cover w-full"
              src={image}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
