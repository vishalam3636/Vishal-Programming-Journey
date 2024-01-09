import "./App.css";

// Routing imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Signup from "./pages/public-pages/signup/Signup";
import Signin from "./pages/public-pages/signin/SignIn";
import ErrorPage from "./pages/error-page/ErrorPage";
import WelcomePublic from "./pages/public-pages/welcome-public/WelcomePublic";

// Encapsulating components
import PublicEncapsulating from "./components/encapsulating components/public-encapsulating/PublicEncapsulating";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Public Pages */}
          <Route
            exact
            path="/create-account"
            element={
              <PublicEncapsulating>
                <Signup />
              </PublicEncapsulating>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <PublicEncapsulating>
                <Signin />
              </PublicEncapsulating>
            }
          />
          <Route
            exact
            path="/"
            element={
              <PublicEncapsulating>
                <WelcomePublic />
              </PublicEncapsulating>
            }
          />

          {/* Error page for all */}
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
