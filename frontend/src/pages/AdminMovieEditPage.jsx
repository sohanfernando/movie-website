import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminSideBar from "../components/AdminSideBar";

const AdminMovieEditPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [movieName, setMovieName] = useState("");
  const [director, setDirector] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieGenre, setMovieGenre] = useState("");
  const [year, setYear] = useState("");
  const [duration, setDuration] = useState("");
  const [trailerLink, setTrailerLink] = useState("");
  const [movieCover, setMovieCover] = useState("");
  const [movieCoverFile, setMovieCoverFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMovie();
  }, [movieId]);

  const fetchMovie = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8080/movies/id/${movieId}`);
      const movie = response.data;
      
      setMovieName(movie.movieName);
      setDirector(movie.director);
      setMovieDescription(movie.movieDescription);
      setMovieGenre(movie.movieGenre);
      setYear(movie.year);
      setDuration(movie.duration);
      setTrailerLink(movie.trailerLink || "");
      setMovieCover(movie.movieCover || "");
    } catch (error) {
      console.error("Error fetching movie:", error);
      setError("Failed to fetch movie details");
    } finally {
      setLoading(false);
    }
  };

  const handleCoverClick = () => {
    fileInputRef.current.click();
  };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMovieCoverFile(file);
      const previewURL = URL.createObjectURL(file);
      setMovieCover(previewURL);
    }
  };

  const handleUpdate = async () => {
    if (!movieName || !director || !movieDescription || !movieGenre || !year || !duration) {
      alert("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    setSuccessMessage("");

    try {
      let imageUrl = movieCover;

      // Step 1: Upload new image file to backend if a new file is selected
      if (movieCoverFile) {
        const formData = new FormData();
        formData.append("file", movieCoverFile);

        const uploadResponse = await axios.post("http://localhost:8080/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        imageUrl = uploadResponse.data.url;
      }

      // Step 2: Update movie with image URL
      const updatedMovie = {
        movieName,
        director,
        movieDescription,
        movieGenre,
        year,
        duration,
        trailerLink,
        movieCover: imageUrl,
      };

      await axios.put(`http://localhost:8080/movies/${movieId}`, updatedMovie);
      setSuccessMessage("Movie updated successfully!");

      // Clear success message after 3 seconds and redirect
      setTimeout(() => {
        setSuccessMessage("");
        navigate("/admin/movie-list");
      }, 2000);
    } catch (error) {
      console.error("Error updating movie:", error);
      alert("Failed to update movie. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/admin/movie-list");
  };

  if (loading) {
    return (
      <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <AdminSideBar />
        <div className="flex-1 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <AdminSideBar />
        <div className="flex-1 flex justify-center items-center">
          <div className="text-center text-red-400">
            <p className="text-xl mb-4">{error}</p>
            <button
              onClick={() => navigate("/admin/movie-list")}
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-all duration-200"
            >
              Back to Movie List
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <AdminSideBar />

      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white/5 backdrop-blur-sm border-b border-white/10 p-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Edit Movie</h1>
              <p className="text-gray-300">Update movie information and details</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleCancel}
                className="px-4 py-2 text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 rounded-lg transition-all duration-200"
              >
                Cancel
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

          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Form Fields */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Movie Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Movie Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={movieName}
                        onChange={(e) => setMovieName(e.target.value)}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter movie title"
                      />
                    </div>

                    {/* Director */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Director <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={director}
                        onChange={(e) => setDirector(e.target.value)}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter director name"
                      />
                    </div>

                    {/* Genre */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Genre <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={movieGenre}
                        onChange={(e) => setMovieGenre(e.target.value)}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="e.g., Action, Drama, Comedy"
                      />
                    </div>

                    {/* Year */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Release Year <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="number"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="e.g., 2024"
                        min="1900"
                        max="2030"
                      />
                    </div>

                    {/* Duration */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Duration <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="e.g., 2h 15m"
                      />
                    </div>

                    {/* Trailer Link */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Trailer Link
                      </label>
                      <input
                        type="url"
                        value={trailerLink}
                        onChange={(e) => setTrailerLink(e.target.value)}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="YouTube or other video URL"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Description <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      value={movieDescription}
                      onChange={(e) => setMovieDescription(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Enter movie description..."
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-6">
                    <button
                      onClick={handleUpdate}
                      disabled={isLoading}
                      className="flex-1 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-800 text-white py-3 px-6 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Updating...</span>
                        </>
                      ) : (
                        <span>Update Movie</span>
                      )}
                    </button>
                  </div>
                </div>

                {/* Right Column - Cover Image */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">
                      Movie Cover
                    </label>
                    <div
                      onClick={handleCoverClick}
                      className="relative w-full h-80 bg-white/10 border-2 border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-white/30 transition-all duration-200 group"
                    >
                      {movieCover ? (
                        <>
                          <img
                            src={movieCover}
                            alt="Movie cover preview"
                            className="w-full h-full object-cover rounded-xl"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                              <svg className="w-8 h-8 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <p className="text-white text-sm">Click to change image</p>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="text-center">
                          <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p className="text-gray-400 text-sm">Click to upload cover image</p>
                          <p className="text-gray-500 text-xs mt-1">PNG, JPG, WEBP up to 10MB</p>
                        </div>
                      )}
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleCoverChange}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMovieEditPage; 