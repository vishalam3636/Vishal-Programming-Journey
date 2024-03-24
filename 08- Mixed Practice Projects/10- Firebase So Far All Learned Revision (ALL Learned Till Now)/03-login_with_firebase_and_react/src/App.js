import "./App.css";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <h1>Login With Email And Password</h1>

      <Signup />
      <Signin />
    </div>
  );
}

export default App;
