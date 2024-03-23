import { getDatabase, ref, set } from "firebase/database";

// Initialize Realtime Database and get a reference to the service
import { app } from "./firebase";
const db = getDatabase(app);

function App() {
  function writeUserData() {
    set(ref(db, "users/" + 2), {
      username: "Vishal Chauhan",
      email: "vishal@gmail.com",
    });
  }

  return (
    <div className="App">
      <button onClick={writeUserData}>Click To Add Data</button>
    </div>
  );
}

export default App;
