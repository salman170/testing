import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

export const SingupPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const auth = getAuth(app);
  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((val) => console.log(val))
      .catch((error) => {
        console.log(error.message)
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        required
      />
      <label htmlFor="Password">Email</label>
      <input
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        type="password"
        name="Password"
        required
      />
      <button onClick={createUser}>SignUp</button>
    </div>
  );
};
