import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout, getUser, getAdmin } from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    // Check for user/admin data on component mount and when localStorage changes
    const checkAuth = () => {
      setUser(getUser());
      setAdmin(getAdmin());
    };
    
    checkAuth();
    
    // Listen for storage changes
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const handleLogout = () => {
    logout(navigate);
  };

  const isAuthenticated = user || admin;
  const currentUser = user || admin;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center mr-10">
            <h1 onClick={() => navigate("/")} className="text-3xl cursor-pointer font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent hover:from-orange-500 hover:to-orange-700 transition-all duration-300">
              MovieHub
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigate("/")}
              className="text-white hover:text-orange-400 font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => navigate("/about")}
              className="text-white hover:text-orange-400 font-medium transition-colors duration-200 relative group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => navigate("/movies")}
              className="text-white hover:text-orange-400 font-medium transition-colors duration-200 relative group"
            >
              Movies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => navigate("/genres")}
              className="text-white hover:text-orange-400 font-medium transition-colors duration-200 relative group"
            >
              Genres
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8 hidden lg:block">
            <div className={`relative transition-all duration-300 ${
              isSearchFocused ? 'scale-105' : 'scale-100'
            }`}>
              <input
                type="text"
                placeholder="Search movies, genres, actors..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 text-white hover:text-orange-400 transition-colors duration-200">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.19 4.19A4 4 0 014 6v6a4 4 0 01-4 4h2a2 2 0 002 2h8a2 2 0 002-2h2a4 4 0 004-4V6a4 4 0 00-4-4H8a4 4 0 00-3.81 2.19z" />
              </svg>
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-orange-500 rounded-full"></span>
            </button>

            {/* Login/Profile */}
            {isAuthenticated ? (
              <div className="relative group">
                <div className="flex items-center space-x-2 cursor-pointer">
                  <img
                    src="/images/covers/profile.png"
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white/20 hover:border-orange-400 transition-all duration-200"
                  />
                  <span className="text-white font-medium hidden sm:block">
                    {currentUser?.name || currentUser?.adminName || 'User'}
                  </span>
                </div>
                
                {/* Profile Dropdown */}
                <div className="absolute right-0 mt-2 w-48 bg-black/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <div className="px-4 py-2 text-white border-b border-white/10">
                      <div className="font-medium">{currentUser?.name || currentUser?.adminName}</div>
                      <div className="text-sm text-gray-400">{currentUser?.email || currentUser?.adminEmail}</div>
                    </div>
                    <a href="/profile" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors duration-200">
                      Profile
                    </a>
                    <a href="/settings" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors duration-200">
                      Settings
                    </a>
                    <a href="/watchlist" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors duration-200">
                      Watchlist
                    </a>
                    <hr className="border-white/10 my-1" />
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-red-400 hover:bg-red-500/10 transition-colors duration-200"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => navigate("/signin")}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/admin-login")}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200"
                >
                  Admin
                </button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-white hover:text-orange-400 transition-colors duration-200">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search movies..."
              className="w-full px-4 py-2 pl-10 pr-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
