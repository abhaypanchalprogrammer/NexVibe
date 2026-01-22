import React from "react";
import { FaAward, FaLock } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import { MdSupportAgent } from "react-icons/md";

const information = [
  { icon: <FaLock />, title: "Secure Payment" },
  { icon: <FiPackage />, title: "Easy Return" },
  { icon: <FaTruckFast />, title: "Fast Delivery" },
  { icon: <MdSupportAgent />, title: "Customer Support" },
  { icon: <FaAward />, title: "Best Quality" },
];

const Service = () => {
  return (
    <section className="bg-white py-10">
      <h2 className="text-2xl md:text-3xl font-bold  mb-8 px-4 md:px-20">
        Why Shop With Us?
      </h2>
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 px-4 md:px-0">
        {information.map((info, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center  bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300  w-40 sm:w-44 md:w-48 lg:w-52 text-center px-29.5 py-6"
          >
            <div className="text-orange-400 text-5xl sm:text-6xl md:text-7xl mb-4">
              {info.icon}
            </div>
            <p className="font-semibold text-gray-700 text-base sm:text-lg md:text-lg">
              {info.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
