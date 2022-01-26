import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD-4mmqh0a-8hoY2kKSvv50BcbxmqWM_i4",
    authDomain: "burger-queen-scl018.firebaseapp.com",
    projectId: "burger-queen-scl018",
    storageBucket: "burger-queen-scl018.appspot.com",
    messagingSenderId: "541249860901",
    appId: "1:541249860901:web:e7bf7ba90fe1fa7381d6cc"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;