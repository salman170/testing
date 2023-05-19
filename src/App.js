import { useEffect, useState } from 'react';

import { FirebaseAuth, useFirebase } from './context/Firebase';
import { SignupPage } from './pages/SignupPage';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const Firebase = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      if (user) setUser(user);
      else {
        console.log('You are logged out');
        setUser(null);
      }
    });
  }, [user]);

  //any type of data can be added to realtime database
  const putDataNew = () => {
    Firebase.putData('Grandfather/father/child', { id: 1, age:25, name:"Salman" });
  };

  // if (user === null) {
  return (
    <div>
      {/* <h1>Firebase</h1> */}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type='email'
        placeholder='Enter Email'
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type='password'
        placeholder='Enter password'
      />
      <button
        onClick={() => {
          Firebase.signupUserWithEmailAndPassword(email, password);
          // Firebase.putData('users/' + 'saif', { email, password });
        }}
      >
        SignUp
      </button>
      <h1>Signin</h1>
      <SignupPage />
      <button
        onClick={() => {
          Firebase.writeData();
        }}
      >
        Put Data
      </button>
      <br />
      <button
        onClick={() => {
          Firebase.subCollection();
        }}
      >
        Put SubData
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          Firebase.getDocument();
        }}
      >
        get Doc
      </button>
      <button
        onClick={() => {
          Firebase.getDocByQuery();
        }}
      >
        get Doc by query
      </button>
      <br />
      <button
        onClick={() => {
          Firebase.update();
        }}
      >
        update
      </button>

      <br />
      <br />
      <button onClick={putDataNew}>Realtime add data</button>
      <br />
      <button onClick={Firebase.getRealtime}>Realtime get data</button>
      <button onClick={Firebase.realtimeTrack}>realtimeTrack</button>
    </div>
  );
  // }

  // return <div>Hello world</div>;
};

export default App;
