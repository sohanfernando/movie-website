import React from "react";
import Navbar from "../components/Navbar.jsx";
import MovieSection from "../components/MovieSection.jsx";
import Footer from "../components/Footer.jsx";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <img src="/images/covers/cover.png" alt="Cover" className="w-full h-130 object-cover" />
      <MovieSection />
      <Footer />
    </div>
  );
}
