import React, { useState } from "react";


const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(1);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity === 1) {
      setQuantity(0);
    } else {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md p-6 mb-6 gap-6">
      <div className="md:w-1/3 w-full">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="md:w-2/3 w-full flex flex-col justify-between">
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-700 mb-2">{product.description}</p>

        {/* Render features if present */}
        {product.features && product.features.length > 0 && (
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap items-center gap-4 mb-4">
          <p className="text-xl font-semibold text-green-600">₹{product.price}</p>
          <p className="line-through text-gray-500">₹{product.originalPrice}</p>
          <p className="text-yellow-600 font-medium">⭐ {product.rating}</p>
        </div>

        {quantity === 0 ? (
          <button
            onClick={handleAddToCart}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg w-fit"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <button
              onClick={decreaseQuantity}
              className="bg-gray-200 hover:bg-gray-300 text-black font-bold px-3 py-1 rounded"
            >
              −
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="bg-gray-200 hover:bg-gray-300 text-black font-bold px-3 py-1 rounded"
            >
              +
            </button>
            
          </div>
          
        )}
      </div>
     
    </div>
  );
};

export default ProductCard;
