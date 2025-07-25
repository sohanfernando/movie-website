import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";

const TrendingPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8080/movies");
        // Get the last 5 movies (assuming the array is ordered by addition)
        setMovies(response.data.slice(-5).reverse());
      } catch {
        setError("Failed to load trending movies");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navbar />
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Trending Movies</h1>
          <p className="text-lg sm:text-xl text-gray-400">Check out the latest trending movies added to MovieHub!</p>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-400">{error}</div>
        ) : movies.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-4xl sm:text-6xl mb-4">🎬</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">No Trending Movies</h3>
            <p className="text-gray-400 mb-6 text-sm sm:text-base px-4">No movies have been added recently.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TrendingPage; 