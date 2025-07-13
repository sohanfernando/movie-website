import React from "react";

export default function MovieDetails({ movie }) {
  // Handle image URL - support both full URLs and filenames
  const getImageUrl = (movieCover) => {
    if (!movieCover) {
      return "/images/covers/cover.png"; // fallback image
    }
    
    // If it's already a full URL (starts with http), use it as is
    if (movieCover.startsWith('http')) {
      return movieCover;
    }
    
    // If it's just a filename, use the uploads path
    return `http://localhost:8080/uploads/${movieCover}`;
  };

  const imageUrl = getImageUrl(movie.movieCover);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-start">
          {/* Movie Poster */}
          <div className="lg:col-span-1">
            <div className="relative group">
              <img
                src={imageUrl}
                alt={movie.movieName}
                className="w-full max-w-sm mx-auto rounded-xl shadow-2xl"
                onError={(e) => {
                  e.target.src = "/images/covers/cover.png";
                }}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                <div className="bg-orange-600 text-white p-3 sm:p-4 rounded-full">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Movie Information */}
          <div className="lg:col-span-2 text-white">
            {/* Movie Meta */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <span className="bg-orange-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                {movie.movieGenre}
              </span>
              <span className="text-gray-300 text-sm sm:text-base">{movie.year}</span>
              <span className="text-gray-300 text-sm sm:text-base">•</span>
              <span className="text-gray-300 text-sm sm:text-base">{movie.duration}</span>
            </div>

            {/* Movie Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">{movie.movieName}</h1>

            {/* Director Info */}
            <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm sm:text-base">Director:</span>
                <span className="text-white font-semibold text-sm sm:text-base">{movie.director}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Synopsis</h3>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6">
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                  {movie.movieDescription}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {movie.trailerLink && (
                <a 
                  href={movie.trailerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Watch Trailer
                </a>
              )}
              <button className="border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Add to Watchlist
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Movie Details</h4>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm sm:text-base">Genre:</span>
                    <span className="text-white text-sm sm:text-base">{movie.movieGenre}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm sm:text-base">Release Year:</span>
                    <span className="text-white text-sm sm:text-base">{movie.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm sm:text-base">Duration:</span>
                    <span className="text-white text-sm sm:text-base">{movie.duration}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Share</h4>
                <div className="flex space-x-2 sm:space-x-3">
                  <button className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200">
                    <i className="fab fa-facebook-f text-white text-sm sm:text-base"></i>
                  </button>
                  <button className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-200">
                    <i className="fab fa-twitter text-white text-sm sm:text-base"></i>
                  </button>
                  <button className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-200">
                    <i className="fab fa-pinterest text-white text-sm sm:text-base"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
