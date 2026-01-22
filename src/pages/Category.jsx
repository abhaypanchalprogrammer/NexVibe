import React from "react";
import UseApi from "../api/UseApi";

const dotColors = [
  "bg-orange-500",
  "bg-pink-500",
  "bg-purple-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-yellow-500",
];

const Category = () => {
  const { products, error } = UseApi();

  if (error) return <p className="text-center py-6 text-red-500">{error}</p>;

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 px-6 md:px-20 py-4">
      {categories.map((category, index) => (
        <button
          key={category}
          className="
          cursor-pointer
            group flex items-center gap-2
            px-3 py-1.5
            rounded-full
            text-xs font-medium
            bg-orange-400 text-gray-900
            hover:bg-gray-900 hover:text-white
            transition-all duration-200
          "
        >
          <span
            className={`
              w-2 h-2 rounded-full
              ${dotColors[index % dotColors.length]}
              group-hover:scale-125
              transition-transform
            `}
          />
          <span className="capitalize">{category}</span>
        </button>
      ))}
    </div>
  );
};

export default Category;
