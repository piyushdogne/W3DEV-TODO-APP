 
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAbRrqPOTamq0wrDBv_pWYbmGXt2T61xY",
  authDomain: "my-todo-assignment.firebaseapp.com",
  projectId: "my-todo-assignment",
  storageBucket: "my-todo-assignment.appspot.com",
  messagingSenderId: "307759619128",
  appId: "1:307759619128:web:2f73c0215d9aa9920bdacd",
  measurementId: "G-23HC12RE2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
