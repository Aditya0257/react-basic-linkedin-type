import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvmG3HoFJ3cU1Kh23NR5EUS6zcsLeBjuY",
  authDomain: "react-firebase-homepage.firebaseapp.com",
  projectId: "react-firebase-homepage",
  storageBucket: "react-firebase-homepage.appspot.com",
  messagingSenderId: "189558888241",
  appId: "1:189558888241:web:fb42589689060fb0cfc210",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
