import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminSideBar from "../components/AdminSideBar";

const AdminMovieListPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8080/movies");
      setMovies(response.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError("Failed to fetch movies");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (movieId) => {
    navigate(`/admin/movie/edit/${movieId}`);
  };

  const handleDelete = async (movieId, movieName) => {
    if (window.confirm(`Are you sure you want to delete "${movieName}"?`)) {
      try {
        await axios.delete(`http://localhost:8080/movies/${movieId}`);
        setSuccessMessage(`Movie "${movieName}" deleted successfully!`);
        fetchMovies(); // Refresh the list
      } catch (error) {
        console.error("Error deleting movie:", error);
        alert("Failed to delete movie. Please try again.");
      }
    }
  };

  const [successMessage, setSuccessMessage] = useState("");

  // Clear success message after 3 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <AdminSideBar />

      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white/5 backdrop-blur-sm border-b border-white/10 p-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Movie List</h1>
              <p className="text-gray-300">Manage all movies in your platform</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate("/admin-home")}
                className="px-4 py-2 text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 rounded-lg transition-all duration-200"
              >
                Add New Movie
              </button>
              <button 
                onClick={() => {
                  localStorage.removeItem("user");
                  localStorage.removeItem("admin");
                  navigate("/");
                }}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* Success Message */}
          {successMessage && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-green-400 font-medium">{successMessage}</p>
            </div>
          )}

          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
                </div>
              ) : error ? (
                <div className="text-center text-red-400 p-8">
                  <p>{error}</p>
                  <button
                    onClick={fetchMovies}
                    className="mt-4 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-all duration-200"
                  >
                    Try Again
                  </button>
                </div>
              ) : movies.length === 0 ? (
                <div className="text-center text-gray-400 p-8">
                  <p className="text-xl mb-4">No movies found</p>
                  <button
                    onClick={() => navigate("/admin-home")}
                    className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-all duration-200"
                  >
                    Add Your First Movie
                  </button>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="border-b border-white/20">
                      <tr>
                        <th className="px-6 py-4 text-sm font-medium text-gray-300 uppercase tracking-wider">
                          Movie Name
                        </th>
                        <th className="px-6 py-4 text-sm font-medium text-gray-300 uppercase tracking-wider">
                          Director
                        </th>
                        <th className="px-6 py-4 text-sm font-medium text-gray-300 uppercase tracking-wider">
                          Year
                        </th>
                        <th className="px-6 py-4 text-sm font-medium text-gray-300 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {movies.map((movie) => (
                        <tr key={movie.id} className="hover:bg-white/5 transition-colors duration-200">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              {movie.movieCover && (
                                <img
                                  src={movie.movieCover}
                                  alt={movie.movieName}
                                  className="w-12 h-16 object-cover rounded-lg mr-4"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                              )}
                              <div>
                                <div className="text-sm font-medium text-white">
                                  {movie.movieName}
                                </div>
                                <div className="text-sm text-gray-400">
                                  {movie.movieGenre}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {movie.director}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {movie.year}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => handleEdit(movie.id)}
                                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(movie.id, movie.movieName)}
                                className="text-red-400 hover:text-red-300 transition-colors duration-200"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMovieListPage; 