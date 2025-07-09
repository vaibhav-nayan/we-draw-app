import dotenv from "dotenv";

dotenv.config();
export const BACKEND_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`;
export const WS_URL = process.env.NEXT_PUBLIC_WS_URL