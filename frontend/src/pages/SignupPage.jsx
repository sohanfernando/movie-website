import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import matrix from "/images/covers/the-matrix.png"

export default function SignupPage() {
  const navigate = useNavigate();

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
    if (!formData.agree) return alert('Please agree to terms & conditions');

    try {
      await axios.post('http://localhost:8080/users/signup', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      alert('User registered successfully!');
      navigate('/');
    } catch (error) {
        console.error('Signup error:', error)
        alert('Error during sign up. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-600 p-4">
      <div className="bg-white rounded-2xl shadow-md flex flex-col lg:flex-row w-full max-w-5xl overflow-hidden">
        {/* Left side - Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">Welcome to MovieHub</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border border-gray-300 p-3 rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border border-gray-300 p-3 rounded"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full border border-gray-300 p-3 rounded"
              required
            />
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="mr-2"
                />
                I agree with terms & conditions
              </label>
              <button className="text-orange-500 hover:underline">
                Forget Password?
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded font-bold hover:bg-orange-700 transition"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm mt-4">
            Already have an account?{' '}
            <a href="/" className="text-orange-600 font-semibold hover:underline">
              Sign in
            </a>
          </p>
        </div>

        {/* Right side - Image */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto">
          <img
            src={matrix}
            alt="Matrix Poster"
            className="object-cover w-full h-full rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl"
          />
        </div>
      </div>
    </div>
  );
}
