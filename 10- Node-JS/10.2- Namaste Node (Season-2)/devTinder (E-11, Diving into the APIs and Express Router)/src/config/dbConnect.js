const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log(`DB Connection Successful !!`);
  } catch (err) {
    throw new Error(`DB Connection failed`);
  }
};

module.exports = { dbConnect };
