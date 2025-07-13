import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

export default function MovieSection() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8080/movies")
      .then(response => {
        console.log("All movies from backend:", response.data); // Debug log
        setMovies(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Failed to load movies:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8 sm:py-12">
        <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="text-center py-8 sm:py-12">
        <div className="text-4xl sm:text-6xl mb-4">🎬</div>
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">No Movies Found</h3>
        <p className="text-gray-400 text-sm sm:text-base">Check back later for new releases!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
