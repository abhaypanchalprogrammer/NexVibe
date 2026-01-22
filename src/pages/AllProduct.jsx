import React, { useContext } from "react";
import { CartContext } from "../api/CartContext";
import Loader from "../components/Loader";

const AllProduct = ({
  products,
  allProducts,
  isLoading,
  filterCategory,
  setFilterCategory,
}) => {
  const { addToCart } = useContext(CartContext);

  const categories = [...new Set(allProducts.map((p) => p.category))];

  if (isLoading) return <Loader />;

  return (
    <div className="h-auto bg-white py-10 ">
      <div className="px-6 md:px-20">
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="border px-4 py-2 rounded-md bg-white"
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-20 py-10 ">
        {products.map((product) => {
          const discountedPrice = (
            product.price -
            (product.price * product.discountPercentage) / 100
          ).toFixed(2);

          return (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-4 transition"
            >
              <span className="absolute bg-orange-400 text-white text-xs px-2 py-1 rounded">
                -{product.discountPercentage}%
              </span>

              <img
                src={product.images?.[0]}
                alt={product.title}
                className="h-40 w-full object-contain"
              />

              <p className="text-xs text-gray-400 mt-2 uppercase">
                {product.category}
              </p>

              <p className="font-semibold line-clamp-2">{product.title}</p>

              <div className="flex gap-2 mt-2">
                <span className="text-orange-500 font-bold">
                  ${discountedPrice}
                </span>
                <span className="line-through text-gray-400">
                  ${product.price}
                </span>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-orange-400 text-white py-2 rounded hover:bg-orange-500"
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

export default AllProduct;
