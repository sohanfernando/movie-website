import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MovieDetails from '../components/MovieDetails';
import axios from 'axios';

export default function MovieDetailsPage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                // Use the correct backend endpoint to get movie by ID
                const response = await axios.get(`http://localhost:8080/movies/id/${id}`);
                setMovie(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching movie:', error);
                setError('Failed to load movie');
                setIsLoading(false);
            }
        };

        fetchMovie();
    }, [id]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
                <Navbar />
                <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500"></div>
                </div>
            </div>
        );
    }

    if (error || !movie) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
                <Navbar />
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                        <div className="text-6xl mb-4">🎬</div>
                        <h2 className="text-3xl font-bold text-white mb-4">Movie Not Found</h2>
                        <p className="text-gray-400 mb-8">The movie you're looking for doesn't exist or has been removed.</p>
                        <a 
                            href="/home" 
                            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                        >
                            Back to Home
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <Navbar />
            
            {/* Hero Background */}
            <div className="relative">
                <img
                    src={movie.movieCover || "/images/covers/cover.png"}
                    alt="Movie Background"
                    className="w-full h-[40vh] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>

            {/* Movie Details */}
            <div className="relative z-10 -mt-20">
                <MovieDetails movie={movie} />
            </div>

            <Footer />
        </div>
    );
}