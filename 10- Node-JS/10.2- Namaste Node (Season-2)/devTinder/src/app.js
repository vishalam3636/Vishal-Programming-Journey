const express = require("express");
const app = express();
const PORT = 8000;

/************* TEST ROUTE **************
app.get("/hello", (req, res) => {
  res.send("Hello Hello Hello");
});

app.use("/test", (req, res) => {
  res.send("Hello from test");
});

app.use("/", (req, res) => {
  res.send("Hello from dashboard");
});
***************************************/

app.use("/test", (req, res) => {
  res.send("Hello from test");
});

app.post("/test", (req, res) => {
  res.send("Successfully added");
});

app.patch("/test", (req, res) => {
  res.send("Successfully updated");
});

app.delete("/test", (req, res) => {
  res.send("Successfully deleted !!");
});

app.get("/cb", (req, res) => {
  res.send("Hello from cb");
});

app.get("/c+b", (req, res) => {
  res.send("Hello from c+b");
});

app.get("/c?b", (req, res) => {
  res.send("Hello from cb");
});

app.get("/c*b", (req, res) => {
  res.send("Hello from cb");
});

app.get("/users/:id/:name", (req, res) => {
  console.log(req.params);
  res.send("Hello from users");
});

app.get("/person", (req, res) => {
  console.log(req.query);
  res.send("Hello from person");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
