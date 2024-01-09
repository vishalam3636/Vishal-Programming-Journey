import "./App.css";

import { ref, set } from "firebase/database";
import { app, db } from "./firebase";

function App() {
  const putData = () => {
    set(ref(db, "users/vishal"), {
      id: 1,
      name: "Vishal Singh Chauhan",
      age: 27,
    });
  };

  return (
    <div className="App">
      <h3>Fireabse React App</h3>
      <button onClick={putData}>Put Data</button>
    </div>
  );
}

export default App;
