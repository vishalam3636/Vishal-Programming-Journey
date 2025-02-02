const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vishalam3636:P7bUaWoGNRllYtlf@nn-s2-e10-pr1-cl1.izf66.mongodb.net/"
    );

    console.log(`Successfully cvonnected to DB !!`);
  } catch (err) {
    throw new Error(`ERROR CONNECTING DB: ${err.message}`);
  }
};

module.exports = { connectDB };
