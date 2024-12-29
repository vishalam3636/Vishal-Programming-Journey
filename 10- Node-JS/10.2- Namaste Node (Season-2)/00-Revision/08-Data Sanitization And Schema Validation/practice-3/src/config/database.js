const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://vishalam3636:nKP3moXTQOw80yKX@nn-s2-e8cluster0.5is8q.mongodb.net/?retryWrites=true&w=majority&appName=nn-s2-e8Cluster0/devTinder"
    );
  } catch (err) {
    console.log("Error connecting DB....", err);
  }
};

module.exports = connectDb;
