import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { app } from "./firebase";
import { SingupPage } from "./SingupPage";
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const auth = getAuth(app);

function App() {
  //Authentication
  const signUp = () => {
    createUserWithEmailAndPassword(auth, "salman@gmail.com", "pass@123").then(
      (value) => console.log(value)
    );
  };

  //Realtime Data function
  const putData = () => {
    set(ref(database, "users/Imran"), {
      username: "Imran",
      email: "email@gmail.com",
      id: 2,
    });
  };
  return (
    <div className="App">
      <header className="App-header">Firebase App</header>
      <button onClick={putData}>Add Data</button>
      <button onClick={signUp}>Add User</button>
      <SingupPage />
    </div>
  );
}

export default App;
