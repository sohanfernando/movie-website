import React from "react";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  // Simple image URL handling - backend provides full URL
  const getImageUrl = (movieCover) => {
    if (!movieCover) {
      return "/images/covers/cover.png"; // fallback image
    }
    
    // Backend provides full URL like http://localhost:8080/uploads/filename
    return movieCover;
  };

  const imageUrl = getImageUrl(movie.movieCover);

  return (
    <div 
      onClick={handleClick} 
      className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
    >
      <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl">
        {/* Movie Poster */}
        <img
          src={imageUrl}
          alt={movie.movieName}
          className="w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] object-cover group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            console.log("Image failed to load:", imageUrl);
            e.target.src = "/images/covers/cover.png";
          }}
          onLoad={() => {
            console.log("Image loaded successfully:", imageUrl);
          }}
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
            <div className="flex items-center justify-between text-white">
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm sm:text-lg mb-1 truncate">{movie.movieName}</h3>
                <p className="text-xs sm:text-sm text-gray-300">{movie.year}</p>
              </div>
              <div className="bg-orange-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ml-2 flex-shrink-0">
                {movie.movieGenre}
              </div>
            </div>
          </div>
        </div>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-orange-600 text-white p-3 sm:p-4 rounded-full shadow-lg">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Movie Info */}
      <div className="mt-3 sm:mt-4 text-center">
        <h3 className="font-bold text-white text-sm sm:text-lg mb-1 group-hover:text-orange-400 transition-colors truncate">
          {movie.movieName}
        </h3>
        <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
          <span>{movie.year}</span>
          <span>•</span>
          <span className="truncate">{movie.movieGenre}</span>
        </div>
      </div>
    </div>
  );
}
