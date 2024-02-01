// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR3ckvaGbOWPbrQ9fwED9dwuRruD7mE4Y",
  authDomain: "dragonfly-27ea9.firebaseapp.com",
  databaseURL: "https://dragonfly-27ea9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dragonfly-27ea9",
  storageBucket: "dragonfly-27ea9.appspot.com",
  messagingSenderId: "40281223159",
  appId: "1:40281223159:web:fdd837f7b74621224a08f2",
  measurementId: "G-RK5SWFDMYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
export { database};