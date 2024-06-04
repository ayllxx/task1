// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration

    const firebaseConfig = {
        apiKey: "AIzaSyDzZkoogz_ynPuVuK0MenCK5-dOBwD1Lmk",
        authDomain: "test1-9edec.firebaseapp.com",
        projectId: "test1-9edec",
        storageBucket: "test1-9edec.appspot.com",
        messagingSenderId: "800457748616",
        appId: "1:800457748616:web:5027a58a8918ac57ea6f3d"
      };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { app, analytics, firestore };
