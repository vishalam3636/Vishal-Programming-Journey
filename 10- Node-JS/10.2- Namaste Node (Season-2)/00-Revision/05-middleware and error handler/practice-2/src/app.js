/*
//////////////////////////////////////
////////// MIDDLEWARES ///////////////
//////////////////////////////////////
const express = require("express");
const app = express();
const PORT = 3636;

// import middlewares callbacks
const { adminAuth, userAuth } = require("./middlewares/auth");

// using middleware functions
app.use("/admin", adminAuth);
// app.use("/user", userAuth);

// Admin Routes
app.get("/admin/getAllData", (req, res, next) => {
  res.send("All data sent !!");
});

app.delete("/admin/deleteUser", (req, res, next) => {
  res.send("User deleted successfully !!");
});

// User Routes
app.post("/user/login", (req, res) => {
  res.send("User logged in successfully !!");
});

app.get("/user/data", (req, res) => {
  res.send("User data sent successfully!");
});

app.get("/user/posts", userAuth, (req, res) => {
  res.send("User posts sent successfully !");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
*/

//////////////////////////////////////
///////// ERROR HANDLINGS ////////////
//////////////////////////////////////
const express = require("express");
const app = express();
const PORT = 3636;

app.get("/getUserData", (req, res) => {
  try {
    // Logic of DB call and get user data
    // throw new Error("some random error");
    res.send("User Data Sent successfully !");
  } catch (err) {
    res.status(500).send("Some Error Occured , Contact Support Team");
  }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    // Log error messages
    res.status(500).send("Something went wrong");
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
