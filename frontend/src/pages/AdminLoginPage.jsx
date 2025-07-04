import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthInput from "../components/AuthInput";
import axios from "axios";

const AdminLoginPage = () => {
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
        "http://localhost:8080/admins/admin-login",
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
        localStorage.setItem("admin", JSON.stringify(response.data));
        navigate("/admin-home");
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
    <div className="min-h-screen flex items-center justify-center bg-orange-600">
      <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">Admin Login</h2>

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
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-orange-600 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">Remember Me</span>
            </label>
            <button type="button" className="text-orange-500 hover:underline">
                Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white font-semibold py-2 rounded-md hover:bg-orange-700 transition duration-200"
            disabled={isLoading}
          >
            {isLoading ? "Login In..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-700">
          Don’t have an account?{' '}
          <a href="/admin-signup" className="text-orange-600 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default AdminLoginPage;
