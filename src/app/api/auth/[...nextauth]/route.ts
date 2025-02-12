import { googleClientId, googleClientSecret } from "@/config/config";
import { config } from "dotenv";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

config();

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: googleClientId || "",
      clientSecret: googleClientSecret || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
