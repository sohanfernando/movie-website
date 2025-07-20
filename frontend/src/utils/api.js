import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const user = localStorage.getItem('user');
    const admin = localStorage.getItem('admin');
    
    if (user || admin) {
      // In a real app, you'd have JWT tokens here
      // config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;
      
      switch (status) {
        case 400:
          error.message = data.message || 'Bad request. Please check your input.';
          break;
        case 401:
          error.message = data.message || 'Unauthorized. Please login again.';
          // Optionally redirect to login
          break;
        case 403:
          error.message = data.message || 'Access denied.';
          break;
        case 404:
          error.message = data.message || 'Resource not found.';
          break;
        case 409:
          error.message = data.message || 'Resource already exists.';
          break;
        case 422:
          error.message = data.message || 'Validation failed.';
          error.validationErrors = data.validationErrors;
          break;
        case 500:
          error.message = 'Server error. Please try again later.';
          break;
        default:
          error.message = data.message || 'An unexpected error occurred.';
      }
    } else if (error.request) {
      // Network error
      error.message = 'Network error. Please check your connection.';
    } else {
      // Something else happened
      error.message = 'An unexpected error occurred.';
    }
    
    return Promise.reject(error);
  }
);

// API methods
export const apiService = {
  // User endpoints
  registerUser: (userData) => api.post('/users/signup', userData),
  loginUser: (credentials) => api.post('/users/login', credentials),
  getUsers: () => api.get('/users'),
  getUserById: (id) => api.get(`/users/${id}`),
  deleteUser: (id) => api.delete(`/users/${id}`),

  // Admin endpoints
  registerAdmin: (adminData) => api.post('/admins/admin-signup', adminData),
  loginAdmin: (credentials) => api.post('/admins/admin-login', credentials),
  getAdmins: () => api.get('/admins'),
  getAdminById: (id) => api.get(`/admins/${id}`),
  deleteAdmin: (id) => api.delete(`/admins/${id}`),

  // Movie endpoints
  createMovie: (movieData) => api.post('/movies', movieData),
  getMovies: () => api.get('/movies'),
  getMovieByName: (name) => api.get(`/movies/${name}`),
  getMovieById: (id) => api.get(`/movies/id/${id}`),
  updateMovie: (id, movieData) => api.put(`/movies/${id}`, movieData),
  deleteMovie: (id) => api.delete(`/movies/${id}`),

  // File upload
  uploadFile: (formData) => {
    return api.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default api;