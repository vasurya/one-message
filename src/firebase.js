import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOpiruqkmozTedbtg5LiVI42ny4KBMHFg",
  authDomain: "one-chance-7f63d.firebaseapp.com",
  projectId: "one-chance-7f63d",
  storageBucket: "one-chance-7f63d.appspot.com",
  messagingSenderId: "282562406513",
  appId: "1:282562406513:web:edfcbcce0a37d1777d53d0",
  measurementId: "G-E72KHXE97B",

  databaseURL: "https://one-chance-7f63d-default-rtdb.firebaseio.com/",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getDatabase(firebaseApp);

export default db;
