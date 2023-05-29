import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { getAuth } from "firebase/auth";
//creating a wrapper for our current route

export default function PrivateRoute({ children }) {
  const currentUser = getAuth().currentUser;

  return currentUser ? children : <Navigate to="/login" />;
}
