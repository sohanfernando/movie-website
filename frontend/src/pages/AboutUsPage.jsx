import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Cover Image */}
      <img
        src="/images/covers/cover.png"
        alt="Cover"
        className="w-full h-130 object-cover"
      />

      {/* About Us Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-orange-500">About MovieHub</h2>
        <p className="text-lg leading-relaxed text-gray-300 mb-6">
          Welcome to <span className="text-orange-400 font-semibold">MovieHub</span> — your ultimate destination for exploring the world of cinema.
          We bring you detailed movie information, trailers, and updates on the latest blockbusters and timeless classics.
        </p>

        <p className="text-lg leading-relaxed text-gray-300 mb-6">
          Whether you're a casual viewer or a film enthusiast, MovieHub is designed to help you discover, learn, and enjoy.
          Our platform offers an immersive movie browsing experience with rich visuals and clear details about each film.
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          Thank you for choosing MovieHub. We are constantly evolving and aim to bring even more features to help you track your favorite movies,
          explore trailers, and much more. Stay tuned and enjoy the magic of movies with us.
        </p>
      </section>

      <Footer />
    </div>
  );
}
