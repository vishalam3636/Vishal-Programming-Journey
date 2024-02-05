import "./App.css";

// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Nav Component Import
import NavComponent from "./components/specialComponents/navComponent/NavComponent";

// Public Accessable Pages
import SignInPage from "./pages/publicPages/signinPage/SigninPage";
import SignUpPage from "./pages/publicPages/signupPage/SignupPage";
import PublicHomePage from "./pages/publicPages/publicHomePage/PublicHomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavComponent />
        <Routes>
          <Route exact path="/" element={<PublicHomePage />} />
          <Route exact path="/sign-in" element={<SignInPage />} />
          <Route exact path="/create-account" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
