import React from "react";
import { Navigate } from "react-router-dom";
import Home from "./components/home";

const ProtectedRoute = ({ element: Component }) => {
  const userToken = localStorage.getItem("token");
  
  if (!userToken || userToken === "undefined") {
    return <Navigate to="/login" />;
  }
  
  return <Home />;
};

export default ProtectedRoute;
