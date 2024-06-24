// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRMzeFbATtrQziwyxb2pgL9U1mr4zlpQ0",
  authDomain: "auto-agro-fdc5d.firebaseapp.com",
  projectId: "auto-agro-fdc5d",
  storageBucket: "auto-agro-fdc5d.appspot.com",
  messagingSenderId: "44529627014",
  appId: "1:44529627014:web:98f62ed1eed571cf74c607",
  measurementId: "G-5FJGBF4EJW",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
