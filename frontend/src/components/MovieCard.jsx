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
            e.target.src = "/images/covers/cover.png";
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
              <div className="ml-2 flex-shrink-0">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-500/20 text-orange-300 border border-orange-500/30">
                  {movie.movieGenre}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Movie Info Below Image */}
      <div className="mt-3 px-1">
        <h3 className="font-bold text-white text-sm sm:text-base mb-1 truncate">
          {movie.movieName}
        </h3>
        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400">
          <span>{movie.year}</span>
          <span>{movie.duration}</span>
        </div>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-2">
          {movie.movieDescription}
        </p>
      </div>
    </div>
  );
}
