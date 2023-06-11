import React, { useContext, useState, useEffect, createContext } from "react";
//import { auth } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  sendPasswordResetEmail,
} from "firebase/auth";

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}

// returns the values we want to provide for authentication
export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true); //verification to see if there is already user
  const auth = getAuth();
  const user = auth.currentUser;
  // cretes a user instance when signup occurs

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateEmail(email) {
    return user.updateEmail(auth, email);
  }

  function changePassword(password) {
    return updatePassword(user, password);
  }

  function emailConfirmation() {
    return auth.user.sendEmailVerification();
  }

  useEffect(() => {
    //allows us to set the user
    const unsubscribe = auth.onAuthStateChanged(() => {
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    user,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    changePassword,
  };

  return (
    // makes sure not to render application until the user is set in useEffect
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
