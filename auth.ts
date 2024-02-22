import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { getUser, getUserById } from './app/lib/data';
import { z } from 'zod';
import type { NextAuthConfig, User } from "next-auth";


// zod schema
const UserSchema = z.object({
    username: z.string().max(10).min(2),
    password: z.string().min(8),
});



export const { auth, signIn, signOut } = NextAuth({
    debug: true,
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {

                const parsedCredentials = UserSchema.safeParse(credentials);
                console.log(parsedCredentials);


                if (parsedCredentials.success) {

                    const { username, password } = parsedCredentials.data;
                    const user = await getUser(username);

                    if (!user) return null;

                    if (user.password === password) {
                        return user;
                    } // TODO: use bcrypt
                }

                console.log('invalid cred');
                return null;

            },
        }),
    ],
    callbacks: {
        authorized(params) {
            // console.log(params);
            return !!params.auth?.user;
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.

            return session;
        },
        async jwt({ token, user }) {
            // console.log(user);

            if (!token.sub) return token;
            if (user) {

                const userObj = await getUserById(token.sub);
                token.name = userObj?.username;
                token.user = userObj
            }


            return token;
        }
    },
});