import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 1, name: 'Aarav Sharma', email: 'aarav@shopdemo.com', password: 'pass123' },
    { id: 2, name: 'Priya Patel', email: 'priya@shopdemo.com', password: 'pass123' },
    { id: 3, name: 'Rohan Singh', email: 'rohan@shopdemo.com', password: 'pass123' },
    { id: 4, name: 'Neha Gupta', email: 'neha@shopdemo.com', password: 'pass123' },
    { id: 5, name: 'Vikram Rao', email: 'vikram@shopdemo.com', password: 'pass123' },
  ],
  currentUser: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const matchedUser = state.users.find(
        user => user.email === email.trim().toLowerCase() && user.password === password
      );

      if (matchedUser) {
        state.currentUser = {
          id: matchedUser.id,
          name: matchedUser.name,
          email: matchedUser.email,
        };
        state.isAuthenticated = true;
        state.error = null;
      } else {
        state.currentUser = null;
        state.isAuthenticated = false;
        state.error = 'Invalid email or password';
      }
    },
    logout: state => {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    clearAuthError: state => {
      state.error = null;
    },
  },
});

export const { login, logout, clearAuthError } = authSlice.actions;
export default authSlice.reducer;