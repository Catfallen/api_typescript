import express from "express";
import { Request,Response } from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/database";

import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
//connectDB()
dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//Rotas
import userRoutes from "./routes/user.routes"
import publicRoutes from "./routes/public.routes";


app.use("/teste",async(req:Request,res:Response)=>{
    req.userId = "2";
    const userId = req.userId;
    return res.status(200).json({"msg":"teste",userId})
});

app.use("/user",userRoutes);
app.use("/public",publicRoutes);


const PORT = process.env.PORT;
console.log(PORT);
app.listen(PORT,()=>{
    console.log(`rodando em http://localhost:${PORT}`)
})