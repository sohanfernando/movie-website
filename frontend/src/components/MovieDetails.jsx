import React from "react";

export default function MovieDetails({ movie }) {
  return (
    <section className="px-8 py-12 flex flex-col md:flex-row gap-12 items-start">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-[507px] h-[750px] object-cover rounded-md shadow-md"
      />
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold mb-1">{movie.title} 
          <a href={movie.trailerUrl} target="_blank" rel="noopener noreferrer" className="text-orange-500 text-sm italic ml-4 hover:underline">
            Watch Trailer
          </a>
        </h2>
        <p className="text-lg text-gray-300 mb-2">{movie.year}</p>
        <p className="text-lg text-gray-300 mb-4">{movie.genre}</p>

        <p className="mb-2">
          <strong>Director :</strong> {movie.director}
        </p>
        <p className="mb-4">
          <strong>Duration :</strong> {movie.duration}
        </p>

        <h3 className="text-xl font-semibold mb-1">Description</h3>
        <p className="text-gray-300 leading-relaxed">{movie.description}</p>
      </div>
    </section>
  );
}
