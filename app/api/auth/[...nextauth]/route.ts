import { PrismaClient } from '@prisma/client';
import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter} from "@next-auth/prisma-adapter";


const prisma = new PrismaClient();

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),

    providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID! ,
        clientSecret: process.env.GOOGLE_SECRET_KEY!
      })
    ],
    session: {
      strategy: 'jwt',

    }
});

export { handler as GET, handler as POST}