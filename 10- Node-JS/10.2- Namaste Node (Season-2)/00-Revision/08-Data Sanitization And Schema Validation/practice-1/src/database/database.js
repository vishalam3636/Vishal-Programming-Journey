const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://s2e7p1c0User1:TTLFgW0SADhkIjXW@s2e7pract1c0.tipq9.mongodb.net/"
  )
  .then((res) => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Failed to connnect to db");
  });
