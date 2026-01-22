import React, { useContext } from "react";
import { CartContext } from "../api/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-50 text-gray-500">
        <h2 className="text-4xl font-bold mb-4">🛒 Your Cart is Empty</h2>
        <p className="text-lg">Add some products to start shopping!</p>
      </div>
    );
  }

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0,
  );

  return (
    <div className="max-w-full mx-auto px-6 py-12 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
        Your Shopping Cart
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center md:items-start justify-between bg-white rounded-2xl shadow hover:shadow-xl transition-shadow p-6 gap-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-contain rounded-lg bg-gray-100 p-2"
              />
              <div className="flex-1 md:ml-6 flex flex-col gap-1">
                <h3 className="font-semibold text-lg text-gray-800 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-medium">
                  ₹{item.price.toFixed(2)} x {item.quantity}
                </p>
                <p className="text-gray-400 text-sm">
                  Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 font-semibold self-start md:self-auto"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="w-full md:w-80 flex-shrink-0 border rounded-2xl p-6 bg-white shadow">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Order Summary
          </h3>
          <div className="flex flex-col gap-3">
            <p className="flex justify-between text-gray-700">
              <span>Items:</span>
              <span>{cartItems.length}</span>
            </p>
            <p className="flex justify-between font-semibold text-gray-900 text-lg">
              <span>Total:</span>
              <span>₹{total.toFixed(2)}</span>
            </p>
          </div>
          <button className="w-full bg-orange-400 text-white py-3 rounded-xl font-semibold mt-6 hover:bg-orange-500 transition-colors shadow-md">
            Proceed to Checkout
          </button>
          <button
            onClick={clearCart}
            className="w-full border border-red-500 text-red-500 py-3 rounded-xl font-semibold mt-3 hover:bg-red-500 hover:text-white transition-colors shadow-md"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
