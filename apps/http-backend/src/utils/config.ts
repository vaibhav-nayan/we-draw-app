import dotenv from "dotenv";

dotenv.config();
export const PORT = process.env.PORT
export const CORS_ORIGIN = process.env.CORS_ORIGIN
export const JWT_SECRET = process.env.JWT_SECRET