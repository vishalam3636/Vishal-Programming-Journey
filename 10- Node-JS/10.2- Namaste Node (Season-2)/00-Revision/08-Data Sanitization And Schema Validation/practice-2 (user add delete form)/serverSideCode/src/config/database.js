const mongoose = require("mongoose");

let databaseConnect = async () => {
  await mongoose.connect(
    "mongodb+srv://crusd-user-form:S8Ya2h4vzDBqc6Zn@cluster0.fy1bz.mongodb.net/"
  );
};

// database()
//   .then((res) => {
//     console.log("DB connection successful !!");
//   })
//   .catch((err) => {
//     console.log("DB connection failed !!");
//   });

module.exports = databaseConnect;
