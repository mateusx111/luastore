import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";
import { handler } from "tailwindcss-animate";

export default NextAuth(authOptions);

export { handler as GET, handler as POST };
