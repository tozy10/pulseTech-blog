import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "./app/generated/prisma";
import Github from "next-auth/providers/github";

const prisma = new PrismaClient()
const allowedEmails = process.env.ALLOWED_EMAILS?.split(",") ?? [];

export const {handlers, auth , signIn, signOut} = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [Github({
           clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    })],
    callbacks:{
      async signIn({user}){
          return allowedEmails.includes(user.email ?? "");
      }
      }
    
    }
    
)