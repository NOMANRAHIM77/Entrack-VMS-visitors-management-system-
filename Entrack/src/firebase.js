// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9FHMcmylTaQ2IBNF3vuu424FskoQCt_U",
  authDomain: "visitor-management-syste-ff77c.firebaseapp.com",
  projectId: "visitor-management-syste-ff77c",
  storageBucket: "visitor-management-syste-ff77c.firebasestorage.app",
  messagingSenderId: "264139186913",
  appId: "1:264139186913:web:7ee2b79c6de9b593a7cda0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
