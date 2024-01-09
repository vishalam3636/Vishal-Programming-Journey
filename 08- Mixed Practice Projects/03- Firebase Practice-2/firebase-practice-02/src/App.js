import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";

const db = getDatabase(app);

function App() {
  const putData = () => {
    set(ref(db, "users/vishalData"), {
      username: "vishalam363636",
      email: "vishalam3636@gmail.com",
      image:
        "https://i.natgeofe.com/k/c9d2cffc-2152-404a-b540-1cc48bbcd3f2/spinosaurid-dino-news.jpg",
    });
  };

  return (
    <div className="App">
      <h1>This is App Component</h1>
      <button onClick={putData}>Put Data</button>
    </div>
  );
}

export default App;
