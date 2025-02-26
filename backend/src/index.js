import express from "express";
import authRoutes from "./routes/auth.route.js";
import {connectDB} from "./lib/db.js"
import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT;

const app = express();
app.use("/api/auth",authRoutes)

//entrypoint for the application :
app.listen(PORT,()=>{
    console.log("Server is running on "+ PORT);
    connectDB()
});


