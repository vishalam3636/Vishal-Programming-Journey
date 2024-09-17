const express = require("express");
const app = express();
const PORT = 8000;

app.use("/", (req, res) => {
  res.send("Hello from dashboard");
});
+app.use("/hello", (req, res) => {
  res.send("Hello from hello");
});

app.use("/test", (req, res) => {
  res.send("Hello from test");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
