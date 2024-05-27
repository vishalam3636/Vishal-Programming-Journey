// import InputField from "../../components/inputField/InputField";
// import RadioButtonGroup from "../../components/radioButton/RadioButtonGroup";
// import SelectOptionComponent from "../../components/select-option-component/SelectOptionComponent";
// import "./quizform.css";
// import React from "react";

// export default function QuizForm(){
//     return(
//         <div className="main-page quizform-page">
//              <div className="quiz-form-container">
//                 <div><h1>Add Quiz Form</h1></div>

//                 <SelectOptionComponent />
//                 <InputField />
//                 <RadioButtonGroup />
//              </div>
//         </div>
//     )
// }

// BY CHATGPT
import "./quizform.css";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
} from "@material-ui/core";

import { useQuizContext } from "../../context/QuizContext";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    // minWidth: 120,0
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const QuizForm = () => {
  let quizContext = useQuizContext();

  const classes = useStyles();

  const [selectedQuiz, setSelectedQuiz] = useState("");
  const [addNewQuiz, setAddNewQuiz] = useState(false);
  const [addNewQuizCategory, setAddNewQuizCategory] = useState(false);
  const [addNewDuration, setAddNewDuration] = useState(false);

  const [quizQuestionSubmit, setQuizQuestionSubmit] = useState({
    quizId: "",
    quizQuestion: "",
    quizOptions: [],
    quizAnswer: [],
  });

  const handleSelectedQuiz = (e) => {
    setSelectedQuiz(e.target.value);
  };

  const handleQuestionChange = (e) => {
    let valName = e.target.name;
    console.log(valName);

    if (!valName.toLowerCase().includes("option")) {
      console.log("not option");
      setQuizQuestionSubmit({
        ...quizQuestionSubmit,
        [e.target.name]: e.target.value,
      });
    } else {
      console.log("is a option");
      setQuizQuestionSubmit({
        ...quizQuestionSubmit,
        quizOptions: [...quizQuestionSubmit.quizOptions, e.target.value],
      });
    }
  };

  const handleSubmit = () => {};

  console.log(quizContext, ">>>>quizContext in quiz form");
  console.log(quizContext.allQuestions.length, ">>> quiz length");
  console.log(selectedQuiz, ">>> selectedQuiz");
  console.log(quizQuestionSubmit, ">>>>>quizQuestionSubmit");
  return (
    <div className="main-page quiz-form-page">
      <Container className={classes.formContainer}>
        {/* <Container className="main-page quiz-form-page"> */}
        <Typography variant="h5">Add Quiz</Typography>

        {/*************** QUIZ NAME *******************/}
        {addNewQuiz ? (
          <>
            <TextField
              label="Quiz Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="quizName"
            />
            <small onClick={() => setAddNewQuiz(false)}>
              Select from existing quiz?
            </small>
          </>
        ) : (
          <FormControl className={classes.formControl}>
            <InputLabel>Quiz Name</InputLabel>
            <Select
              name="quizName"
              onChange={handleSelectedQuiz}
              value={selectedQuiz}
            >
              {quizContext?.quizDetail.map((quizDetails) => {
                return (
                  <MenuItem value={quizDetails} key={quizDetails.id}>
                    {quizDetails.quizName}
                  </MenuItem>
                );
              })}
            </Select>
            <small onClick={() => setAddNewQuiz(true)}>Add a new quiz?</small>
          </FormControl>
        )}

        {/*************** QUIZ CATEGORY *******************/}
        {addNewQuizCategory ? (
          <>
            <TextField
              label="Quiz Category"
              variant="outlined"
              fullWidth
              margin="normal"
              name="quizCategory"
            />
            <small onClick={() => setAddNewQuizCategory(false)}>
              Select from existing quiz category?
            </small>
          </>
        ) : (
          <FormControl className={classes.formControl}>
            <InputLabel>Category</InputLabel>
            <Select
              // onChange={handleChange}
              value={selectedQuiz ? selectedQuiz.quizCategory : ""}
              name="quizCategory"
            >
              {quizContext?.quizDetail.map((quizDetails) => {
                return (
                  <MenuItem
                    value={quizDetails.quizCategory}
                    key={quizDetails.id}
                  >
                    {quizDetails.quizCategory}
                  </MenuItem>
                );
              })}
            </Select>
            <small onClick={() => setAddNewQuizCategory(true)}>
              Add a new quiz category?
            </small>
          </FormControl>
        )}

        {/*************** QUIZ DURATION *******************/}
        {addNewDuration ? (
          <>
            <TextField
              label="Quiz Duration (mins)"
              variant="outlined"
              fullWidth
              margin="normal"
              name="quizCategory"
            />
            <small onClick={() => setAddNewDuration(false)}>
              Select from existing durations?
            </small>
          </>
        ) : (
          <FormControl className={classes.formControl}>
            <InputLabel>Duration</InputLabel>
            <Select
              // onChange={handleChange}
              name="quizDuration"
              value={selectedQuiz ? selectedQuiz.quizDuration : ""}
            >
              {quizContext?.quizDetail.map((quizDetails) => {
                return (
                  <MenuItem
                    value={quizDetails.quizDuration}
                    key={quizDetails.id}
                  >
                    {quizDetails.quizDuration} minutes
                  </MenuItem>
                );
              })}
            </Select>
            <small onClick={() => setAddNewDuration(true)}>
              Add a new quiz duration?
            </small>
          </FormControl>
        )}

        {/*************** QUIZ QUESTION *******************/}
        <TextField
          label="Question"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleQuestionChange}
          name="quizQuestion"
        />

        {/*************** QUIZ QUESTION OPTIONS *******************/}
        <div
          style={{ border: "2px solid black", padding: "10px", margin: "20px" }}
        >
          {/* <FormControl component="fieldset" className={classes.formControl}> */}
          <Typography variant="subtitle1">Options</Typography>
          <TextField
            label="Option-1"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleQuestionChange}
            name="option1"
          />
          <TextField
            label="Option-2"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleQuestionChange}
            name="option2"
          />
          <TextField
            label="Option-3"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleQuestionChange}
            name="option3"
          />
          <TextField
            label="Option-4"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleQuestionChange}
            name="option4"
          />
          {/* </FormControl> */}
        </div>

        {/****************** QUIZ ANSWER *******************/}
        <FormControl component="fieldset" className={classes.formControl}>
          <Typography variant="subtitle1">Correct Answer</Typography>
          <TextField
            label="Correct Answer"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleQuestionChange}
            name="quizAnswer"
          />
        </FormControl>

        {/*************** QUIZ SUBMIT *******************/}
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleSubmit}
        >
          Add Quiz
        </Button>
      </Container>
    </div>
  );
};

export default QuizForm;
