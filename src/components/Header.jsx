import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../api/CartContext";
import { useContext } from "react";

const Header = ({ search, setSearch }) => {
  const { cartItems } = useContext(CartContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <>
      <header className="h-16 w-full flex justify-between items-center px-6 md:px-12 lg:px-20 bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <h1 className="text-3xl font-bold text-orange-500">NexVibe</h1>

        <nav className="flex items-center gap-4 md:gap-8 lg:gap-10">
          <div className="hidden lg:flex items-center gap-6 lg:gap-10">
            <Link
              to="/"
              className="hover:underline hover:text-orange-500 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/product"
              className="hover:underline hover:text-orange-500 cursor-pointer"
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="hover:underline hover:text-orange-500 cursor-pointer"
            >
              Contact
            </Link>
          </div>

          <div
            className={`flex items-center gap-2 rounded-md border border-gray-300 bg-gray-50 transition-all duration-300
              ${openSearch ? "absolute top-16 left-6 right-6 md:static md:w-auto" : "hidden lg:flex"}
            `}
          >
            <input
              type="text"
              placeholder="Search Items"
              className="bg-transparent outline-none text-sm w-full md:w-48 px-3 py-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="bg-orange-400 hover:bg-orange-500 px-3 py-2.5 rounded-r-md">
              <FaSearch className="text-white" />
            </button>
          </div>

          <button
            onClick={() => setOpenSearch(!openSearch)}
            className="lg:hidden focus:outline-none text-gray-600"
          >
            {openSearch ? "✕" : <FaSearch />}
          </button>

          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="lg:hidden focus:outline-none"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-gray-600"></span>
              <span className="block h-0.5 w-6 bg-gray-600"></span>
              <span className="block h-0.5 w-6 bg-gray-600"></span>
            </div>
          </button>
        </nav>

        <div className="flex items-center gap-4 md:gap-5">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl text-orange-400 cursor-pointer hover:text-orange-500" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
          <div className="flex items-center gap-6">
            <FaUser />
            <h2 className="hidden md:block text-sm">Username</h2>
            <button className="text-lg cursor-pointer">
              <FaSignOutAlt />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`lg:hidden fixed z-50 top-16 left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out
          ${openMenu ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <div className="flex flex-col  gap-4 p-6">
          <Link
            to="/"
            onClick={() => setOpenMenu(false)}
            className="hover:text-cyan-500"
          >
            Home
          </Link>
          <Link
            to="/product"
            onClick={() => setOpenMenu(false)}
            className="hover:text-cyan-500"
          >
            Products
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpenMenu(false)}
            className="hover:text-cyan-500"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
