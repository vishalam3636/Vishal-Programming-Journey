const express = require("express");
const app = express();
const PORT = 8000;

app.get("/getUserData", (req, res) => {
  // Logic of DB call and get user data
  try {
    throw new Error("some random error");
    res.send("User data sent");
  } catch (err) {
    res.status(500).send("Some error occured, contact support team");
  }
});

// This will handle all the error, which isnt caught above
app.use("/", (err, req, res, next) => {
  if (err) {
    // Log error message
    res.status(500).send("something went wrong");
  }
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
