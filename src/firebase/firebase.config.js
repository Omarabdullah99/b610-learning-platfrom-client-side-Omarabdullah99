// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtKOuWhcUe-YTp5xwG_1T-ah1IJWiZj4g",
  authDomain: "growup-skill.firebaseapp.com",
  projectId: "growup-skill",
  storageBucket: "growup-skill.appspot.com",
  messagingSenderId: "147673008193",
  appId: "1:147673008193:web:fd1a1676b4ee33288e5ec0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app