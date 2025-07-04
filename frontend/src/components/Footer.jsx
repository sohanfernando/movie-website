import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-700 mt-16 px-8 py-10 flex flex-col md:flex-row items-center justify-between">
      <h1 className="text-3xl font-bold text-orange-500">MovieHub</h1>
      <div className="flex gap-8 items-center mt-4 md:mt-0">
        <a href="/home" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About Us</a>
        <div className="flex gap-4 justify-center mt-2 md:mt-0">
          <a href="https://www.facebook.com"><i className="fab fa-facebook text-xl"></i></a>
          <a href="https://www.instagram.com"><i className="fab fa-instagram text-xl"></i></a>
        </div>
      </div>
    </footer>
  );
}
