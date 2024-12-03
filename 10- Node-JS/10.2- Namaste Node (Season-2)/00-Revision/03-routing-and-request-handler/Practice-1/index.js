const express = require("express");
const app = express();
const PORT = 8000;
const { adminAuth, userAuth } = require("./middleware/auth");

app.use("/admin", adminAuth);

app.use("/user", userAuth);

app.get("/admin/getAllData", (req, res, next) => {
  console.log("Handling get all data!!");
  // Logic of fetching all data
  res.send("All data sent !!");
});

app.delete("/admin/deleteUser", (req, res, next) => {
  // Logic of delete user
  console.log("Handling Delete User!!");
  res.send("User deleted successfully");
});

app.use("/user/getAllUser", (req, res) => {
  res.send("All user sent successfully");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
