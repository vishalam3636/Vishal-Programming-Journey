const express = require("express");
const app = express();
const PORT = 3636;

// // http://localhost:3636/user?userId=101&password=jaibajrangbali
// app.get("/user", (req, res) => {
//   console.log(req.query);

//   let userData = {
//     firstName: "Vishal",
//     lastName: "Chauhan",
//   };

//   res.send(userData);
// });

// // http://localhost:3636/user/707
// app.get("/user/:id", (req, res) => {
//   console.log(req.params);

//   let userData = {
//     firstName: "Vishal",
//     lastName: "Chauhan",
//   };

//   res.send(userData);
// });

// // http://localhost:3636/user/707/vishal/pwdblah
// app.get("/user/:userId/:name/:password", (req, res) => {
//   console.log(req.params);

//   let userData = {
//     firstName: "Vishal",
//     lastName: "Chauhan",
//   };

//   res.send(userData);
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
