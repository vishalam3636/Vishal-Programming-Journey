import React, { createContext, useContext, useState } from "react";

const QuizContext = createContext();

// quiz context
export const useQuizContext = () => useContext(QuizContext);

export const QuizContextProvider = (props) => {
  const [quizDetail, setQuizDetail] = useState([
    {
      id: "1",
      quizName: "Test Quiz 1",
      quizCategory: "Astronomy",
      quizDuration: "5",
      quizMaxPoints: "5",
      totalQuestions: "4"
    },
    {
      id: "2",
      quizName: "Test Quiz 2",
      quizCategory: "Wildlife",
      quizDuration: "10",
      quizMaxPoints: "5",
      totalQuestions: "6"
    },
    {
      id: "3",
      quizName: "Test Quiz 3",
      quizCategory: "Sports",
      quizDuration: "15",
      quizMaxPoints: "5",
      totalQuestions: "0"
    },
    {
      id: "4",
      quizName: "Test Quiz 4",
      quizCategory: "Entertainment",
      quizDuration: "20",
      quizMaxPoints: "5",
      totalQuestions: "0"
    },
  ]);
  const [allQuestions, setAllQuestions] = useState([
    {
      id: "1",
      quizId: "1",
      quizQuestion: "Biggest planet in Solar System",
      quizOptions: [{ option1: 'Mars', option2: 'Jupiter', option3: 'Saturn', option4: 'Venus' }],
      quizAnswer: ["Jupiter"],
    },
    {
      id: "2",
      quizId: "1",
      quizQuestion: "Hottest planet in solar system",
      quizOptions: [{ option1: 'Venus', option2: 'Pluto', option3: 'Saturn', option4: 'Mars' }],
      quizAnswer: ["Mars"],
    },
    {
      id: "3",
      quizId: "1",
      quizQuestion: "Which planet in solar system exists life",
      quizOptions: [{ option1: 'Venus', option2: 'Pluto', option3: 'Earth', option4: 'Mars' }],
      quizAnswer: ["Mars"],
    },
    {
      id: "4",
      quizId: "1",
      quizQuestion: "Which planet is known as 'Dwarf Planet' ",
      quizOptions: [{ option1: 'Mercury', option2: 'Pluto', option3: 'Uranus', option4: 'Neptune' }],
      quizAnswer: ["Pluto"],
    },
    {
      id: "5",
      quizId: "2",
      quizQuestion: "Which is the biggest mammal",
      quizOptions: [{ option1: 'Elephant', option2: 'Blue Whale', option3: 'Giraffe', option4: 'Human' }],
      quizAnswer: ["Blue Whale"],
    },
    {
      id: "6",
      quizId: "2",
      quizQuestion: "Which among these is a carnivores",
      quizOptions: [{ option1: 'Deer', option2: 'Elephant', option3: 'Lion', option4: 'Antelope' }],
      quizAnswer: ["Lion"],
    },
    {
      id: "7",
      quizId: "2",
      quizQuestion: "Which among these is a Herbivore",
      quizOptions: [{ option1: 'Deer', option2: 'Leopard', option3: 'Panther', option4: 'Tiger' }],
      quizAnswer: ["Deer"],
    },
    {
      id: "8",
      quizId: "2",
      quizQuestion: "What does the term biodiversity mean?",
      quizOptions: [{ option1: 'The total variety of all life on earth', option2: 'Lots of wild habitats', option3: 'Different types of species', option4: 'The variety of characteristics within a species' }],
      quizAnswer: ["The total variety of all life on earth"],
    },
    {
      id: "9",
      quizId: "2",
      quizQuestion:
        "What covers one third of the land’s surface, and helps to keep the climate stable by storing carbon?",
      quizOptions: [{ option1: 'Forests', option2: 'Deserts', option3: 'Grasslands', option4: 'Rivers' }],
      quizAnswer: ["Forests"],
    },
    {
      id: "10",
      quizId: "2",
      quizQuestion:
        "Why are pollinators such as bees so essential to life on earth?",
      quizOptions: [{ option1: 'They provide oxygen', option2: 'They turn over the soil helping plants to grow', option3: 'They help reduce pest populations', option4: 'They help provide the food we eat' }],
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
