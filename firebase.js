
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAQClQwphqzQu1BBMj2Z4gFX6Yn4zKvMqg",
  authDomain: "laundary-appli.firebaseapp.com",
  projectId: "laundary-appli",
  storageBucket: "laundary-appli.appspot.com",
  messagingSenderId: "773210186665",
  appId: "1:773210186665:web:fea99f15a4dd4dbdef5ab8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};