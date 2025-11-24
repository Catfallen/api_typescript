import { Router } from "express";
import userController from "../controller/user.controller";
import { Request,Response } from "express";
import authMiddleware from "../middleware/authMiddleware"

const router:Router = Router();

router.post("/register", userController.registrar);
router.post("/login", userController.login);


router.post('/logout', (req, res) => {
    res.clearCookie("token"); // nome do cookie
    res.status(200).json({ message: "Logout realizado" });
});



router.get('/private',authMiddleware,async(req:Request,res:Response)=>{
    res.status(200).json({id: req.userId,email: req.userEmail,nome:req.userNome})
});




export default router;
