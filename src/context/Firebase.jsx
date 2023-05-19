import { createContext, useContext } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

//to get the database we use getDatabase , to set the data we use set and to give the refrence of the database we use ref for giving refernce to the root , ///////Realtimedatabase
import { getDatabase, set, ref, get, child, onValue } from 'firebase/database';

//Firestore
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

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

//FirebaseStore
export const FirebaseStore = getFirestore(FirebaseApp);

//creating context
const FirebaseContext = createContext(null);

//custom hook for returning usecontext
export const useFirebase = () => useContext(FirebaseContext);

//Realtimedatabase
const database = getDatabase(FirebaseApp);

//creating Provider
export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(FirebaseAuth, email, password);
  };

  //Realtimedatabase
  const putData = (key, data) => set(ref(database, key), data);

  const writeData = async () => {
    const result = await addDoc(collection(FirebaseStore, 'Cities'), {
      name: 'Delhi',
      pinCode: 1234,
    });
    console.log(result);
  };

  const subCollection = async () => {
    const result = await addDoc(
      collection(FirebaseStore, 'Cities/JIEllPgLLzEZC76mpUH7/places'),
      {
        name: 'Mumbai',
        desc: 'Awsome desc',
        dat: Date.now(),
        pinCode: 1234,
      }
    );
    console.log(result);
  };
  const getRealtime = async () =>
    get(child(ref(database), 'Grandfather/father')).then((snap) =>
      console.log(snap.val())
    );
    
  const realtimeTrack  = async ()=>{
    onValue(ref(database, "Grandfather"), (snapshot) => {console.log(snapshot.val())})
  }

  const getDocument = async () => {
    const docRef = doc(FirebaseStore, 'Cities', 'JIEllPgLLzEZC76mpUH7');
    const docSnap = await getDoc(docRef);
    console.log(docSnap);
    console.log(docSnap.data());
  };

  const getDocByQuery = async () => {
    const collectionRef = collection(FirebaseStore, 'user');
    const q = query(collectionRef, where('isMale', '==', true));
    const snap = await getDocs(q);
    snap.forEach((data) => console.log(data.data()));
  };

  const update = async () => {
    const docRef = doc(FirebaseStore, 'Cities', 'JIEllPgLLzEZC76mpUH7');
    updateDoc(docRef, {
      name: 'New Delhi',
    });
  };
  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        putData,
        useFirebase,
        writeData,
        subCollection,
        getDocument,
        getDocByQuery,
        update,
        getRealtime,
        realtimeTrack
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
