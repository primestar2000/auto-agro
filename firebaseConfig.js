// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRMzeFbATtrQziwyxb2pgL9U1mr4zlpQ0",
  authDomain: "auto-agro-fdc5d.firebaseapp.com",
  projectId: "auto-agro-fdc5d",
  storageBucket: "auto-agro-fdc5d.appspot.com",
  messagingSenderId: "44529627014",
  appId: "1:44529627014:web:98f62ed1eed571cf74c607",
  measurementId: "G-5FJGBF4EJW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
