import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src="/images/covers/cover.png"
            alt="MovieHub Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                About MovieHub
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Your ultimate destination for discovering the world of cinema
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Bringing Cinema to Your Fingertips
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                At MovieHub, we believe that every great story deserves to be discovered. Our platform is designed to be your gateway to the vast world of cinema, from timeless classics to the latest blockbusters.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We're passionate about connecting movie enthusiasts with their next favorite film, providing detailed information, trailers, and insights that help you make informed choices about what to watch.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">
                  Join Our Community
                </div>
                <div className="text-gray-400">
                  <span className="text-2xl font-bold text-orange-500">10K+</span>
                  <div className="text-sm">Active Users</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-8 rounded-2xl border border-orange-500/30">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <h4 className="text-xl font-semibold text-white mb-2">Curated Selection</h4>
                  <p className="text-gray-300">
                    Handpicked movies from every genre and era
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose MovieHub?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover what makes us the preferred choice for movie enthusiasts worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Curated Content",
                description: "Expertly selected movies from every genre and era, ensuring quality entertainment for all tastes."
              },
              {
                icon: "🔍",
                title: "Advanced Search",
                description: "Find your perfect movie with our powerful search and filtering system."
              },
              {
                icon: "📱",
                title: "Mobile Friendly",
                description: "Enjoy MovieHub on any device with our responsive, mobile-optimized design."
              },
              {
                icon: "⚡",
                title: "Fast & Reliable",
                description: "Lightning-fast loading times and reliable service, so you never miss a moment."
              },
              {
                icon: "🎭",
                title: "Rich Information",
                description: "Detailed movie information, cast details, reviews, and trailers all in one place."
              },
              {
                icon: "🌟",
                title: "Community Driven",
                description: "Join our community of movie lovers and share your passion for cinema."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Movies Available" },
              { number: "50+", label: "Genres" },
              { number: "24/7", label: "Available" },
              { number: "10K+", label: "Happy Users" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              MovieHub was born from a simple idea: to create a platform that makes discovering great movies effortless and enjoyable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To become the world's most trusted platform for movie discovery, connecting audiences with stories that inspire, entertain, and move them.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">Our Values</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Quality over quantity
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    User experience first
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Innovation and creativity
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Community engagement
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-8 rounded-2xl border border-orange-500/30">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h4 className="text-xl font-semibold text-white mb-2">Growing Together</h4>
                  <p className="text-gray-300 mb-4">
                    From humble beginnings to serving thousands of movie lovers worldwide
                  </p>
                  <div className="flex justify-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-500">2020</div>
                      <div className="text-sm text-gray-400">Founded</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-500">2024</div>
                      <div className="text-sm text-gray-400">Today</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Movie Journey?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of movie enthusiasts and discover your next favorite film
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/home" 
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Explore Movies
            </a>
            <a 
              href="/signup" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200"
            >
              Join MovieHub
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
