// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "Firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-la.firebaseapp.com",
  projectId: "react-la",
  storageBucket: "react-la.appspot.com",
  messagingSenderId: "989022463270",
  appId: "1:989022463270:web:5ceb33a95a9eade1820de7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
