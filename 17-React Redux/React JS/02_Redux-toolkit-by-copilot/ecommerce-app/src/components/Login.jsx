import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthError, login } from '../redux/authSlice';
import './Login.css';

export default function Login() {
  const dispatch = useDispatch();
  const { users, error } = useSelector(state => state.auth);
  const [email, setEmail] = useState(users[0]?.email ?? '');
  const [password, setPassword] = useState('pass123');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  const handleUserSelect = selectedEmail => {
    setEmail(selectedEmail);
    setPassword('pass123');
    dispatch(clearAuthError());
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login to Continue</h2>
        <p className="login-subtitle">
          Pick one of the 5 demo users and log in to access the store.
        </p>

        <div className="demo-users">
          {users.map(user => (
            <button
              key={user.id}
              className={email === user.email ? 'demo-user active' : 'demo-user'}
              type="button"
              onClick={() => handleUserSelect(user.email)}
            >
              <span>{user.name}</span>
              <small>{user.email}</small>
            </button>
          ))}
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={event => {
              setEmail(event.target.value);
              dispatch(clearAuthError());
            }}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={event => {
              setPassword(event.target.value);
              dispatch(clearAuthError());
            }}
            required
          />

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>

        <p className="login-hint">
          Demo password for all users: <strong>pass123</strong>
        </p>

        {error ? <p className="login-error">{error}</p> : null}
      </div>
    </div>
  );
}