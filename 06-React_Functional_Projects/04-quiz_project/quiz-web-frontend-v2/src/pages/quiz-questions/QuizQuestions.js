import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export default function QuizQuestion() {
  const location = useLocation();
  const { id } = useParams();

  console.log(location, ">>> location in quiz question page");
  return (
    <div className="main-page quiz-question-page">
      <h1>Quiz Question: {id ? id : "null"}</h1>
    </div>
  );
}
