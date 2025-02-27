import express from "express";
import {signup,login,logout} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)



export default router;


console.log("HELLO from auth route")

//comment for commit for backend setup
//comment for commit for backend setup