import express from "express";
import {
  registerUser,
  login,
  verifyUser,
  getMe,
  forgotPassword,
  resetPassword,
} from "../controller/user.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/verify/:token", verifyUser);
router.post("/login", login);
router.get("/me", isLoggedIn, getMe);

export default router;
