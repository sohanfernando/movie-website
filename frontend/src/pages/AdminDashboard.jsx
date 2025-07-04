// // src/pages/AdminDashboard.jsx
// import React, { useState } from "react";
// import axios from "axios";
// import AdminSideBar from "../components/AdminSideBar";

// const AdminDashboard = () => {

//   const [movieName, setMovieName] = useState("");
//   const [director, setDirector] = useState("");
//   const [movieDescription, setMovieDescription] = useState("");
//   const [movieGenre, setMovieGenre] = useState("");
//   const [year, setYear] = useState("");
//   const [duration, setDuration] = useState("");
//   const [trailerLink, setTrailerLink] = useState("");
//   const [movieCover, setMovieCover] = useState("");

//   const handleSave = async () => {
//     const newMovie = {
//       movieName,
//       director,
//       movieDescription,
//       movieGenre,
//       year,
//       duration,
//       trailerLink,
//       movieCover,
//     };

//     try {
//       await axios.post("http://localhost:8080/movies", newMovie);
//       alert("Movie saved successfully!");
//       // Clear form
//       setMovieName("");
//       setDirector("");
//       setMovieDescription("");
//       setMovieGenre("");
//       setYear("");
//       setDuration("");
//       setTrailerLink("");
//       setMovieCover("");
//     } catch (error) {
//       console.error("Error saving movie:", error);
//       alert("Failed to save movie.");
//     }
//   };


//   return (
//     <div className="flex h-screen bg-[#2B2627]">
//       <AdminSideBar />

//       <div className="flex-1 p-10 text-white relative">
//         {/* Top Header */}
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-xl font-semibold">Add Movie</h2>
//           <button className="bg-orange-600 text-white px-4 py-2 rounded-full cursor-pointer">
//             Logout
//           </button>
//         </div>

//         {/* Form Container */}
//         <div className="bg-gray-400 p-8 rounded-xl flex gap-10 w-fit ">
//           {/* Left Form */}
//           <form className="flex flex-col gap-4">
//             <div>
//               <label className="block text-sm">Movie Name</label>
//               <input
//                 type="text"
//                 value={movieName}
//                 onChange={(e) => setMovieName(e.target.value)}
//                 className="w-80 p-2 rounded-full bg-white text-black"
//               />
//             </div>
//             <div>
//               <label className="block text-sm">Director</label>
//               <input
//                 type="text"
//                 value={director}
//                 onChange={(e) => setDirector(e.target.value)}
//                 className="w-80 p-2 rounded-full bg-white text-black"
//               />
//             </div>
//             <div>
//               <label className="block text-sm">Description</label>
//               <input
//                 type="text"
//                 value={movieDescription}
//                 onChange={(e) => setMovieDescription(e.target.value)}
//                 className="w-80 p-2 rounded-full bg-white text-black"
//               />
//             </div>
//             <div>
//               <label className="block text-sm">Genre</label>
//               <input
//                 type="text"
//                 value={movieGenre}
//                 onChange={(e) => setMovieGenre(e.target.value)}
//                 className="w-80 p-2 rounded-full bg-white text-black"
//               />
//             </div>
//             <div>
//               <label className="block text-sm">Duration</label>
//               <input
//                 type="text"
//                 value={duration}
//                 onChange={(e) => setDuration(e.target.value)}
//                 className="w-80 p-2 rounded-full bg-white text-black"
//               />
//             </div>
//             <div>
//               <label className="block text-sm">Year</label>
//               <input
//                 type="text"
//                 value={year}
//                 onChange={(e) => setYear(e.target.value)}
//                 className="w-80 p-2 rounded-full bg-white text-black"
//               />
//             </div>
//             <div>
//               <label className="block text-sm">Trailer Link</label>
//               <input
//                 type="text"
//                 value={trailerLink}
//                 onChange={(e) => setTrailerLink(e.target.value)}
//                 className="w-80 p-2 rounded-full bg-white text-black"
//               />
//             </div>
//           </form>
          

