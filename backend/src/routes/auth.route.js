import express from "express";
import {signup,login,logout, checkAuth} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { updateProfile } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)
router.put("/update-profile",protectRoute,updateProfile)
router.get("/check",protectRoute,checkAuth)

export default router;


console.log("HELLO from auth route")

//comment for commit for backend setup
//comment for commit for backend setup