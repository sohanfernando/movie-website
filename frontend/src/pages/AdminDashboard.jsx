import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminSideBar from "../components/AdminSideBar";

const AdminDashboard = () => {
  const navigate = useNavigate();
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

  const fileInputRef = useRef(null);

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

  const handleSave = async () => {
    if (!movieName || !director || !movieDescription || !movieGenre || !year || !duration) {
      alert("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    setSuccessMessage("");

    try {
      let imageUrl = "";

      // Step 1: Upload image file to backend
      if (movieCoverFile) {
        const formData = new FormData();
        formData.append("file", movieCoverFile);

        const uploadResponse = await axios.post("http://localhost:8080/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        imageUrl = uploadResponse.data.url;
        console.log("Upload response:", uploadResponse.data); // Debug log
        console.log("Image URL from backend:", imageUrl); // Debug log
      }

      // Step 2: Save movie with image URL
      const newMovie = {
        movieName,
        director,
        movieDescription,
        movieGenre,
        year,
        duration,
        trailerLink,
        movieCover: imageUrl,
      };

      await axios.post("http://localhost:8080/movies", newMovie);
      setSuccessMessage("Movie saved successfully!");

      // Clear form
      setMovieName("");
      setDirector("");
      setMovieDescription("");
      setMovieGenre("");
      setYear("");
      setDuration("");
      setTrailerLink("");
      setMovieCover("");
      setMovieCoverFile(null);

      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error saving movie:", error);
      alert("Failed to save movie. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const clearForm = () => {
    setMovieName("");
    setDirector("");
    setMovieDescription("");
    setMovieGenre("");
    setYear("");
    setDuration("");
    setTrailerLink("");
    setMovieCover("");
    setMovieCoverFile(null);
    setSuccessMessage("");
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <AdminSideBar />

      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white/5 backdrop-blur-sm border-b border-white/10 p-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Add New Movie</h1>
              <p className="text-gray-300">Create and manage movie entries for your platform</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={clearForm}
                className="px-4 py-2 text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 rounded-lg transition-all duration-200"
              >
                Clear Form
              </button>
              <button
                onClick={() => navigate("/admin/movie-list")}
                className="px-4 py-2 text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 rounded-lg transition-all duration-200"
              >
                View Movie List
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
                      rows="4"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Enter movie description..."
                    />
                  </div>
                </div>

                {/* Right Column - Image Upload & Save */}
                <div className="space-y-6">
                  {/* Image Upload */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Movie Cover</h3>
                    
                    <div
                      onClick={handleCoverClick}
                      className="w-full aspect-[3/4] bg-white/10 border-2 border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-white/15 transition-all duration-200 group"
                    >
                      {movieCover ? (
                        <div className="relative w-full h-full">
                          <img 
                            src={movieCover} 
                            alt="Movie Cover Preview" 
                            className="w-full h-full object-cover rounded-lg" 
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                            <span className="text-white font-medium">Click to change</span>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center">
                          <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p className="text-gray-400 text-sm">Click to upload cover image</p>
                          <p className="text-gray-500 text-xs mt-1">JPG, PNG, GIF up to 10MB</p>
                        </div>
                      )}
                    </div>
                    
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleCoverChange}
                      accept="image/*"
                      className="hidden"
                    />
                  </div>

                  {/* Save Button */}
                  <button
                    onClick={handleSave}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white py-4 px-6 rounded-xl font-semibold text-lg focus:outline-none focus:ring-4 focus:ring-orange-500/30 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Saving Movie...</span>
                      </div>
                    ) : (
                      "Save Movie"
                    )}
                  </button>

                  {/* Quick Stats */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Stats</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Total Movies</span>
                        <span className="text-white font-semibold">24</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">This Month</span>
                        <span className="text-white font-semibold">3</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Pending</span>
                        <span className="text-orange-400 font-semibold">1</span>
                      </div>
                    </div>
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

export default AdminDashboard;
