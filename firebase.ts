// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhLY_0-wpJ83-a4gBvE5KVncEE0Yuxbig",
  authDomain: "hft-hack.firebaseapp.com",
  projectId: "hft-hack",
  storageBucket: "hft-hack.appspot.com",
  messagingSenderId: "349503488639",
  appId: "1:349503488639:web:3a8e047be202b7f8c0754a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app);

export  { db, storage}