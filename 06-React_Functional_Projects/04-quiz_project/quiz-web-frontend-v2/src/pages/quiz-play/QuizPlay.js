import "./quizplay.css";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

import { useQuizPlayContext } from "../../context/QuizPlayContext";

export default function QuizPlay() {
  const location = useLocation();
  const quizPlayContext = useQuizPlayContext();
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz-question/:1", { state: { id: 1 } });
  };

  console.log(quizPlayContext, ">>>>quizPlayContext in play-quiz page");
  console.log(location, ">>>location in play-quiz page");
  return (
    <div className="main-page quiz-play-page">
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleStartQuiz}
        >
          Play
        </Button>
      </Stack>
    </div>
  );
}
