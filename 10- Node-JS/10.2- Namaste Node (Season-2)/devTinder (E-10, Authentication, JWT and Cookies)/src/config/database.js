const mongoose = require("mongoose");

let dbConnect = async () => {
  try {
    return mongoose.connect(
      "mongodb+srv://vishalam3636:Xw0FPXzobLmM6ePx@nns2e10cluster0.ui66h.mongodb.net"
    );
  } catch (err) {
    console.log("Db Connection failed...");
  }
};

module.exports = dbConnect;
