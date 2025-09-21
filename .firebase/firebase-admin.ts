// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvFz68r9IMJ9Tbl1so-rSOQNj1GDnN8K0",
  authDomain: "novawebstudio-b7489.firebaseapp.com",
  databaseURL: "https://novawebstudio-b7489-default-rtdb.firebaseio.com",
  projectId: "novawebstudio-b7489",
  storageBucket: "novawebstudio-b7489.firebasestorage.app",
  messagingSenderId: "7618238818",
  appId: "1:7618238818:web:f9b5b2e6f2e844baa3f43b",
  measurementId: "G-RL2H1N1YSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);