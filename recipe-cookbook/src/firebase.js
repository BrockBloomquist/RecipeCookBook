// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: "AIzaSyChk7I7gTrUXtdxBQPab-CtuIzN0kiEzBI",
  authDomain: "recipecookbook-6999f.firebaseapp.com",
  projectId: "recipecookbook-6999f",
  storageBucket: "recipecookbook-6999f.appspot.com",
  messagingSenderId: "139078562566",
  appId: "1:139078562566:web:c385c1c908ca4fc5fe6487",
  measurementId: "G-03C6B4YZC3",
});

// Initialize Firebase
export const auth = app.auth();
export default app;
