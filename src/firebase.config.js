// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBWDKwxTPWFJCLfoLtQtB5vTM1v8hJaqpg",
  authDomain: "react-crud-76cdc.firebaseapp.com",
  projectId: "react-crud-76cdc",
  storageBucket: "react-crud-76cdc.appspot.com",
  messagingSenderId: "638719619755",
  appId: "1:638719619755:web:6594c51ea45c3ebf9b7dee",
  measurementId: "G-0G11E11WN3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);