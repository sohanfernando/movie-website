// import MovieCard from "./MovieCard.jsx";
// // import movies from "../data/movies.js";
// import { useEffect } from "react";
// import axios from "axios"

// export default function MovieSection() {

//   const [movies, setMovies] = useEffect([]);

//   useEffect(() => {
//     axios.get("http://localhost:8080/movies")
//     .then((response) => setMovies(response.data))
//     .catch((error) => console.error("Error fetching movies:", error))
//   }, []);

//   return (
//     <section className="px-8 py-12">
//       <h2 className="text-2xl font-semibold mb-8">Movies</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
//         {movies.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

export default function MovieSection() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/movies")
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error("Failed to load movies:", error);
      });
  }, []);

  return (
    <section className="px-8 py-12">
      <h2 className="text-2xl font-semibold mb-8">Movies</h2>
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
}
