import express from "express";
import { registerUser } from "../controllers/user.controller.js";
const Router = express.Router();

Router.get("/register", registerUser);

export default Router;
