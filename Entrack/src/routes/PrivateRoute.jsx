import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contextsFiles/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Optional: show loader while auth is resolving
  if (loading) {
    return null; // or spinner
  }

  // 🚫 Not logged in → send to login & remember path
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }} // 🔥 THIS is the key
      />
    );
  }

  // ✅ Logged in → allow access
  return children;
};

export default PrivateRoute;
