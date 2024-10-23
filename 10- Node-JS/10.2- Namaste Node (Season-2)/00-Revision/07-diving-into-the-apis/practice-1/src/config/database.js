const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://s2e7p1c0User1:TTLFgW0SADhkIjXW@s2e7pract1c0.tipq9.mongodb.net/"
  );
};

module.exports = connectDB;
