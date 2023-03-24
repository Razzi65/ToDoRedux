// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAwQL89ssDzjtMF6DzZNdQf0bKNqC0uHI",
  authDomain: "newtodoredux-d30a8.firebaseapp.com",
  projectId: "newtodoredux-d30a8",
  storageBucket: "newtodoredux-d30a8.appspot.com",
  messagingSenderId: "126054620291",
  appId: "1:126054620291:web:45d89ecfec92eebe780fb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db