import dotenv from "dotenv"
dotenv.config();

export const __prod__ = process.env.NODE_ENV === 'production';
export const __postgrsqlUser__ = process.env.DB_USER;
export const __postgrsqlPass__ = process.env.DB_PASS;