import express from "express";
import { userGuestLogin, userLogin, userLogout, userProfile, userRegister } from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register",userRegister);
router.post("/login",userLogin);
router.get("/guest",userGuestLogin);
router.get("/logout",authMiddleware,userLogout);
router.get("/me",authMiddleware,userProfile);

export default router;