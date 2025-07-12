// src/components/AdminSideBar.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AdminSideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="w-64 bg-zinc-900 h-screen p-6 text-white flex flex-col">
      <h1 className="text-4xl font-bold text-orange-600 mb-16">MovieHub</h1>
      <nav className="flex flex-col gap-10 text-lg font-semibold">
        <button
          onClick={() => navigate("/admin-home")}
          className={`text-left hover:text-orange-400 transition-colors duration-200 ${
            isActive("/admin-home") ? "text-orange-400" : ""
          }`}
        >
          Add New Movie
        </button>
        <button
          onClick={() => navigate("/admin/movie-list")}
          className={`text-left hover:text-orange-400 transition-colors duration-200 ${
            isActive("/admin/movie-list") ? "text-orange-400" : ""
          }`}
        >
          Movie List
        </button>
        <button className="text-left hover:text-orange-400 transition-colors duration-200">
          Settings
        </button>
      </nav>
    </div>
  );
};

export default AdminSideBar;
