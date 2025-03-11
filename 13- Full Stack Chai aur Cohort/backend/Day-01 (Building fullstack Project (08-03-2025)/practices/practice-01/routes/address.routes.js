import express from "express";
const Router = express.Router();
import { allAddress } from "../controllers/address.controller.js";

Router.get("/allAddress", allAddress);

export default Router;
