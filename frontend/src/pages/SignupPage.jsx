import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import matrix from "/images/covers/the-matrix.png"

export default function SignupPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!formData.agree) {
      setError('Please agree to terms & conditions');
      setIsLoading(false);
      return;
    }

    try {
      await axios.post('http://localhost:8080/users/signup', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      navigate('/');
    } catch (error) {
      console.error('Signup error:', error);
      const errorMessage = error.response?.data?.message || 'Error during sign up. Please try again.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
        {/* Left side - Form */}
        <div className="flex-1 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            {/* Header */}
            <div className="text-center lg:text-left mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                Join MovieHub
              </h1>
              <p className="text-lg text-gray-600">
                Create your account and start exploring
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start space-x-3">
                <input
                  id="agree"
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500 focus:ring-2 mt-1"
                />
                <label htmlFor="agree" className="text-sm text-gray-700 cursor-pointer">
                  I agree to the{' '}
                  <a href="#" className="text-orange-600 hover:text-orange-700 font-medium hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-orange-600 hover:text-orange-700 font-medium hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 px-6 rounded-xl font-semibold text-lg hover:from-orange-700 hover:to-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Creating Account...</span>
                  </div>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>



            {/* Sign In Link */}
            <p className="text-center mt-8 text-gray-600">
              Already have an account?{' '}
              <Link 
                to="/" 
                className="text-orange-600 font-semibold hover:text-orange-700 hover:underline transition-colors"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex-1 relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-orange-800/20 z-10"></div>
          <img
            src={matrix}
            alt="Matrix Poster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-20"></div>
          <div className="absolute bottom-8 left-8 right-8 z-30 text-white">
            <h3 className="text-2xl font-bold mb-2">Unlimited Movie Access</h3>
            <p className="text-orange-200">Join our community of movie lovers</p>
          </div>
        </div>

        {/* Mobile Image */}
        <div className="lg:hidden h-48 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-orange-800/20 z-10"></div>
          <img
            src={matrix}
            alt="Matrix Poster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-20"></div>
        </div>
      </div>
    </div>
  );
}
