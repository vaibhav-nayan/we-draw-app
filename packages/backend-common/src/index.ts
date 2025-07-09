import dotenv from "dotenv";

dotenv.config();

export const JWT_SECRET = process.env.MODE === "production" ? process.env.JWT_SECRET : "123123";
export const PORT = process.env.MODE === "production" ? process.env.PORT : 3001;
export const CORS_ORIGIN = process.env.MODE === "production" ? process.env.CORS_ORIGIN : "http://localhost:3000";
export const REDIS_URL = process.env.MODE === "production" ? process.env.REDIS_URL : "redis://localhost:6379";