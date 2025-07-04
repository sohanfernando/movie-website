import React from "react";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div onClick={handleClick} className="text-center cursor-pointer">
      <img
        src={`http://localhost:8080/covers/${movie.movieCover}`}
        alt={movie.movieName}
        className="w-[400px] h-[580px] object-cover mx-auto rounded-md hover:scale-105 transition duration-300 shadow-lg"
      />
      <p className="mt-4 font-bold">{movie.movieName}</p>
    </div>
  );
}
