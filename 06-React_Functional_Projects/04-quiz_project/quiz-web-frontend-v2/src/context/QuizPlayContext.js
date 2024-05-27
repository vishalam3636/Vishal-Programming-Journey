import React, {createContext, useContext, useState} from "react";

const QuizPlayContext = createContext();

// quiz context
export const useQuizPlayContext = () => useContext(QuizPlayContext);

export const QuizPlayContextProvider = (props) => {
    const [isPlayStarted, setIsPlayStarted] = useState(false);
    const [selectedQuizDetail, setSelectedQuizDetail] = useState(null);
    const [selectedQuizQuestions, setSelectedQuizQuestions] = useState(null);

    return(
        <QuizPlayContext.Provider value={{isPlayStarted, setIsPlayStarted, selectedQuizDetail, setSelectedQuizDetail, selectedQuizQuestions, setSelectedQuizQuestions}}>
            {props.children}
        </QuizPlayContext.Provider>
    )
}