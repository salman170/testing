import { useState } from 'react';

import { useFirebase } from './context/Firebase';

const App = () => {
  const Firebase = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Firebase</h1>
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
          Firebase.putData('users/' + 'saif', { email, password });
        }}
      >
        SignUp
      </button>
    </div>
  );
};

export default App;
