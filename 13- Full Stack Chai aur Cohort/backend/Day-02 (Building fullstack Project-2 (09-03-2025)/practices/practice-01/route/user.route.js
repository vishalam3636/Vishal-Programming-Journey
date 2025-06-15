import express from "express";
import { alluser, register } from "../controller/user.controller.js";
const router = express.Router();

router.get("/register", register);
router.get("/alluser", alluser);

export default router;
