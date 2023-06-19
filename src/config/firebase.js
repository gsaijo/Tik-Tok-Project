import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDwsCLWrR5nPTSAQ0H9f70YCJJKuKAl5i8",
  authDomain: "tiktok---jornada-2ed37.firebaseapp.com",
  projectId: "tiktok---jornada-2ed37",
  storageBucket: "tiktok---jornada-2ed37.appspot.com",
  messagingSenderId: "180355816463",
  appId: "1:180355816463:web:4a10e58f8cd5e87947d77a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
