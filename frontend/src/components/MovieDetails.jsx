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
    <section className="px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
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
                <div className="bg-orange-600 text-white p-4 rounded-full">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Movie Information */}
          <div className="lg:col-span-2 text-white">
            {/* Movie Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {movie.movieGenre}
              </span>
              <span className="text-gray-300">{movie.year}</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-300">{movie.duration}</span>
            </div>

            {/* Movie Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{movie.movieName}</h1>

            {/* Director Info */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Director:</span>
                <span className="text-white font-semibold">{movie.director}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Synopsis</h3>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {movie.movieDescription}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {movie.trailerLink && (
                <a 
                  href={movie.trailerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Watch Trailer
                </a>
              )}
              <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Add to Watchlist
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Movie Details</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Genre:</span>
                    <span className="text-white">{movie.movieGenre}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Release Year:</span>
                    <span className="text-white">{movie.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">{movie.duration}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Share</h4>
                <div className="flex space-x-3">
                  <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200">
                    <i className="fab fa-facebook-f text-white"></i>
                  </button>
                  <button className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-200">
                    <i className="fab fa-twitter text-white"></i>
                  </button>
                  <button className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-200">
                    <i className="fab fa-pinterest text-white"></i>
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
