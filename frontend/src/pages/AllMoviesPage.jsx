import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";

const AllMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Filter states
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Available genres from your database
  const genres = [
    "Action",
    "Action/Adventure", 
    "Action/Sci-fi",
    "Action/Thriller",
    "Comedy",
    "Crime/Thriller",
    "Sci-fi/Action",
    "Sci-fi/Adventure",
    "Thriller/Crime"
  ];

  // Generate years from 1970 to 2025
  const years = Array.from({ length: 56 }, (_, i) => 1970 + i).reverse();

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    filterMovies();
  }, [movies, selectedYear, selectedGenre, searchQuery]);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8080/movies");
      setMovies(response.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError("Failed to load movies");
    } finally {
      setLoading(false);
    }
  };

  const filterMovies = () => {
    let filtered = [...movies];

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(movie =>
        movie.movieName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.director.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.movieGenre.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by year
    if (selectedYear) {
      filtered = filtered.filter(movie => movie.year === selectedYear);
    }

    // Filter by genre
    if (selectedGenre) {
      filtered = filtered.filter(movie => movie.movieGenre === selectedGenre);
    }

    setFilteredMovies(filtered);
  };

  const clearFilters = () => {
    setSelectedYear("");
    setSelectedGenre("");
    setSearchQuery("");
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (selectedYear) count++;
    if (selectedGenre) count++;
    if (searchQuery) count++;
    return count;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Navbar />
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Navbar />
        <div className="flex justify-center items-center h-64">
          <div className="text-center text-red-400">
            <p className="text-xl mb-4">{error}</p>
            <button
              onClick={fetchMovies}
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-all duration-200"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navbar />
      
      {/* Header */}
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              All Movies
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 px-4">
              Discover and filter through our complete movie collection
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8 px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search movies, directors, or genres..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 pl-10 sm:pl-12 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
              />
              <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 mb-8 mx-4">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
              {/* Year Filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Release Year
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base [&>option]:bg-gray-800 [&>option]:text-white [&>option]:hover:bg-gray-700"
                >
                  <option value="">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year.toString()}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Genre Filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Genre
                </label>
                <select
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base [&>option]:bg-gray-800 [&>option]:text-white [&>option]:hover:bg-gray-700"
                >
                  <option value="">All Genres</option>
                  {genres.map(genre => (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              <div className="flex items-end">
                <button
                  onClick={clearFilters}
                  disabled={getActiveFiltersCount() === 0}
                  className="w-full lg:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-800 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-all duration-200 text-sm sm:text-base"
                >
                  Clear Filters
                </button>
              </div>
            </div>

            {/* Active Filters Display */}
            {getActiveFiltersCount() > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm text-gray-400">Active filters:</span>
                {selectedYear && (
                  <span className="px-2 sm:px-3 py-1 bg-orange-600 text-white text-xs sm:text-sm rounded-full">
                    Year: {selectedYear}
                  </span>
                )}
                {selectedGenre && (
                  <span className="px-2 sm:px-3 py-1 bg-orange-600 text-white text-xs sm:text-sm rounded-full">
                    Genre: {selectedGenre}
                  </span>
                )}
                {searchQuery && (
                  <span className="px-2 sm:px-3 py-1 bg-orange-600 text-white text-xs sm:text-sm rounded-full">
                    Search: "{searchQuery}"
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 px-4 gap-2">
            <p className="text-gray-400 text-sm sm:text-base">
              Showing {filteredMovies.length} of {movies.length} movies
            </p>
            {getActiveFiltersCount() > 0 && (
              <button
                onClick={clearFilters}
                className="text-orange-400 hover:text-orange-300 text-sm font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Movies Grid */}
      <div className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {filteredMovies.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-4xl sm:text-6xl mb-4">🎬</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">No Movies Found</h3>
              <p className="text-gray-400 mb-6 text-sm sm:text-base px-4">
                {getActiveFiltersCount() > 0 
                  ? "Try adjusting your filters or search terms"
                  : "No movies available at the moment"
                }
              </p>
              {getActiveFiltersCount() > 0 && (
                <button
                  onClick={clearFilters}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-medium transition-all duration-200 text-sm sm:text-base"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllMoviesPage; 