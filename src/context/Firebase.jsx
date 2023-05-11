import { createContext, useContext } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getDatabase, set, ref } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBYoiEEzvjzwAbM3AZ3wqQHJzZ2FR482co',
  authDomain: 'testing-c5f95.firebaseapp.com',
  projectId: 'testing-c5f95',
  storageBucket: 'testing-c5f95.appspot.com',
  messagingSenderId: '403902777287',
  appId: '1:403902777287:web:67eae474144631e8fabbe2',
  databaseURL: 'https://testing-c5f95-default-rtdb.firebaseio.com',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

//creating context
const FirebaseContext = createContext(null);

//custom hook for returning usecontext
export const useFirebase = () => useContext(FirebaseContext);

const database = getDatabase(FirebaseApp);

//creating Provider
export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(FirebaseAuth, email, password);
  };

  const putData = (key, data) => set(ref(database, key), data);

  return (
    <FirebaseContext.Provider
      value={{ signupUserWithEmailAndPassword, putData, useFirebase }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
