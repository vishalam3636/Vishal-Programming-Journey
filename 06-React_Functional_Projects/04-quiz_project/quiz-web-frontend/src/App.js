import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import QuizForm from './pages/quiz-form/QuizForm';
import HomePage from './pages/home-page/HomePage';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/add-quiz' element={<QuizForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
