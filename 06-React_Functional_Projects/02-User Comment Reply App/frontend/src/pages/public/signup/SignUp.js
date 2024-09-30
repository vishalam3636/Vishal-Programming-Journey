import "./signup.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// imports for popup  modal
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

// importing functions
import {
  isUSerAlreadyExists,
  generateOtp,
} from "../../../reusableFunctions/ReusableFunctions";

// styling for popup
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  // p: 4
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
  padding: "10px",
};

export default function SignUp({ users }) {
  // for navigation
  const navigate = useNavigate();
  const [otp, setOtp] = useState(null);

  //===== state for modal =====//
  const [open, setOpen] = React.useState(false);
  const [inputOtp, setInputOtp] = useState("");
  let [otpSubmitCount, setOtpSubmitCount] = useState(3);

  //==== state for form ====//
  const [newUser, setNewUser] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  //==== functions for form ===//
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { email, username, password, confirmPassword } = newUser;

    if (
      email.trim() !== "" &&
      username.trim() !== "" &&
      password.trim() !== "" &&
      confirmPassword.trim() !== ""
    ) {
      if (password === confirmPassword) {
        // check if user (email or username already exists)
        const checkIfUserExists = isUSerAlreadyExists(email, username, users);
        console.log(checkIfUserExists);

        if (checkIfUserExists.status == 0) {
          let generatedOtp = generateOtp();
          setOtp(generatedOtp);
          toast.success(`OTP is sent to your email, ${generatedOtp}`);

          setOpen(true);
        } else if (checkIfUserExists.status == 1) {
          toast.warning("username already taken !");
        } else if (checkIfUserExists.status == 2) {
          toast.warning("Email already taken !");
        } else if (checkIfUserExists.status == 3) {
          toast.warning("Username and Email are already taken !");
        }
      } else {
        toast.error("Passwords don't macth !");
      }
    } else {
      toast.error("All fields are mandatory to fill !");
    }
  };

  //==== functions for modal ====//
  const handleClose = () => setOpen(false);

  const handleOtpSubmit = () => {
    console.log(otp, ">>>>otp val");
    if (inputOtp.trim() !== "") {
      if (inputOtp == otp) {
        handleClose();
        setInputOtp("");
        setOtpSubmitCount(3);
        toast.success("OTP Validation successful...!");

        // if the otp matches, open a page to fill other basic details of users
      } else if (otpSubmitCount > 1 && inputOtp !== otp) {
        setInputOtp("");
        setOtpSubmitCount(otpSubmitCount - 1);
        toast.warning(`Try it again..! trials left- ${otpSubmitCount}`);
      } else if (otpSubmitCount == 1 && inputOtp !== otp) {
        handleClose();
        setInputOtp("");
        setOtpSubmitCount(3);
        toast.error("Try it again !");
      }
    } else {
      toast.warning("Otp field cant be empty !");
    }
  };

  // console.log(newUser, ">>>>>>>>new user from signup");
  // console.log(otp, ">>>>otp");
  console.log(inputOtp, ">>>>>>input otp");
  console.log(otpSubmitCount, ">>>>>>otpSubmitCount");
  return (
    <div className="signuppage mainpage">
      <div className="signupcontainer">
        <h2>Create Account</h2>

        <div className="fieldcontainer">
          <label>Email:</label>
          <input onChange={handleChange} placeholder="Email" name="email" />
        </div>

        <div className="fieldcontainer">
          <label>Username:</label>
          <input
            onChange={handleChange}
            placeholder="username"
            name="username"
          />
        </div>

        <div className="fieldcontainer">
          <label>Password:</label>
          <input
            onChange={handleChange}
            placeholder="Password"
            name="password"
          />
        </div>

        <div className="fieldcontainer">
          <label>Confirm Password:</label>
          <input
            onChange={handleChange}
            placeholder="Confirm Password"
            name="confirmPassword"
          />
        </div>

        <div className="submitcontainer">
          <button onClick={handleSubmit}>Submit</button>

          <small>
            Don't have an account?{" "}
            <span onClick={() => navigate("/signin")}>SignIn</span>
          </small>
        </div>
      </div>

      {/* Below is popup modal */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Email Confirmation
            </Typography>
            <TextField
              label="OTP"
              onChange={(e) => setInputOtp(e.target.value)}
              value={inputOtp}
              placeholder="Enter Otp"
            />

            <Button variant="contained" onClick={handleOtpSubmit}>
              Submit
            </Button>
            <small>Trials Left- {otpSubmitCount}</small>
          </Box>
        </Modal>

        {/* Notification  */}
        <ToastContainer theme="dark" />
      </div>
    </div>
  );
}
