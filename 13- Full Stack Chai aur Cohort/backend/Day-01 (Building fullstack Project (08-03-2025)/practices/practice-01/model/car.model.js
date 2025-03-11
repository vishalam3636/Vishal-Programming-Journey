import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  userId: String,
  carName: String,
  carBrand: String,
  carColor: String,
  carNumber: String,
});

const car = mongoose.model("Car", carSchema);

export { car };
