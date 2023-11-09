import { sql } from '@vercel/postgres';
import { compare } from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
        phone: {},
        name: {},
      },
      async authorize(credentials, req) {
        if (credentials?.email && credentials?.password) {
          const response =
            await sql`SELECT * FROM users WHERE email=${credentials.email}`;
          const user = response.rows[0];
          const passwordCorrect = await compare(
            credentials.password,
            user.password
          );
          console.log({ passwordCorrect });
          if (passwordCorrect) {
            return {
              id: user.id,
              email: user.email,
              name: user.name,
              phone: user.phone,
            };
          }
          return null;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      console.log({ token, user, trigger, session });
      if (user) {
        token = { ...token, ...user };
      }
      if (trigger === 'update') {
        token = { ...token, ...user };
      }
      console.log(token);
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          phone: token.phone,
        },
      };
    },
  },
});

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
