import "./signup.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// imports for popup  odal
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

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

export default function SignUp() {
  // for navigation
  const navigate = useNavigate();

  // state for modal
  const [open, setOpen] = React.useState(false);

  // state for form
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // functions for form
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { email, password, confirmPassword } = newUser;

    if (
      email.trim() !== "" &&
      password.trim() !== "" &&
      confirmPassword.trim() !== ""
    ) {
      if (password === confirmPassword) {
        setOpen(true);
      } else {
        alert("password and confirm password do not match....");
      }
    } else {
      alert("Email and Password are mandatory fields..");
    }
  };

  // function for modal
  const handleClose = () => setOpen(false);

  console.log(newUser, ">>>>>>>>new user from signup");

  return (
    <div className="signuppage mainpage">
      <div className="signupcontainer">
        <h2>Create Account</h2>

        <div className="fieldcontainer">
          <label>Email:</label>
          <input onChange={handleChange} placeholder="Email" name="email" />
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
            <TextField label="OTP" defaultValue="" />

            <Button variant="contained" onClick={handleClose}>
              Submit
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
