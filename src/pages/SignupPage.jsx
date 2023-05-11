import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { FirebaseAuth } from '../context/Firebase';

const provider = new GoogleAuthProvider();

export const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const createUser = () => {
    createUserWithEmailAndPassword(FirebaseAuth, email, pass)
      .then((val) => console.log(val))
      .catch((error) => {
        console.log(error.message);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });
  };

  const signupWithGoogle = () => {
    signInWithPopup(FirebaseAuth, provider);
  };

  return (
    <div>
      <label htmlFor='email'>Email</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type='email'
        name='email'
        required
      />
      <label htmlFor='Password'>Email</label>
      <input
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        type='password'
        name='Password'
        required
      />
      <br />
      <button onClick={createUser}>SignUp</button>
      <button onClick={signupWithGoogle}>Sign in with google</button>
    </div>
  );
};
