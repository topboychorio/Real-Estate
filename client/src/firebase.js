// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-79acb.firebaseapp.com",
  projectId: "mern-estate-79acb",
  storageBucket: "mern-estate-79acb.appspot.com",
  messagingSenderId: "72551978383",
  appId: "1:72551978383:web:5bcdbb766c65985a95a7fa",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
