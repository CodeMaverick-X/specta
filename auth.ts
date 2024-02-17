import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { getUser } from './app/lib/data';
import { z } from 'zod';


// zod schema
const UserSchema = z.object({
    username: z.string().max(10).min(2),
    password: z.string().min(8),
});


export const { auth, signIn, signOut } = NextAuth({
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

                    if (user.password === password) return user; // TODO: use bcrypt
                }


                console.log('invalid cred');
                return null;

            },
        }),
    ],
});