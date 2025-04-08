import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-yellow-400 px-6 py-3 shadow-md flex justify-between items-center">
      {/* Left: Logo */}
      <div className="text-2xl font-bold text-pink-700">
        <span className="flex items-center gap-2">
          🧠 <span>PlayShifu</span>
        </span>
      </div>

      {/* Center: Links */}
      <ul className="hidden md:flex space-x-6 font-medium text-sm text-gray-800">
        <li className="hover:text-red-600 cursor-pointer">Shop By Category</li>
        <li className="hover:text-red-600 cursor-pointer">Shop By Age</li>
        <li className="hover:text-red-600 cursor-pointer">Super Saver Deals</li>
        <li className="hover:text-red-600 cursor-pointer">Birthday Gifts</li>
        <li className="hover:text-red-600 cursor-pointer">Return Gifts</li>
      </ul>

      {/* Right: Icons */}
      <div className="flex items-center gap-4">
        <span role="img" aria-label="cart" className="text-2xl cursor-pointer">🛒</span>
        <span role="img" aria-label="user" className="text-2xl cursor-pointer">👤</span>
      </div>
    </nav>
  );
};

export default Navbar;
