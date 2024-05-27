import React, { createContext, useContext, useState } from "react";

const QuizContext = createContext();

// login context
export const useQuizContext = () => useContext(QuizContext);

export const QuizContextProvider = (props) => {
  const [quizDetail, setQuizDetail] = useState([
    {
      id: "1",
      quizName: "Test Quiz 1",
      quizCategory: "Astronomy",
      quizDuration: "5",
      quizMaxPoints: "5",
    },
    {
      id: "2",
      quizName: "Test Quiz 2",
      quizCategory: "Wildlife",
      quizDuration: "10",
      quizMaxPoints: "5",
    },
    {
      id: "3",
      quizName: "Test Quiz 3",
      quizCategory: "Sports",
      quizDuration: "15",
      quizMaxPoints: "5",
    },
    {
      id: "4",
      quizName: "Test Quiz 4",
      quizCategory: "Entertainment",
      quizDuration: "20",
      quizMaxPoints: "5",
    },
  ]);
  const [allQuestions, setAllQuestions] = useState([
    {
      id: "1",
      quizId: "1",
      quizQuestion: "Biggest planet in Solar System",
      quizOptions: ["Mars", "Jupiter", "Saturn", "Venus"],
      quizAnswer: ["Jupiter"],
    },
    {
      id: "2",
      quizId: "1",
      quizQuestion: "Hottest planet in solar system",
      quizOptions: ["Venus", "Pluto", "Saturn", "Mars"],
      quizAnswer: ["Mars"],
    },
    {
      id: "3",
      quizId: "1",
      quizQuestion: "Which planet in solar system exists life",
      quizOptions: ["Venus", "Pluto", "Earth", "Mars"],
      quizAnswer: ["Mars"],
    },
    {
      id: "4",
      quizId: "1",
      quizQuestion: "Which planet is known as 'Dwarf Planet' ",
      quizOptions: ["Mercury", "Pluto", "Uranus", "Neptune"],
      quizAnswer: ["Pluto"],
    },
    {
      id: "5",
      quizId: "2",
      quizQuestion: "Which is the biggest mammal",
      quizOptions: ["Elephant", "Blue Whale", "Giraffe", "Human"],
      quizAnswer: ["Blue Whale"],
    },
    {
      id: "6",
      quizId: "2",
      quizQuestion: "Which among these is a carnivores",
      quizOptions: ["Deer", "Elephant", "Lion", "Antelope"],
      quizAnswer: ["Lion"],
    },
    {
      id: "7",
      quizId: "2",
      quizQuestion: "Which among these is a Herbivore",
      quizOptions: ["Deer", "Leopard", "Panther", "Tiger"],
      quizAnswer: ["Deer"],
    },
    {
      id: "8",
      quizId: "2",
      quizQuestion: "What does the term biodiversity mean?",
      quizOptions: [
        "The total variety of all life on earth",
        "Lots of wild habitats",
        "Different types of species",
        "The variety of characteristics within a species",
      ],
      quizAnswer: ["The total variety of all life on earth"],
    },
    {
      id: "9",
      quizId: "2",
      quizQuestion:
        "What covers one third of the land’s surface, and helps to keep the climate stable by storing carbon?",
      quizOptions: ["Forests", "Deserts", "Grasslands", "Rivers"],
      quizAnswer: ["Forests"],
    },
    {
      id: "10",
      quizId: "2",
      quizQuestion:
        "Why are pollinators such as bees so essential to life on earth?",
      quizOptions: [
        "They provide oxygen",
        "They turn over the soil helping plants to grow",
        "They help reduce pest populations",
        "They help provide the food we eat",
      ],
      quizAnswer: ["They help provide the food we eat"],
    },
  ]);

  return (
    <QuizContext.Provider
      value={{ allQuestions, setAllQuestions, quizDetail, setQuizDetail }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};
