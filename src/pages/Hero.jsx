import React from "react";

const Hero = () => {
  return (
    <div className="main flex flex-col gap-2 py-15 px-12 md:px-20 justify-center  h-auto">
      <div className="flex flex-col gap-5 py-40">
        <h2 className="text-5xl font-extrabold">Discover What You Love</h2>
        <h2 className="text-4xl font-bold">With Unbeatable Price!</h2>
        <p>Find the best deals on the trends you adore</p>
        <div className="flex gap-3">
          <button className="bg-orange-400 text-white px-7 py-1.5 self-start rounded-md cursor-pointer hover:bg-orange-500">
            Shop Now
          </button>
          <button className=" bg-orange-400 text-white px-7 py-1.5 self-start rounded-md cursor-pointer hover:bg-orange-500">
            Categories
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