//           {/* Right Upload + Save Button */}
//           <div className="flex flex-col justify-between items-center">
//             <div>
//               <p className="text-black font-medium text-center mb-2">Movie Cover (URL)</p>
//               <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center overflow-hidden">
//                 {movieCover ? (
//                   <img src={movieCover} alt="Movie Cover" className="w-full h-full object-cover" />
//                 ) : (
//                   <img src="/icons/image-placeholder.png" alt="Upload" className="w-10 h-10" />
//                 )}
//               </div>
//               <input
//                 type="text"
//                 value={movieCover}
//                 onChange={(e) => setMovieCover(e.target.value)}
//                 placeholder="Image URL"
//                 className="mt-2 w-32 p-1 rounded text-black"
//               />
//             </div>
//             <button
//               onClick={handleSave}
//               className="mt-10 bg-orange-600 text-white px-6 py-2 rounded-full cursor-pointer"
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


// import React, { useState } from "react";
// import axios from "axios";
// import AdminSideBar from "../components/AdminSideBar";

// const AdminDashboard = () => {
//   const [movieName, setMovieName] = useState("");
//   const [director, setDirector] = useState("");
//   const [movieDescription, setMovieDescription] = useState("");
//   const [movieGenre, setMovieGenre] = useState("");
//   const [year, setYear] = useState("");
//   const [duration, setDuration] = useState("");
//   const [trailerLink, setTrailerLink] = useState("");
//   const [movieCover, setMovieCover] = useState("");

//   const handleSave = async () => {
//     const newMovie = {
//       movieName,
//       director,
//       movieDescription,
//       movieGenre,
//       year,
//       duration,
//       trailerLink,
//       movieCover,
//     };

//     try {
//       console.log("Submitting:", newMovie);

//       await axios.post("http://localhost:8080/movies", newMovie);
//       alert("Movie saved successfully!");
//       // Clear form
//       setMovieName("");
//       setDirector("");
//       setMovieDescription("");
//       setMovieGenre("");
//       setYear("");
//       setDuration("");
//       setTrailerLink("");
//       setMovieCover("");
//     } catch (error) {
//       console.error("Error saving movie:", error);
//       alert("Failed to save movie.");
//     }
//   };

//   return (
//     <div className="flex h-screen bg-[#2B2627]">
//       <AdminSideBar />

//       <div className="flex-1 p-10 text-white relative">
//         {/* Top Header */}
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-xl font-semibold">Add Movie</h2>
//           <button className="bg-orange-600 text-white px-4 py-2 rounded-full cursor-pointer">
//             Logout
//           </button>
//         </div>

//         {/* Form Container */}
//         <div className="bg-gray-400 p-8 rounded-xl flex gap-10 w-fit">
//           {/* Left Form */}
//           <form className="flex flex-col gap-4">
//             <div>
//               <label className="block text-sm">Movie Name</label>
//               <input
//                 type="text"
//                 value={movieName}
//                 onChange={(e) => setMovieName(e.target.value)}
//                 className="w-80 p-2 rounded-full bg-white text-black"
//               />
//             </div>
//             <div>
//               <label className="block text-sm">Director</label>
//               <input
//                 type="text"
//                 value={director}
//                 onChange={(e) => setDirector(e.target.value)}
//                 className="w-80 p-2 rounded-full bg-white text-black"
//               />
//             </div>
//             <div>
//               <label className="block text-sm">Description</label>
//               <input
//                 type="text"
//                 value={movieDescription}
//                 onChange={(e) => setMovieDescription(e.target.value)}
//                 className="w-80 p-2 rounded-full bg-white text-black"
//               />
//             </div>
//             <div>
//               <label className="block text-sm">Genre</label>
//               <input
//                 type="text"
//                 value={movieGenre}
//                 onChange={(e) => setMovieGenre(e.target.value)}
//                 className="w-80 p-2 rounded-full bg-white text-black"
//               />
//             </div>
//             <div>
//               <label className="block text-sm">Duration</label>
//               <input
//                 type="text"
//                 value={duration}
//                 onChange={(e) => setDuration(e.target.value)}
//                 className="w-80 p-2 rounded-full bg-white text-black"
//               />
//             </div>
//             <div>
//               <label className="block text-sm">Year</label>
//               <input
//                 type="text"
//                 value={year}
//                 onChange={(e) => setYear(e.target.value)}
//                 className="w-80 p-2 rounded-full bg-white text-black"
//               />
//             </div>
//             <div>
//               <label className="block text-sm">Trailer Link</label>
//               <input
//                 type="text"
//                 value={trailerLink}
//                 onChange={(e) => setTrailerLink(e.target.value)}
//                 className="w-80 p-2 rounded-full bg-white text-black"
//               />
//             </div>
//           </form>

