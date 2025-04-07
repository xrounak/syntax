// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBjvEpcb5NbTiHvmkGroxCzoPXEW9vbHrw",
  authDomain: "syntax-error02.firebaseapp.com",
  projectId: "syntax-error02",
  storageBucket: "syntax-error02.firebasestorage.app",
  messagingSenderId: "547044635236",
  appId: "1:547044635236:web:56158e579a7ff83cc76571"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();
export const db = getFirestore(app);
export default app;