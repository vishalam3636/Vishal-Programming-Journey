const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://vishalam3636:gDw5MdLqAJcsMZQU@nn-s2-e7-p3.thjvl.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
