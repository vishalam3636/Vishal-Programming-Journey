const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    // "mongodb+srv://rahulzx36:fQd8XdesfgSoJcB3@vstpcluster0.rxvcg.mongodb.net/"
    "mongodb+srv://rahulzx36:fQd8XdesfgSoJcB3@vstpcluster0.rxvcg.mongodb.net/"
  );
};

module.exports = { connectDB };

// connectDB()
//   .then(() => {
//     console.log("DB Connected successfully !!");
//   })
//   .catch((err) => {
//     console.error("Database cannot connected !!");
//   });
