import dotenv from "dotenv";

dotenv.config();
import jwt from 'jsonwebtoken';
import { TokenPayload } from '../models/TokenPayload';
import { TokenDecoded } from "../models/TokenDecoded";

export function generateToken(payload:TokenPayload):string {
  console.log(payload);
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}

export function verifyToken(token:string):TokenDecoded {
  return jwt.verify(token, process.env.JWT_SECRET);
}

