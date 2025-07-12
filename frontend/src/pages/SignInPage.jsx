import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthInput from "../components/AuthInput";
import martian from "/images/covers/the-martian.png";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    console.log("Login payload:", formData);

    try {
      const response = await axios.post(
        "http://localhost:8080/users/login",
        {
          email: formData.email.trim(),
          password: formData.password.trim(),
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Full response:", response);

      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/");
      } else {
        throw new Error("No data received from server");
      }
    } catch (error) {
      console.error("Detailed error:", error);
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        "Login failed. Please try again.";
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
                Welcome Back
              </h1>
              <p className="text-lg text-gray-600">
                Sign in to your MovieHub account
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
            <form onSubmit={handleLogin} className="space-y-6">
              <AuthInput
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                id="email"
              />
              <AuthInput
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                id="password"
              />

              {/* Remember Me & Forgot Password */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
                <label className="flex items-center cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500 focus:ring-2" 
                  />
                  <span className="ml-2 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                    Remember me
                  </span>
                </label>
                <button 
                  type="button" 
                  className="text-sm text-orange-600 hover:text-orange-700 font-medium hover:underline transition-colors"
                >
                  Forgot password?
                </button>
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
                    <span>Signing In...</span>
                  </div>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>



            {/* Sign Up Link */}
            <p className="text-center mt-8 text-gray-600">
              Don't have an account?{" "}
              <Link 
                to="/signup" 
                className="text-orange-600 font-semibold hover:text-orange-700 hover:underline transition-colors"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex-1 relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-orange-800/20 z-10"></div>
          <img
            src={martian}
            alt="The Martian movie poster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-20"></div>
          <div className="absolute bottom-8 left-8 right-8 z-30 text-white">
            <h3 className="text-2xl font-bold mb-2">Discover Amazing Movies</h3>
            <p className="text-orange-200">Join thousands of movie enthusiasts</p>
          </div>
        </div>

        {/* Mobile Image */}
        <div className="lg:hidden h-48 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-orange-800/20 z-10"></div>
          <img
            src={martian}
            alt="The Martian movie poster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-20"></div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
