import React from "react";
import { Navigate } from "react-router-dom";
import { getAdmin } from "../utils/auth";

const ProtectedRoute = ({ children }) => {
  const admin = getAdmin();
  
  if (!admin) {
    // Redirect to admin login if not authenticated as admin
    return <Navigate to="/admin-login" replace />;
  }
  
  return children;
};

export default ProtectedRoute; 