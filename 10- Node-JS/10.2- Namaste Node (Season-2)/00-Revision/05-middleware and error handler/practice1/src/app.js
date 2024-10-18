const express = require("express");
const app = express();
const PORT = 8000;

const { adminAuth, userAuth } = require("./middlewares/auth");

/************************************
//=== Below is understanding middleeware ===//

// handle auth middleware for only GET requests
app.use("/admin", adminAuth);

// app.use("/user", userAuth);

// Admin Routes
app.use("/admin/getAllData", (req, res) => {
  res.send("All Data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("User deleted");
});

// User Routes
app.get(
  "/user",
  (req, res) => {
    res.send("User data sent");
  },
  userAuth
);

app.post("/user/login", (req, res) => {
  res.send("User logged in successful");
});
***************************************/

// Understanding Error handling'
app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong-1 !!");
  }
});

app.get("/getUserData", (req, res) => {
  // logic of db call and get user data
  throw new Error("some random error");

  res.send("User Data Sent");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong !!");
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////

//************************************************************/
//************ HOMEWORK PART (Middlewares) *******************/
//********************************************************** */
/**
 * Write a dummy auth middleware for admin
 * Write a dummy auth for all user route except login
 */
/*
const express = require("express");
const app = express();
const PORT = 8000;

const { userAuth } = require("./middlewares/auth");

//####  Middlewares ####//
// Admin auth middleware
app.use("/admin", (req, res, next) => {
  let token = "ADMIN";
  let isAdminAuth = token === "ADMIN";

  if (!isAdminAuth) {
    res.send("Authorization failed");
  } else {
    next();
  }
});

//#### Routes ####//
// Admin Routes
app.get("/admin/getUserData", (req, res) => {
  res.send("Successfully sent all users");
});

app.delete("/admin/deleteUser", (req, res) => {
  res.send("User deleted successfully");
});

// User Routes
app.post("/user/login", (req, res) => {
  res.send("Successful login");
});

app.get("/user", userAuth, (req, res) => {
  res.send("Successfully sent user detail");
});

// Server creation
app.listen(PORT, () => {
  console.log("Server is listening on PORT 8000");
});
*/
