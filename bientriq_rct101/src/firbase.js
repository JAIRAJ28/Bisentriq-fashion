// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIzc6xItpouKlVRRcT4YheGUYZYAHxOfg",
  authDomain: "firbase-auth-bisentriq.firebaseapp.com",
  projectId: "firbase-auth-bisentriq",
  storageBucket: "firbase-auth-bisentriq.appspot.com",
  messagingSenderId: "301013842498",
  appId: "1:301013842498:web:f90c8561738b7eae960bdb",
  measurementId: "G-89LS5626G4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()

export {auth,getAuth}