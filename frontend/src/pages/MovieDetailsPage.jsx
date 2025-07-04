import React from 'react'
import { useParams } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MovieDetails from '../components/MovieDetails';
import movies from '../data/movies.js';

export default function MovieDetailsPage() {
    const { id } = useParams();
    const movie = movies.find((m) => m.id === id);

    if (!movie) {
        return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center text-2xl">
            Movie not found.
            </div>
            <Footer />
        </div>
        );
    }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <img
        src="/images/covers/cover.png"
        alt="Cover"
        className="w-full h-130 object-cover"
      />
      <MovieDetails movie={movie} />
      <Footer />
    </div>
  );
}