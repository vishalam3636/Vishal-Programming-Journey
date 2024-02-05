import "./App.css";

// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Nav Component Import
import NavComponent from "./components/specialComponents/navComponent/NavComponent";

// Public Accessable Pages
import SignInPage from "./pages/publicPages/signinPage/SigninPage";
import SignUpPage from "./pages/publicPages/signupPage/SignupPage";
import PublicHomePage from "./pages/publicPages/publicHomePage/PublicHomePage";

// User Accessable pages
import Cart from "./pages/userPages/cart/Cart";
import ProfilePage from "./pages/userPages/profilePage/ProfilePage";
import Timeline from "./pages/userPages/timeline/Timeline";

// Admin Accessable Pages
import AdminProfile from "./pages/adminPages/adminProfile/AdminProfile";
import CustomerHandling from "./pages/adminPages/customerHandling/CustomerHandling";

// Encapsulating Components
import AdminEncapsulation from "./components/encapsulatingComponents/adminEncapsulation/AdminEncapsulation";
import UserEncapsulation from "./components/encapsulatingComponents/userEncapsulation/UserEncapsulation";
import PublicEncapsulation from "./components/encapsulatingComponents/publicEncapsulation/PublicEncapsulation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavComponent />
        <Routes>
          {/* Public Accessable Pages */}
          <Route
            exact
            path="/"
            element={
              <PublicEncapsulation>
                <PublicHomePage />
              </PublicEncapsulation>
            }
          />
          <Route
            exact
            path="/sign-in"
            element={
              <PublicEncapsulation>
                <SignInPage />
              </PublicEncapsulation>
            }
          />
          <Route
            exact
            path="/create-account"
            element={
              <PublicEncapsulation>
                <SignUpPage />
              </PublicEncapsulation>
            }
          />

          {/* Users Accessable Pages */}
          <Route
            exact
            path="/cart"
            element={
              <UserEncapsulation>
                <Cart />
              </UserEncapsulation>
            }
          />
          <Route
            exact
            path="/user-profile"
            element={
              <UserEncapsulation>
                <ProfilePage />
              </UserEncapsulation>
            }
          />
          <Route
            exact
            path="/timeline"
            element={
              <UserEncapsulation>
                <Timeline />
              </UserEncapsulation>
            }
          />

          {/* Admin Accessable Pages */}
          <Route
            exact
            path="/admin-profile"
            element={
              <AdminEncapsulation>
                <AdminProfile />
              </AdminEncapsulation>
            }
          />
          <Route
            exact
            path="/customer-handling"
            element={
              <AdminEncapsulation>
                <CustomerHandling />
              </AdminEncapsulation>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
