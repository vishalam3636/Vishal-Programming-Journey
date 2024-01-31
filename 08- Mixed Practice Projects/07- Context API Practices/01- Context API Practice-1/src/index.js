import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { LoginDetailProvider } from './contexts/LoginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <LoginDetailProvider>
        <App />
    </LoginDetailProvider>
  // </React.StrictMode>
);
