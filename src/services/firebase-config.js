// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAtXvUSJqkI1v4cmupUJC6-JmnhyEHults",
    authDomain: "peba-store-test.firebaseapp.com",
    projectId: "peba-store-test",
    storageBucket: "peba-store-test.appspot.com",
    messagingSenderId: "189320946809",
    appId: "1:189320946809:web:47e62abb5357bd92ace0a8",
    measurementId: "G-9YNS07NLH3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()