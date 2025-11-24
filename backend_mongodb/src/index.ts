import express from "express";
import { Request,Response } from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/database";
import userRoutes from "./routes/user.routes"
import cookieParser from "cookie-parser";
//connectDB()
dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/teste",async(req:Request,res:Response)=>{
    req.userId = "2";
    const userId = req.userId;
    return res.status(200).json({"msg":"teste",userId})
});

app.use("/user",userRoutes);


const PORT = process.env.PORT;
console.log(PORT);
app.listen(PORT,()=>{
    console.log(`rodando em http://localhost:${PORT}`)
})