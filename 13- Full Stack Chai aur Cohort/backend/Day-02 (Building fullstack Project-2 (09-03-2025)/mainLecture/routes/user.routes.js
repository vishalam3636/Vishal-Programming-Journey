import express from "express";
import {
  registerUser,
  login,
  verifyUser,
} from "../controller/user.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/verify/:token", verifyUser);
router.post("/login", login);

export default router;
