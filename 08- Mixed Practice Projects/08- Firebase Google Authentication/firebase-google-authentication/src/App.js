import "./App.css";

import { useFirebase } from "./context/FirebaseContext";

function App() {
  const firebase = useFirebase();

  let signUpWithGoogle = () => {
    let googleAuth = firebase.googleAuth;
    googleAuth();
  };

  console.log(firebase, ">>>> firebase");
  return (
    <div className="App">
      <h2>This is App Component</h2>

      <div className="form-container">
        <h3>Sign-In Form</h3>
        <div className="field-container">
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div className="field-container">
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <div className="button-container">
          <button>Login</button>
          <button onClick={signUpWithGoogle}>Sigin With Google</button>
        </div>
      </div>
    </div>
  );
}

export default App;
