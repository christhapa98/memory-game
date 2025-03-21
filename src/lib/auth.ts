import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { getServerSession, type NextAuthOptions, type Session, type User as NextAuthUser } from "next-auth";
import { getSession } from "next-auth/react";

// ✅ Extend NextAuth Session Type
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image?: string;
      accessToken?: string;
    };
  }
}

// ✅ Define NextAuth configuration
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt", // Store session in the database
  },
  callbacks: {
    async signIn({ user, account, profile }: { user: NextAuthUser; account: any; profile?: any }): Promise<boolean> {
    //   if (!profile?.email) return false; // Ensure email exists

    //   try {
    //     // ✅ Fetch user by email properly
    //     const existingUsers = await db
    //       .select()
    //       .from(UserTable)
    //       .where(eq(UserTable.email, profile.email));

    //     const existingUser = existingUsers[0] ?? null; // Extract first result safely

    //     if (existingUser) {
    //       // ✅ Check if the account with the same provider is already linked
    //       const existingAccounts = await db
    //         .select()
    //         .from(AccountTable)
    //         .where(
    //           and(eq(AccountTable.userId, existingUser.id), eq(AccountTable.providerAccountId, account?.providerAccountId!))
    //         );

    //       if (existingAccounts.length === 0) {
    //         // ✅ If no linked account exists, create it
    //         await db.insert(AccountTable).values({
    //           userId: existingUser.id,
    //           type: account?.type!,
    //           provider: account?.provider!,
    //           providerAccountId: account?.providerAccountId!,
    //           access_token: account?.access_token ?? null,
    //           refresh_token: account?.refresh_token ?? null,
    //           expires_at: account?.expires_at ?? null,
    //           token_type: account?.token_type ?? null,
    //           scope: account?.scope ?? null,
    //           id_token: account?.id_token ?? null,
    //           session_state: account?.session_state ?? null,
    //         });
    //       }

    //       user.image = existingUser.image;

    //       return true; // Allow login
    //     }

    //     return true; // Continue if user does not exist
    //   } catch (error) {
    //     return false;
          //   }
          return true;
    },

    async session({ session }: { session: Session }): Promise<Session> {
    //   if (session.user) {
    //     try {
    //       const existingUsers = await db
    //         .select()
    //         .from(UserTable)
    //         .where(eq(UserTable.email, session.user.email!));

    //       if (existingUsers.length > 0) {
    //         session.user.id = existingUsers[0].id;
    //       }
    //     } catch (error) {
    //       console.error("Error in session callback:", error);
    //     }
    //   }
      return session;
    }
  },

  secret: process.env.NEXTAUTH_SECRET,
};

// ✅ Fully typed session retrieval functions
const getSessionServer = async (): Promise<Session | null> => getServerSession(authOptions);
const getSessionClient = async (): Promise<Session | null> => getSession();

export { getSessionServer, getSessionClient };