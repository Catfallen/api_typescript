import { Router } from "express";
import { Request,Response } from "express";
import path from "path";
const router:Router = Router();


router.get("/login",async(req:Request,res:Response)=>{
    res.sendFile(path.join(__dirname,"..","public","login.html"));
});

router.get('/register',async(req:Request,res:Response)=>{
    res.sendFile(path.join(__dirname,"..","public","register.html"));
})


router.get('/private',async(req:Request,res:Response)=>{
    res.sendFile(path.join(__dirname,"..","public","private.html"));
})


export default router;