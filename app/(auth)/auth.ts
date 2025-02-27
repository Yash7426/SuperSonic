import { ethers } from "ethers";
import NextAuth, { type User, type Session } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { getUserByPublicAddress, clearUserNonce } from '@/lib/db/queries';

import { authConfig } from './auth.config';

interface ExtendedSession extends Session {
  user: CustomUser;
}

interface CustomUser extends User {
  publicAddress?: string;
  balance?:string
}
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      id: "crypto",
      name: "Crypto Wallet Auth",
      credentials: {
        publicAddress: { label: "Public Address", type: "text" },
        signedNonce: { label: "Signed Nonce", type: "text" },
        balance : {label: "balance",type:"text"}
      },
      async authorize({ publicAddress, signedNonce , balance}: any) {
        console.log("yash",balance);
        // Fetch the user by publicAddress from your database using Drizzle
        const [user] = await getUserByPublicAddress(publicAddress);
        if (!user || !user.cryptoNonce || !user.cryptoNonceExpires) return null;
        
        // Verify the signature using ethers.js
        let recoveredAddress: string;
        try {
          recoveredAddress = ethers.verifyMessage(user.cryptoNonce, signedNonce);
        } catch (error) {
          return null;
        }
        
        // Compare addresses (use lowercase for consistency)
        if (recoveredAddress.toLowerCase() !== publicAddress.toLowerCase()) {
          return null;
        }
        
        // Check that the nonce hasn’t expired
        if (new Date(user.cryptoNonceExpires) < new Date()) {
          return null;
        }
        
        // Clear the nonce (or update it) after successful verification
        await clearUserNonce(user.id);
        console.log("object",user);
        // Return the user object; this object is saved in the session
        return { id: user.id, publicAddress: user.publicAddress , balance:user.balance};
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.publicAddress = (user as CustomUser).publicAddress;
        token.balance = (user as CustomUser).balance;
      }

      return token;
    },
    async session({
      session,
      token,
    }: {
      session: ExtendedSession;
      token: any;
    }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.publicAddress = token.publicAddress;
        session.user.balance = token.balance
      }
      return {
        ...session,
        user: {
          ...session.user
        },
      }
    },
  },
});
