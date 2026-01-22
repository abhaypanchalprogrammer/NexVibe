import React from "react";
import Hero from "./Hero";
import Products from "./Products";
import Category from "./Category";
import Service from "./Service";
import Contact from "./Contact";

import Loader from "../components/Loader";

const Wrapper = ({ isLoading }) => {
  if (isLoading) return <Loader />;

  return (
    <div>
      <Hero />
      <Category />
      <Products />
      <Service />
      <Contact />
    </div>
  );
};

export default Wrapper;
