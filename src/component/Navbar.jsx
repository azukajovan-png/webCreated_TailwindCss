import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <div>
      <div className="bg-black py-5 text-white flex flex-col items-center sm:flex-row sm:justify-between px-6 md:px-12 lg:px-20 sticky top-0 z-50 shadow-lg">
        
        {/* Logo */}
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <ShoppingCart className="h-8 w-8 text-yellow-500" />
          <span className="text-2xl font-bold">FreshCart</span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-lg">
          <Link
            to="/"
            className={`cursor-pointer transition-colors ${
              currentPage === "/" ? "text-yellow-500" : "hover:text-yellow-500"
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`cursor-pointer transition-colors ${
              currentPage === "/about"
                ? "text-yellow-500"
                : "hover:text-yellow-500"
            }`}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={`cursor-pointer transition-colors ${
              currentPage === "/contact"
                ? "text-yellow-500"
                : "hover:text-yellow-500"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Sign In Button */}
        <button className="mt-4 sm:mt-0 bg-yellow-500 text-black hover:bg-yellow-400 px-6 py-2 rounded-lg font-semibold transition-colors">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
