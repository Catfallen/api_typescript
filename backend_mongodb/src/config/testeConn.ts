import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
async function testConnection() {
  try {
    // URL do Mongo — substitua pela sua
    //const MONGO_URL = "mongodb://localhost:27017/avb";
    console.log(`mongo url: ${process.env.MONGO_URL}`)
    const MONGO_URL = process.env.MONGO_URL
    await mongoose.connect(MONGO_URL);

    console.log("✅ Conectado ao MongoDB com sucesso!");

    // Fecha a conexão depois do teste
    await mongoose.disconnect();
    console.log("🔌 Conexão encerrada.");
  } catch (error) {
    console.error("❌ Erro ao conectar ao MongoDB:", error);
  }
}

testConnection();
