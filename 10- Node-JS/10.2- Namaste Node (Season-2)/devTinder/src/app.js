const express = require("express");
const app = express();
const PORT = 8000;

app.use(
  "/user",
  (req, res, next) => {
    // Route Handler
    console.log("Handler route user");
    // res.send("Response !!!");
    next();
  },
  (req, res, next) => {
    // Route Handler
    console.log("Handler route user 2");
    // res.send("SECOND Response !!!");
    next();
  },
  (req, res, next) => {
    // Route Handler
    console.log("Handler route user 3");
    // res.send("THIRD Response !!!");
    next();
  },
  (req, res, next) => {
    // Route Handler
    console.log("Handler route user 4");
    res.send("FOURTH Response !!!");
  }
);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
