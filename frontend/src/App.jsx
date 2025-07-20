import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SignIn from "./pages/SignInPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import AboutUsPage from "./pages/AboutUsPage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminSignUpPage from "./pages/AdminSignUpPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminMovieListPage from "./pages/AdminMovieListPage";
import AdminMovieEditPage from "./pages/AdminMovieEditPage";
import AllMoviesPage from "./pages/AllMoviesPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastProvider } from "./contexts/ToastContext";
import { logout } from "./utils/auth";

// Logout component
const Logout = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    logout(navigate);
  }, [navigate]);
  
  return null;
};

function App() {
  return (
    <ToastProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/movies" element={<AllMoviesPage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/admin-signup" element={<AdminSignUpPage />} />
          <Route path="/admin-login" element={<AdminLoginPage />} />
          <Route path="/admin-home" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/movie-list" element={
            <ProtectedRoute>
              <AdminMovieListPage />
            </ProtectedRoute>
          } />
          <Route path="/admin/movie-edit/:id" element={
            <ProtectedRoute>
              <AdminMovieEditPage />
            </ProtectedRoute>
          } />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </ToastProvider>
  );
}

export default App;
