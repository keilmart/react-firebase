import firebase from "firebase/app";
import '@firebase/storage';
import '@firebase/firestore';
import "firebase/database";
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCGzxpRe_oZWapTQqV64xw_9GCI3W0lSSI",
    authDomain: "react-firebase-6f404.firebaseapp.com",
    projectId: "react-firebase-6f404",
    storageBucket: "react-firebase-6f404.appspot.com",
    messagingSenderId: "377911875969",
    appId: "1:377911875969:web:372bf08910a990bb51b080",
    measurementId: "G-Q2WN4XE51F"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  export default firebase


