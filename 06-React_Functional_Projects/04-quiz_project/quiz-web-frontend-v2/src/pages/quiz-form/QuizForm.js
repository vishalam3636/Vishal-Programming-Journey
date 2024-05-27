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

// for modal
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import { useQuizContext } from "../../context/QuizContext";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    padding: "10px",
    margin:"15px"
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

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  const [selectedQuiz, setSelectedQuiz] = useState("");

  const [newQuiz, setNewQuiz] = useState({
      id: "",
      quizName: "",
      quizCategory: "",
      quizDuration: "",
      quizMaxPoints: "",
      totalQuestions: "0"
  });
  const [quizOptions, setQuizOptions] = useState({ option1: "", option2: "", option3: "", option4: "" })
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

      if (valName !== "quizAnswer") {
        setQuizQuestionSubmit({
          ...quizQuestionSubmit,
          [e.target.name]: e.target.value,
        });
      } else if (valName == "quizAnswer") {
        setQuizQuestionSubmit({
          ...quizQuestionSubmit,
          [e.target.name]: [`${e.target.value}`],
        });
      }
    } else {
      console.log("is a option");
    }
  };

  const handleOptionChange = (e) => {
    setQuizOptions({ ...quizOptions, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    let questionLength = quizContext.allQuestions.length;
    let quizQuestionLength = quizContext.allQuestions.filter(question => question.quizId == selectedQuiz.id).length;

    let updatedQuizQuestionSubmit = { id: String(questionLength + 1), ...quizQuestionSubmit, quizId: selectedQuiz.id, quizOptions: [{ ...quizOptions }] };
    let updateQuizLength = {...selectedQuiz, totalQuestions: String(quizQuestionLength+1)}
    console.log(updatedQuizQuestionSubmit, ">>>>> updatedQuizQuestionSubmit");
    console.log(updateQuizLength, ">>>> updated quiz length");

    let indexOfQuiz = quizContext.quizDetail.indexOf(selectedQuiz);
    console.log(indexOfQuiz,">>>>indexOfQuiz");

    let copyOfAllQuiz = [...quizContext.quizDetail];
    console.log(copyOfAllQuiz, ">>>>copyOfAllQuiz before");

    copyOfAllQuiz[indexOfQuiz] = updateQuizLength;
    console.log(copyOfAllQuiz, ">>>>copyOfAllQuiz after");


    quizContext.setAllQuestions([...quizContext.allQuestions, updatedQuizQuestionSubmit]);
    quizContext.setQuizDetail([...copyOfAllQuiz])
    
  };


  const handleNewQuiz = (e) => {
    setNewQuiz({...newQuiz, [e.target.name]: e.target.value})
  }

  const handleNewQuizSubmit = () => {
    let quizLength = quizContext.quizDetail.length;

    let updatedNewQuiz = {...newQuiz, id: String(quizLength+1)}
    // console.log(updatedNewQuiz, ">>>>updatedNewQuiz");
    quizContext.setQuizDetail([...quizContext.quizDetail, updatedNewQuiz])
    
  }

  console.log(quizContext, ">>>>quizContext in quiz form");
  // console.log(quizContext.allQuestions.length, ">>> quiz length");
  // console.log(selectedQuiz, ">>> selectedQuiz");
  // console.log(quizQuestionSubmit, ">>>>>quizQuestionSubmit");
  // console.log(quizOptions, ">>>> quiz options");
  // console.log(newQuiz, ">>>> new quiz");
  return (
    <div className="main-page quiz-form-page">
      <Container className={classes.formContainer}>
        {/* <Container className="main-page quiz-form-page"> */}
        <div className="header">
          <Typography variant="h5" className="heading">Add Question To Existing Quiz</Typography>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add New Quiz
          </Button>
        </div>

        {/*************** QUIZ NAME *******************/}
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
                    {quizDetails.quizName} {`(${quizDetails.quizCategory}, ${quizContext.allQuestions.filter(quiz => quiz.quizId == quizDetails.id).length} Questions)`}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

        {/*************** QUIZ CATEGORY *******************/}
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
          </FormControl>

        {/*************** QUIZ DURATION *******************/}
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
          </FormControl>

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
            onChange={handleOptionChange}
            name="option1"
          />
          <TextField
            label="Option-2"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleOptionChange}
            name="option2"
          />
          <TextField
            label="Option-3"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleOptionChange}
            name="option3"
          />
          <TextField
            label="Option-4"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleOptionChange}
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


      {/************* react modal component below ****************/}
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          }}
        >
          <DialogTitle>Add New Quiz</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
              To subscribe to this website, please enter your email address here. We
              will send updates occasionally.
            </DialogContentText> */}

            <TextField
              label="Quiz Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="quizName"
              onChange={handleNewQuiz}
            />
            <TextField
              label="Quiz Category"
              variant="outlined"
              fullWidth
              margin="normal"
              name="quizCategory"
              onChange={handleNewQuiz}
            />
            <TextField
              label="Quiz Duration (mins)"
              variant="outlined"
              fullWidth
              margin="normal"
              name="quizDuration"
              onChange={handleNewQuiz}
            />
            <TextField
              label="Quiz Points"
              variant="outlined"
              fullWidth
              margin="normal"
              name="quizMaxPoints"
              type="number"
              onChange={handleNewQuiz}
            />
            
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={handleNewQuizSubmit}>Add New Quiz</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

    </div>
  );
};

export default QuizForm;
