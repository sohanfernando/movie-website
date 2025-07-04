// src/components/AdminSideBar.jsx
import React from "react";

const AdminSideBar = () => {
  return (
    <div className="w-64 bg-zinc-900 h-screen p-6 text-white flex flex-col">
      <h1 className="text-4xl font-bold text-orange-600 mb-16">MovieHub</h1>
      <nav className="flex flex-col gap-10 text-lg font-semibold">
        <a href="/movie-list" className="hover:text-orange-400">Movie List</a>
        <a href="#" className="hover:text-orange-400">Settings</a>
      </nav>
    </div>
  );
};

export default AdminSideBar;
