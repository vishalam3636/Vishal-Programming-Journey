const mongoose = require("mongoose");

let dbConnect = async () => {
  try {
    return mongoose.connect(
      "mongodb+srv://vishalam3636:cc27ViY4PVGNew9j@nns2e9cluster0.odxj6.mongodb.net/"
    );
  } catch (err) {
    console.log("Db Connection failed...");
  }
};

module.exports = dbConnect;
