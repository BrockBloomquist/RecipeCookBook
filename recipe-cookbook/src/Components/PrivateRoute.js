import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
//creating a wrapper for our current route

export default function PrivateRoute({ children }) {
  const currentUser = auth.currentUser;

  return !currentUser ? children : <Navigate to="/login" />;
}
