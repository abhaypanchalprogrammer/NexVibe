import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const cartProduct = {
      ...product,
      image: product.image || product.images?.[0] || "fallback.jpg",
      quantity: 1,
    };

    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p,
        );
      }
      return [...prev, cartProduct];
    });
  };

  const removeFromCart = (id) =>
    setCartItems((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, quantity: (p.quantity || 1) - 1 } : p,
        )
        .filter((p) => p.quantity > 0),
    );

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
