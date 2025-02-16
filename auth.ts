import NextAuth from "next-auth"
import Facebook from "next-auth/providers/facebook";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Github, Google, Facebook],
})