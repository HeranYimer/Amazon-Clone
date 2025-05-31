// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_IghZqZ7-mJ_Xtx_ooFOslmpJhhMoeU0",
  authDomain: "clone-12d63.firebaseapp.com",
  projectId: "clone-12d63",
  storageBucket: "clone-12d63.firebasestorage.app",
  messagingSenderId: "450375160927",
  appId: "1:450375160927:web:230a8fbf77f68bc5c1f7ea",
  measurementId: "G-BCNLXV4DTW",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = app.firestore();
