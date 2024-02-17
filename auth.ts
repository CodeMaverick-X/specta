import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { getUser } from './app/lib/data';
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
        async authorize(credentials) {
            const {username, password } = eval(String(credentials))
            const user = await getUser(username);

            if (!user) return null
            if (user.password === password) return user // TODO: use bcrypt

            console.log('invalid credentials'); // remove
            return null

        },
      }),
],
});