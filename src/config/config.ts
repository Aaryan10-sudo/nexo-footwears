import { config } from "dotenv";

config();
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const googleClientId = process.env.GOOGLE_CLIENT_ID;
export const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
export const nextAuthSecret = process.env.NEXTAUTH_SECRET;
