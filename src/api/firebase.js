// src/api/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBw0w5ymQ52TWdzY1FVAsMd9Gh535IhYjo",
    authDomain: "ap-lab-b41f5.firebaseapp.com",
    projectId: "ap-lab-b41f5",
    storageBucket: "ap-lab-b41f5.firebasestorage.app",
    messagingSenderId: "845544618306",
    appId: "1:845544618306:web:f97913702072d66365b0db",
    measurementId: "G-2FGM5VGM4M"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase 서비스들을 export하여 다른 곳에서 사용할 수 있게 합니다.
export const auth = getAuth(app);
export const db = getFirestore(app);