// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYoiEEzvjzwAbM3AZ3wqQHJzZ2FR482co",
  authDomain: "testing-c5f95.firebaseapp.com",
  projectId: "testing-c5f95",
  storageBucket: "testing-c5f95.appspot.com",
  messagingSenderId: "403902777287",
  appId: "1:403902777287:web:67eae474144631e8fabbe2",
  databaseURL: 'https://testing-c5f95-default-rtdb.firebaseio.com'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);