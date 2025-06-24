import dotenv from "dotenv";

dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET || "123123";
export const PORT = process.env.PORT || 3001;