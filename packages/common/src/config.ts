import dotenv from "dotenv";

dotenv.config();

const mode = process.env.MODE
export const BACKEND_URL=  mode === "production" ? process.env.BACKEND_URL : "http://localhost:3001/api"
export const WS=  mode === "production" ? process.env.WS_URL : "http://localhost:8080"