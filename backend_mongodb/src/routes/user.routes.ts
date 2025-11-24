import { Router } from "express";
import userController from "../controller/user.controller";
import { Request,Response } from "express";
import authMiddleware from "../middleware/authMiddleware" //não reconhece o authmiddleware

const router:Router = Router();

router.post("/register", userController.registrar);
router.post("/login", userController.login);

router.get('/private',authMiddleware,async(req:Request,res:Response)=>{
    res.send(`<h1>rota privada</h1>
            <p>Id: ${req.userId}</p>
            <p>Email: ${req.userEmail}</p>
        `);
})

export default router;
