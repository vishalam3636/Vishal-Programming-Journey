import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import DevToolDetector from './pages/devtool-detector/DevToolDetector';
import { QuizContextProvider } from './context/QuizContext';
import { QuizPlayContextProvider } from './context/QuizPlayContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <DevToolDetector>
    <QuizContextProvider>
      <QuizPlayContextProvider>
        <App />
      </QuizPlayContextProvider>
    </QuizContextProvider>
  //  </DevToolDetector>
  // </React.StrictMode>
);
