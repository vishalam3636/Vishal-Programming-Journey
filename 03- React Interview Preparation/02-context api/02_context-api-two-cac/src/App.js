import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div>
        <h3>Context API</h3>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
