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
          withCredentials: true,
        }
      );

      console.log("Full response:", response);

      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/home");
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
    <div className="min-h-screen flex items-center justify-center bg-orange-600 p-4">
      <div className="bg-white p-6 md:p-12 rounded-xl flex w-full max-w-5xl shadow-lg">
        <div className="flex-1 pr-6">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">Welcome to MovieHub</h2>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded border border-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <AuthInput
              label="Email"
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

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <button type="button" className="text-orange-500 hover:underline">
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded-md font-semibold hover:bg-orange-700 transition disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <p className="text-sm mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-orange-600 font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        <div className="hidden md:block flex-1">
          <img
            src={martian}
            alt="The Martian movie poster"
            className="rounded-lg h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
