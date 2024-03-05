// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyBpm8Mt38vZoJuLlTwJZ1E5HyQ3UCUXQ",
  authDomain: "usc-hack-2024.firebaseapp.com",
  databaseURL: "https://usc-hack-2024-default-rtdb.firebaseio.com",
  projectId: "usc-hack-2024",
  storageBucket: "usc-hack-2024.appspot.com",
  messagingSenderId: "727825775169",
  appId: "1:727825775169:web:1fb82321cb75983a4324c0",
  measurementId: "G-XH4995YCG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app); 