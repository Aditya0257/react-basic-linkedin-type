import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAWMX6hZ_EIi2Ds272Jqel1yA0PIDMy_sQ",
  authDomain: "linkedin-clone-27716.firebaseapp.com",
  projectId: "linkedin-clone-27716",
  storageBucket: "linkedin-clone-27716.appspot.com",
  messagingSenderId: "741345535982",
  appId: "1:741345535982:web:9a9824b590dfef5becd0ff"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
