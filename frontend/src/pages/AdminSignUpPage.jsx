import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const AdminSignUpPage = () => {

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
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!formData.agree) {
            setError("Please agree to terms & conditions");
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://localhost:8080/admins/admin-signup', {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });
            console.log('Admin signup response:', response);
            alert('Admin account created successfully!');
            navigate('/admin-login');
        } catch (error) {
            console.error('Signup error:', error);
            const errorMessage = error.response?.data?.message || error.response?.data || error.message || 'Error during sign up. Please try again.';
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-600">
      <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">Admin Account Create</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded border border-red-300">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name='name'
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name='email'
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name='password'
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              placeholder="Password"
              required
            />
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              name='agree'
              checked={formData.agree}
              onChange={handleChange}
              className="form-checkbox h-4 w-4 text-orange-600 border-gray-300 rounded"
            />
            <label className="text-sm text-gray-700">
              I agree to the{' '}
              <a href="#" className="text-orange-600 hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-orange-600 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white font-semibold py-2 rounded-md hover:bg-orange-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-700">
          Already have an account?{' '}
          <a href="/admin-login" className="text-orange-600 font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default AdminSignUpPage;
