const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("ABOUT TO CONNECT TO DB");

    await mongoose.connect(
      "mongodb+srv://vishalam3636:oLKK55xvKAhGnO33@nn-s2-e9-pr1-cl2.o0mtl.mongodb.net/"
    );
  } catch (err) {
    throw new Error(`ERROR: ${err.message}`);
  }
};

module.exports = { connectDB };
