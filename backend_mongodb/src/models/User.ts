import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
    nome: string;
    email: string;
    senha: string;
    compararSenha(senha: string): Promise<boolean>;
}

const UserSchema = new Schema<IUser>({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
}, { timestamps: true });

UserSchema.pre("save", async function (next) {
    if (!this.isModified("senha")) return next();
    const salt = await bcrypt.genSalt(10);
    this.senha = await bcrypt.hash(this.senha, salt);
    next();
});

UserSchema.methods.compararSenha = async function (senha: string) {
    return bcrypt.compare(senha, this.senha);
};

export const User = mongoose.model<IUser>("User", UserSchema);