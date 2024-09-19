const express = require("express");
const app = express();
const PORT = 8000;

const { adminAuth, userAuth } = require("./middlewares/auth");

// Handle Auth Middleware for all GET, POST, PUT, DELETE, PATCH... requests
app.use("/admin", adminAuth);

//============== Admin routes handler ==============//
app.get("/admin/getAllData", (req, res) => {
  // logic of checking if the request is authorized
  res.send("All data sent");
});

app.delete("/admin/getAllData", (req, res) => {
  res.send("Delete a user");
});

//============== User routes handler ==============//
app.get("/user", userAuth, (req, res) => {
  // logic of checking if the request is authorized
  res.send("All user data sent");
});

// it doesnt require token so, Auth notm required
app.post("/user/login", (req, res) => {
  res.send("User logged in successfully");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
