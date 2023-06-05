import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { getAuth } from "firebase/auth";
//creating a wrapper for our current route

export default function PrivateRoute({ children }) {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
