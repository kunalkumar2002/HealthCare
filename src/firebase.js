// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPGBnEIAAfx5pnNALvNJr1Wpq61nC99-s",
  authDomain: "health-care-8975d.firebaseapp.com",
  projectId: "health-care-8975d",
  storageBucket: "health-care-8975d.appspot.com",
  messagingSenderId: "239946943691",
  appId: "1:239946943691:web:56c2fe48817c2e75665f4e",
  measurementId: "G-BJ618QBXLL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db };
