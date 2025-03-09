import express from "express";
import { newInterview } from "../controllers/interview.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const router = express.Router();
router.post("/new", authMiddleware, newInterview);
export default router;
