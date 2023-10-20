// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDqv68uRDlY--IzvfdaU2krv6tEYsRuuI",
    authDomain: "tailwind-firebase-auth-58ec5.firebaseapp.com",
    projectId: "tailwind-firebase-auth-58ec5",
    storageBucket: "tailwind-firebase-auth-58ec5.appspot.com",
    messagingSenderId: "611692893116",
    appId: "1:611692893116:web:8c7e57219fa77219bd51b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app