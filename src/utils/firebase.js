// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {


  apiKey: process.env.REACT_APP_API_KEY ,
  authDomain: "netflixgpt-7c2b1.firebaseapp.com",
  projectId: "netflixgpt-7c2b1",
  storageBucket: "netflixgpt-7c2b1.appspot.com",
  messagingSenderId: "134333032954",
  appId: "1:134333032954:web:56cda3bacfda781aad9c43",
  measurementId: "G-T89T41DKDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);