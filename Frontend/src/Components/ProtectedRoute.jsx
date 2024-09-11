import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Access auth state

  if (!isAuthenticated) {
    console.log("User not authenticated. Redirecting to /login...");
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  console.log("User authenticated. Access granted.");
  return children; // Render children if authenticated
};

export default ProtectedRoute;
