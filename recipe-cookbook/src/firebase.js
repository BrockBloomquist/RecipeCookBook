// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChk7I7gTrUXtdxBQPab-CtuIzN0kiEzBI",
  authDomain: "recipecookbook-6999f.firebaseapp.com",
  projectId: "recipecookbook-6999f",
  storageBucket: "recipecookbook-6999f.appspot.com",
  messagingSenderId: "139078562566",
  appId: "1:139078562566:web:c385c1c908ca4fc5fe6487",
  measurementId: "G-03C6B4YZC3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
