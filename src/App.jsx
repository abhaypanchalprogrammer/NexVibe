import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./pages/Wrapper";
import Cart from "./pages/Cart";
import { CartProvider } from "./api/CartContext";
import AllProduct from "./pages/AllProduct";
import UseApi from "./api/UseApi";
import Contact from "./pages/Contact";
import useDebounce from "./Hooks/useDebounce";

const App = () => {
  const { products, isLoading } = UseApi();
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const filteredProduct = products.filter(
    (p) =>
      (filterCategory === "" || p.category === filterCategory) &&
      (p.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        p.category.toLowerCase().includes(debouncedSearch.toLowerCase())),
  );

  return (
    <CartProvider>
      <Header search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Wrapper isLoading={isLoading} />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/product"
          element={
            <AllProduct
              products={filteredProduct}
              isLoading={isLoading}
              allProducts={products}
              filterCategory={filterCategory}
              setFilterCategory={setFilterCategory}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
};

export default App;
