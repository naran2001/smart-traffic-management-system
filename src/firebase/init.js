
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1xvAL5dyK-wtwuQWVoaqk8JnJoVB36-k",
  authDomain: "smart-traffic-managemanet.firebaseapp.com",
  databaseURL: "https://smart-traffic-managemanet-default-rtdb.firebaseio.com",
  projectId: "smart-traffic-managemanet",
  storageBucket: "smart-traffic-managemanet.appspot.com",
  messagingSenderId: "726553259381",
  appId: "1:726553259381:web:7449543e08e1aca3b5b73c",
  measurementId: "G-Q3TQ2GY886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);