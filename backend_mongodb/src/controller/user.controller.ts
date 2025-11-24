import { Request, Response } from "express";
import { UserService } from "../service/user.service";
import jwt from "jsonwebtoken";
import { TokenPayload } from "../models/TokenPayload";

export default {
    async registrar(req: Request, res: Response) {
        try {
            const { nome, email, senha } = req.body;

            const user = await UserService.criarUsuario(nome, email, senha);
            return res.status(201).json(user);
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    },

    async login(req: Request, res: Response) {
        try {
            const { email, senha } = req.body;

            const user = await UserService.login(email, senha);

            const token:string = jwt.sign(
                { id: user._id,email: user.email},
                process.env.JWT_SECRET as string,
                { expiresIn: "7d" }
            );

            res.cookie("token", token, {
                httpOnly: true,
                secure: false,     // coloque TRUE em produção (HTTPS)
                sameSite: "strict",
                maxAge: 7 * 24 * 60 * 60 * 1000
            });
            return res.status(200).json({"msg":"login realizado com sucesso"});
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }
}
