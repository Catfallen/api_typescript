import { User } from "../models/User";

export const UserService = {
    async criarUsuario(nome: string, email: string, senha: string) {
        const existe = await User.findOne({ email }); //verifica se o usuario existe
        
        if (existe) throw new Error("Email já cadastrado");
        
        const user = await User.create({ nome, email, senha });
        
        return {id: user.id,nome: user.nome, email: user.email};
    },

    async login(email: string, senha: string) {
        const user = await User.findOne({ email });
        
        if (!user) throw new Error("Usuário não encontrado");
        
        const senhaValida = await user.compararSenha(senha);
        
        if (!senhaValida) throw new Error("Senha inválida");
        
        return user;
    }
}