//           {/* Right Upload + Save Button */}
//           <div className="flex flex-col justify-between items-center">
//             <div>
//               <p className="text-black font-medium text-center mb-2">Movie Cover (URL)</p>
//               <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center overflow-hidden">
//                 {movieCover ? (
//                   <img src={movieCover} alt="Movie Cover" className="w-full h-full object-cover" />
//                 ) : (
//                   <img src="/icons/image-placeholder.png" alt="Upload" className="w-10 h-10" />
//                 )}
//               </div>
//               <input
//                 type="text"
//                 value={movieCover}
//                 onChange={(e) => setMovieCover(e.target.value)}
//                 placeholder="Image URL"
//                 className="mt-2 w-32 p-1 rounded text-black"
//               />
//             </div>
//             <button
//               onClick={handleSave}
//               className="mt-10 bg-orange-600 text-white px-6 py-2 rounded-full cursor-pointer"
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


import React, { useState, useRef } from "react";
import axios from "axios";
import AdminSideBar from "../components/AdminSideBar";

const AdminDashboard = () => {
  const [movieName, setMovieName] = useState("");
  const [director, setDirector] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieGenre, setMovieGenre] = useState("");
  const [year, setYear] = useState("");
  const [duration, setDuration] = useState("");
  const [trailerLink, setTrailerLink] = useState("");
  const [movieCover, setMovieCover] = useState(""); // final URL
  const [movieCoverFile, setMovieCoverFile] = useState(null); // raw file

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
      alert("Movie saved successfully!");

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
    } catch (error) {
      console.error("Error saving movie:", error);
      alert("Failed to save movie.");
    }
  };

  return (
    <div className="flex h-screen bg-[#2B2627]">
      <AdminSideBar />

      <div className="flex-1 p-10 text-white relative">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">Add Movie</h2>
          <button className="bg-orange-600 text-white px-4 py-2 rounded-full cursor-pointer">
            Logout
          </button>
        </div>

        {/* Form Container */}
        <div className="bg-gray-400 p-8 rounded-xl flex gap-10 w-fit">
          {/* Left Form */}
          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-sm">Movie Name</label>
              <input
                type="text"
                value={movieName}
                onChange={(e) => setMovieName(e.target.value)}
                className="w-80 p-2 rounded-full bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm">Director</label>
              <input
                type="text"
                value={director}
                onChange={(e) => setDirector(e.target.value)}
                className="w-80 p-2 rounded-full bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm">Description</label>
              <input
                type="text"
                value={movieDescription}
                onChange={(e) => setMovieDescription(e.target.value)}
                className="w-80 p-2 rounded-full bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm">Genre</label>
              <input
                type="text"
                value={movieGenre}
                onChange={(e) => setMovieGenre(e.target.value)}
                className="w-80 p-2 rounded-full bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm">Duration</label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-80 p-2 rounded-full bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm">Year</label>
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-80 p-2 rounded-full bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm">Trailer Link</label>
              <input
                type="text"
                value={trailerLink}
                onChange={(e) => setTrailerLink(e.target.value)}
                className="w-80 p-2 rounded-full bg-white text-black"
              />
            </div>
          </form>

          {/* Right Upload + Save Button */}
          <div className="flex flex-col justify-between items-center">
            <p className="text-black font-medium text-center mb-2">Movie Cover</p>
            <div
              onClick={handleCoverClick}
              className="w-32 h-32 bg-white rounded-lg flex items-center justify-center overflow-hidden cursor-pointer"
            >
              {movieCover ? (
                <img src={movieCover} alt="Movie Cover" className="w-full h-full object-cover" />
              ) : (
                <img src="/icons/image-placeholder.png" alt="Upload" className="w-10 h-10" />
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleCoverChange}
              accept="image/*"
              className="hidden"
            />
            <button
              onClick={handleSave}
              className="mt-10 bg-orange-600 text-white px-6 py-2 rounded-full cursor-pointer"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
