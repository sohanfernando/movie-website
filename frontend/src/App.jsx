import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignInPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import AboutUsPage from "./pages/AboutUsPage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminSignUpPage from "./pages/AdminSignUpPage";
import AdminLoginPage from "./pages/AdminLoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/admin-signup" element={<AdminSignUpPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/admin-home" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
