const mongoose = require("mongoose");

// // below mongoose.connect returns a promise, so not a right way to connect to db
// mongoose.connect(
//   "mongodb+srv://nn-s2-e5-r3-clustor-uservishal:Jaibajrangbali36@nn-s2-e6-r3-clustor1.tnj91.mongodb.net/"
// );

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://nn-s2-e5-r3-clustor-uservishal:xxjbl36xx@nn-s2-e6-r3-clustor1.tnj91.mongodb.net/devTinder"
  );
};

// connectDB()
//   .then(() => {
//     console.log("Database connection established !");
//   })
//   .catch((err) => {
//     console.error("Database cannot be connected: ", err);
//   });

module.exports = { connectDB };
