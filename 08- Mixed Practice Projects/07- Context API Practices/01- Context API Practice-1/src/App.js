import "./App.css";

// Imports for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// loginContext Importing (basically its a cusom hook)
import { useLogin } from "./contexts/LoginContext";

// pages
import LoginPage from "./pages/loginPage/LoginPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Navbar from "./components/navBar/Navbar";
import SignupPage from "./pages/signupPage/SignupPage";
import ContactPage from "./pages/contactPage/ContactPage";
import AboutPage from "./pages/aboutPage/About";
import HomePage from "./pages/homePage/HomePage";

function App() {
  const login = useLogin();

  console.log(login, ">>>>>login");
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/profile-page" element={<ProfilePage />} />
          <Route exact path="/signup" element={<SignupPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
