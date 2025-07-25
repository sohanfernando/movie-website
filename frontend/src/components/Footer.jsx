import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4">
              MovieHub
            </h1>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
              Your ultimate destination for discovering amazing movies. From blockbusters to hidden gems, 
              we bring the world of cinema to your fingertips.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com" 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-200 group"
              >
                <i className="fab fa-facebook text-white group-hover:text-white text-sm sm:text-base"></i>
              </a>
              <a 
                href="https://www.instagram.com" 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-200 group"
              >
                <i className="fab fa-instagram text-white group-hover:text-white text-sm sm:text-base"></i>
              </a>
              <a 
                href="https://www.twitter.com" 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-200 group"
              >
                <i className="fab fa-twitter text-white group-hover:text-white text-sm sm:text-base"></i>
              </a>
              <a 
                href="https://www.youtube.com" 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-200 group"
              >
                <i className="fab fa-youtube text-white group-hover:text-white text-sm sm:text-base"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a 
                  href="/home" 
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center group text-sm sm:text-base"
                >
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/movies" 
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center group text-sm sm:text-base"
                >
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Movies
                </a>
              </li>
              <li>
                <a 
                  href="/genres" 
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center group text-sm sm:text-base"
                >
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Genres
                </a>
              </li>
              <li>
                <a 
                  href="/watchlist" 
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center group text-sm sm:text-base"
                >
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Watchlist
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center group text-sm sm:text-base"
                >
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Support</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a 
                  href="/help" 
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center group text-sm sm:text-base"
                >
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Help Center
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center group text-sm sm:text-base"
                >
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href="/faq" 
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center group text-sm sm:text-base"
                >
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="/feedback" 
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center group text-sm sm:text-base"
                >
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Subscribe to our newsletter for the latest movie updates and exclusive content.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
              />
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2025 MovieHub. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
