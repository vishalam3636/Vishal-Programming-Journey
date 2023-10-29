import "./App.css";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";

function App() {
  const db = getDatabase(); // even when i am not passing app in it, it's still adding data to database.. why??? and when consoling, i am clearly getting my firebase project details...in it

  const putData = () => {
    console.log("button clicked");
    set(ref(db, "users/sandy"), {
      id: 1,
      username: "Sandeep",
      age: "27",
    });
  };

  return (
    <div className="App">
      <h3>Firebase Practice-01 (connection)</h3>
      <button onClick={putData}>Put Data</button>
    </div>
  );
}

export default App;
