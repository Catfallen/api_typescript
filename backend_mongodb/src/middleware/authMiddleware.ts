import { verifyToken } from "../utils/token";
import { Request,Response,NextFunction } from "express";
import {TokenDecoded} from "../models/tokenDecoded"
export default function authMiddleware(req:Request,res:Response,next:NextFunction){
    try{

        //tenta pegar o token do cookie
        const tokenFromCookie = req.cookies?.token;
        console.log(tokenFromCookie);


        //tenta pegar o Authorization
        const authHeader:string = req.headers['authorization'];

        const tokenFromAuthHeader = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;

        const token = tokenFromCookie || tokenFromAuthHeader;

        if(!token) {
            return res.status(401).json({message: "Token não fornecido"});
        }

        let decoded: TokenDecoded;
        try{
            decoded = verifyToken(token);
        }catch(err){
            return res.status(403).json({'msg':"Token invalido ou expirado"});
        }
        req.userId = decoded.id;
        req.userEmail = decoded.email;
        req.userNome = decoded.nome;
        return next();
    }catch(err){
        return res.status(500).json({'erro':err})
    }
}