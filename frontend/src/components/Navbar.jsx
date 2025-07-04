import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-700 bg-black">
      <h1 className="text-4xl font-bold text-orange-500">MovieHub</h1>
      <div className="flex items-center gap-8 ml-auto">
        <a href="/home" className="text-lg hover:text-orange-400">Home</a>
        <a href="/about" className="text-lg hover:text-orange-400">About Us</a>
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-1 rounded-full text-black bg-white w-48 md:w-64"
        />
        <img
          src="/images/covers/profile.png"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </nav>
  );
}
