import React from "react";
import Navbar from "../components/Navbar.jsx";
import MovieSection from "../components/MovieSection.jsx";
import Footer from "../components/Footer.jsx";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        {/* Hero Background */}
        <div className="relative h-[70vh] overflow-hidden">
          <img 
            src="/images/covers/cover.png" 
            alt="MovieHub Hero" 
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Welcome to MovieHub
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Discover the latest blockbusters, timeless classics, and everything in between
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105">
                  Explore Movies
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200">
                  Watch Trailers
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">1000+</div>
              <div className="text-gray-400">Movies Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-gray-400">Genres</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
              <div className="text-gray-400">Streaming</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Movies Section */}
      <div className="py-16 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Movies</h2>
            <p className="text-gray-400 text-lg">Handpicked selections for you</p>
          </div>
          <MovieSection />
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Browse by Genre</h2>
            <p className="text-gray-400 text-lg">Find your perfect movie</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Action", icon: "🎬", color: "from-red-500 to-red-700" },
              { name: "Drama", icon: "🎭", color: "from-blue-500 to-blue-700" },
              { name: "Comedy", icon: "😂", color: "from-yellow-500 to-yellow-700" },
              { name: "Horror", icon: "👻", color: "from-purple-500 to-purple-700" },
              { name: "Sci-Fi", icon: "🚀", color: "from-green-500 to-green-700" },
              { name: "Romance", icon: "💕", color: "from-pink-500 to-pink-700" }
            ].map((genre, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${genre.color} p-6 rounded-xl text-center cursor-pointer transform hover:scale-105 transition-all duration-200 hover:shadow-lg`}
              >
                <div className="text-3xl mb-2">{genre.icon}</div>
                <div className="text-white font-semibold">{genre.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-orange-100 text-lg mb-8">
            Get notified about new releases and exclusive content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
