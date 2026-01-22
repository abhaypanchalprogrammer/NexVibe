import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold  mb-12">Contact Us</h2>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 bg-white p-8 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-400 text-white py-2 rounded-xl hover:bg-orange-500 transition-colors duration-300 mt-2"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex-1 bg-white p-8 rounded-2xl shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-2">
              <strong>Address:</strong> 123 E-Shop Street, City, Country
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +91 12345 67890
            </p>
            <p className="mb-4">
              <strong>Email:</strong> support@eshop.com
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-4 mt-2">
              <a
                href="#"
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <p className="text-gray-600">💳 Secure Payment</p>
            <p className="text-gray-600">🚚 Fast Delivery</p>
            <p className="text-gray-600">🔄 Easy Returns</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
