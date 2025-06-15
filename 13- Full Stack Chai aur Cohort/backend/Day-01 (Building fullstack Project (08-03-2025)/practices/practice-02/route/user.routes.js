import express from "express";
import { getAllUser, registerUser } from "../controller/user.controller.js";

const router = express.Router();

// router will take path and callback
router.get("/register", registerUser);
router.get("/getusers", getAllUser);

export default router;
