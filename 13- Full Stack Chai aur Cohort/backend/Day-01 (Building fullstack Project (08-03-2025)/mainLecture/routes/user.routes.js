import express from "express";
import { registerUser, loginUser } from "../controller/user.controller.js";

const router = express.Router();

router.get("/register", registerUser);
router.get("/login", loginUser);

export default router;
