import { useState, useEffect } from "react";
const UseApi = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=100");
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        console.log("error fetching data ", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, []);
  return { products, isLoading, error };
};

export default UseApi;
