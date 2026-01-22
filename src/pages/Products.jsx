import React from "react";
import UseApi from "../api/UseApi";
import { CartContext } from "../api/CartContext";
import { useContext } from "react";

const Products = () => {
  const { products, error } = UseApi();
  const { addToCart } = useContext(CartContext);

  if (error)
    return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

  const categoryMap = {};
  for (const product of products) {
    if (!categoryMap[product.category]) {
      if (!product.brand) continue;
      categoryMap[product.category] = product;
    }
  }

  const firstEightCategoryProducts = Object.values(categoryMap).slice(0, 8);

  return (
    <div className="bg-gray-50 pt-">
      <h2 className="px-20 pt-10  text-3xl font-bold">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-12 py-14 md:px-20">
        {firstEightCategoryProducts.map((product) => {
          const discountedPrice = (
            product.price -
            (product.price * product.discountPercentage) / 100
          ).toFixed(2);

          return (
            <div
              key={product.id}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl p-4 transition-all duration-300"
            >
              <span className="absolute top-3 left-3 bg-orange-400 text-white text-xs px-2 py-1 rounded-full">
                -{product.discountPercentage}%
              </span>

              <div className="overflow-hidden rounded-lg">
                <img
                  src={product.images?.[0] || "fallback.jpg"}
                  alt={product.title}
                  className="h-40 w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <p className="text-xs text-gray-400 mt-3 uppercase tracking-wide">
                {product.category}
              </p>

              <p className="font-semibold text-gray-800 mt-1 line-clamp-2">
                {product.title}
              </p>

              <p className="text-sm text-gray-500">{product.brand}</p>

              <div className="flex items-center gap-1 mt-1 text-sm">
                <span className="text-yellow-400">★</span>
                <span>{product.rating}</span>
                <span className="text-gray-400">/ 5</span>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <span className="text-orange-500 font-bold text-lg">
                  ${discountedPrice}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ${product.price}
                </span>
              </div>

              <p
                className={`text-sm mt-1 ${
                  product.stock > 10 ? "text-green-600" : "text-red-500"
                }`}
              >
                {product.stock > 10 ? "In Stock" : "Limited Stock"}
              </p>

              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-orange-400 text-white py-2 rounded-lg font-medium hover:bg-orange-500 active:scale-95 transition-all"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
