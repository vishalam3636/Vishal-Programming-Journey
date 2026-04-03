import React from 'react';
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Login';
import { logout } from './redux/authSlice';
import { clearCart } from './redux/cartSlice';
import './App.css';

function AppContent() {
  const dispatch = useDispatch();
  const { isAuthenticated, currentUser } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Redux E-Commerce Store</h1>
        <p>Learn how to create and connect multiple slices in Redux Toolkit</p>

        {isAuthenticated ? (
          <div className="user-bar">
            <span>Logged in as {currentUser?.name}</span>
            <button className="logout-btn" onClick={handleLogout} type="button">
              Logout
            </button>
          </div>
        ) : null}
      </header>

      {isAuthenticated ? (
        <div className="app-container">
          <div className="main-content">
            <ProductList />
          </div>
          <div className="sidebar">
            <Cart />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
