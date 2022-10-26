// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqdrNh_bMNhUgr1vIwe23HSFvcvKcN2Dw",
  authDomain: "erudite-tutoring.firebaseapp.com",
  databaseURL: "https://erudite-tutoring-default-rtdb.firebaseio.com",
  projectId: "erudite-tutoring",
  storageBucket: "erudite-tutoring.appspot.com",
  messagingSenderId: "563007315629",
  appId: "1:563007315629:web:6aedfc02b20ac0c48cb024",
  measurementId: "G-GD8TWQCHLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);