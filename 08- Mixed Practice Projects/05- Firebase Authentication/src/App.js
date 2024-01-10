import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailPasswordAuthentication from "./pages/signup_authentication/EmailPasswordAuthentication";
import Navigation from "./components/Navigation";
import EmailpasswordLogin from "./pages/signin_authentication/EmailpasswordLogin";

function App() {
  return (
    <div className="App">
      <h3>React Firebase Authentication</h3>

      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route
            exact
            path="/signup"
            element={<EmailPasswordAuthentication />}
          />
          <Route exact path="/login" element={<EmailpasswordLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
