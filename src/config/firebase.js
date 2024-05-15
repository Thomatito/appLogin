import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwV4gzKjyJmyMVqjRULcvyXAT7lh6zWsc",
  authDomain: "applogin-4eec9.firebaseapp.com",
  projectId: "applogin-4eec9",
  storageBucket: "applogin-4eec9.appspot.com",
  messagingSenderId: "647446806549",
  appId: "1:647446806549:web:3fc4e050ef546ef115ce1c"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // para disponibilizar a autenticação
export const db = getFirestore(app); // para disponibilizar o banco de dados

