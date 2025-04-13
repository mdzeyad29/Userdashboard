import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyDxWAthQtfE1yzLZ0LMFLUbMH9F1xCOQqE",
    authDomain: "userdashboard-a6a1c.firebaseapp.com",
    projectId: "userdashboard-a6a1c",
    storageBucket: "userdashboard-a6a1c.firebasestorage.app",
    messagingSenderId: "164922929982",
    appId: "1:164922929982:web:49d3f082bd1f5ae902326f",
    measurementId: "G-4GLTHE5G5V"
  };
  // intialize firebase
export const app =   initializeApp(firebaseConfig)
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);