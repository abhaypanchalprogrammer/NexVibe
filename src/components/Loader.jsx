import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-2 border-gray-200"></div>

        <div className="absolute inset-0 rounded-full border-2 border-orange-400 border-t-transparent animate-spin"></div>

        <div className="absolute inset-1/2 w-2 h-2 bg-orange-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default Loader;
