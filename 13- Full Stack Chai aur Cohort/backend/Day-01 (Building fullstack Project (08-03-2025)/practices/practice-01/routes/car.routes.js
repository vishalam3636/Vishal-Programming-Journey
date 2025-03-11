import express from "express";
const Router = express.Router();
import { allCars } from "../controllers/car.controller.js";

Router.get("/allCar", allCars);

export default Router;
