// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD9GSRdv1o26JRiMzXaEIVF2k3pj4e8WA",
  authDomain: "otpverify-project.firebaseapp.com",
  projectId: "otpverify-project",
  storageBucket: "otpverify-project.appspot.com",
  messagingSenderId: "140501534668",
  appId: "1:140501534668:web:d52385e039b8214ef9ff69",
  measurementId: "G-7ZVWEC2H2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);