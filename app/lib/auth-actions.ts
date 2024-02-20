'use server';
import { createUser, usernameIsUnique } from "./data";
import { z } from 'zod';
import { signIn, signOut } from "@/auth";
// import auth from '@/middleware'
import middleware from "@/middleware";
import { revalidatePath } from 'next/cache';
import { AuthError } from 'next-auth'


// state type for the useformstate
export type State = {
    message?: string | null;
    errors?: {
        [key: string]: string[];
    };
};


// zod schema
const UserSchema = z.object({
    username: z.string({
        invalid_type_error: 'please provide a valid username'
    }).max(10, { message: 'username should not exceed 8 chars' }).min(2, 'username must be longer than 2 chars'),
    password: z.string({
        invalid_type_error: 'please inpute a valid password'
    }).min(8, { message: 'password should be at least 8 chars' }),
    id: z.string(),
    is_admin: z.boolean(),
    expert: z.boolean(),
    contributions: z.array(z.string()),
});

const CreateUser = UserSchema.omit({ id: true, is_admin: true, expert: true, contributions: true });


/**
 * 
 * @param prevState initialstate from form
 * @param formData form data from form
 * @returns state object
 */
export async function signUp(prevState: State, formData: FormData) {

    const validatedFields = CreateUser.safeParse({
        username: formData.get('username'),
        password: formData.get('password'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to sign up.',
        };
    }

    const useroObj = validatedFields.data;
    const usernameTaken = await usernameIsUnique(useroObj.username);
    if (usernameTaken) {
        return {
            errors: { username: ['someone beat you to it, choose somethiing else'] }
        };
    }


    // create the user before sign in
    try {
        const user = await createUser(useroObj);
    } catch (error) {
        // database error
        return {
            message: 'something went wrong please try again later',
        };
    }

    // sign in user to session
    const authUser = await signIn('credentials', formData);
    

    revalidatePath('/', 'layout');

    return {
        message: 'signed up successfully'
    };

}

export async function LogIn(prevState: State, formData: FormData) {
    const { username, password } = {
        username: formData.get('username'),
        password: formData.get('password'),
    };

    if (!username || !password) return {
        errors: { username: ['wrong username or password'] }
    };


    try {
        await signIn('credentials', formData);
      } catch (error) {
        if (error instanceof AuthError) {
          switch (error.type) {
            case 'CredentialsSignin':
            return {
                errors: {username: ['wrong username or password bro']} as any,
                message: 'failed authentication',
            };
            default:
                return {
                    errors: {username: ['wrong username or password bro']} as any,
                    message: 'failed authentication',
                };
          }
        }
        throw error;
      }

    revalidatePath('/', 'layout');

    return {
        message: 'logged in successfully'
    };
}


/**
 * Log out user
 * @param formData Not really needed
 */
export async function Logout() {
    
    // doesnt work for some reason: DEBUG, currently using an alternative .then in form
    await signOut();
}