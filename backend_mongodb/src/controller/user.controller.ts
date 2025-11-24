import { Request, Response } from "express";
import UserService from "../service/user.service";

export default {
    async registrar(req: Request, res: Response) {
        try {
            const { nome, email, senha } = req.body;

            const user = await UserService.criarUsuario(nome, email, senha);
            return res.status(201).json({"msg":"Usuario cadastrado com sucesso"});
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    },
    async login(req: Request, res: Response) {
        try {
            const { email, senha } = req.body;

            const token:string = await UserService.login(email, senha);
            console.log("login");
            console.log(token);
            res.cookie("token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "strict",
                maxAge: 7 * 24 * 60 * 60 * 1000
            });
            return res.status(200).json({"msg":"login realizado com sucesso"});
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }
}
