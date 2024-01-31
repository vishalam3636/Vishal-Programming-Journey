import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// toastify css
import 'react-toastify/dist/ReactToastify.css';

import { LoginDetailProvider } from './contexts/LoginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <LoginDetailProvider>
        <App />
    </LoginDetailProvider>
  // </React.StrictMode>
);
