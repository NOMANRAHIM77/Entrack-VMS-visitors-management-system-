import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contextsFiles/AuthContext"; // adjust path

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/signup" replace />;
  }

  return children;
};

export default PrivateRoute;
