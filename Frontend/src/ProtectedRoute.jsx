import { Navigate } from "react-router-dom";

// Mock authentication function (replace with actual logic)
const isAuthenticated = () => {
  // Check if the user is authenticated (e.g., using a token or session)
  return localStorage.getItem("token") !== null;
};

// ProtectedRoute component
function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If the user is authenticated, render the children components
  return children;
}

export default ProtectedRoute;
