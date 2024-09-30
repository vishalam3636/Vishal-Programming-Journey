import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import QuizForm from "./pages/quiz-form/QuizForm";
import HomePage from "./pages/home-page/HomePage";
import Navbar from "./components/navbar/Navbar";
import QuizDetails from "./pages/quiz-details/QuizDetails";
import QuizPlay from "./pages/quiz-play/QuizPlay";
import QuizQuestion from "./pages/quiz-questions/QuizQuestions";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-quiz" element={<QuizForm />} />
          <Route path="/quiz-details" element={<QuizDetails />} />
          <Route path="/play-quiz" element={<QuizPlay />} />
          <Route path="/quiz-question/:id" element={<QuizQuestion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
