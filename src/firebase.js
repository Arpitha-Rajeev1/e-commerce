import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBQD8VkNV-lgwy1lwjOWEeDMV3MjimhMOw",
    authDomain: "e-commerce-f0ec3.firebaseapp.com",
    projectId: "e-commerce-f0ec3",
    storageBucket: "e-commerce-f0ec3.appspot.com",
    messagingSenderId: "306693344595",
    appId: "1:306693344595:web:471d85518c1bd33b8ce5a6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };