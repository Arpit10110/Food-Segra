import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD4O6Z3Lwc9HZ5zJdkVlUy4MCxyTimaJ8k",
  authDomain: "food-segra.firebaseapp.com",
  projectId: "food-segra",
  storageBucket: "food-segra.appspot.com",
  messagingSenderId: "373024818378",
  appId: "1:373024818378:web:f819a51512e6cb2caca033"
};
const app = initializeApp(firebaseConfig); 
export const imgdb=getStorage(app);
export const db =getFirestore(app);
export const auth = getAuth(app); 