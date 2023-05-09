import { getDatabase, ref, set } from "firebase/database";
import { app } from './firebase'
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

function App() {
  //Realtime Data function
  const putData = () => {
    set(ref(database, 'users/Imran'), {
      username: 'Imran',
      email: "email@gmail.com",
      id: 2

    });
  }
  return (
    <div className="App">
      <header className="App-header">
        Firebase App
      </header>
      <button onClick={putData}>Add Data</button>

    </div>
  );
}

export default App;
