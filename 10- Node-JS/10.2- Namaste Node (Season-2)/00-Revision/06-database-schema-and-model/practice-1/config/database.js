const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namastedevpracticeproj:JHXZcF8ujGIdKS2A@namastenodepractice.usrgd.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
