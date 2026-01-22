import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold mb-2">NexVibe</h2>
          <p className="text-gray-300">
            Trendy clothing, fast delivery, and hassle-free returns — style
            meets convenience.
          </p>

          <div className="flex gap-4 mt-4">
            <a
              className="bg-blue-600 p-3 rounded-full hover:scale-110 transition-transform"
              href="#"
            >
              <FaFacebookF />
            </a>
            <a
              className="bg-pink-500 p-3 rounded-full hover:scale-110 transition-transform"
              href="#"
            >
              <FaInstagram />
            </a>
            <a
              className="bg-blue-400 p-3 rounded-full hover:scale-110 transition-transform"
              href="#"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li className="hover:text-white transition-colors cursor-pointer">
              <Link to="/">Home</Link>
             
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
                <Link to="/product">Products</Link>
            </li>
           
            <li className="hover:text-white transition-colors cursor-pointer">
               <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
          <p className="text-gray-300">Subscribe for offers & new arrivals.</p>
          <div className="flex gap-2 mt-2 border border-orange-400 rounded-lg">
            <input
              type="email"
              placeholder="Your email"
              className="text-white flex-1 px-4 py-2 rounded-l-lg focus:outline-none"
            />
            <button className="bg-orange-400 px-4 py-2 rounded-r-lg hover:bg-orange-500 transition-colors font-semibold">
              Subscribe
            </button>
          </div>

          <div className="flex gap-4 mt-6">
            <FaCcVisa
              size={36}
              className="hover:scale-110 transition-transform"
            />
            <FaCcMastercard
              size={36}
              className="hover:scale-110 transition-transform"
            />
            <FaCcPaypal
              size={36}
              className="hover:scale-110 transition-transform"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-700 py-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} NexVibe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


