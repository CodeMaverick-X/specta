'use server';
import { createUser, usernameIsUnique } from "./data";
import { z } from 'zod';
import { signIn } from "@/auth";
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
        // throw new Error('username taken chose somthing else'); //TODO: find a better way to handle this dont just throw an error
        return {
            errors: {username: ['someone beat you to it, choose somethiing else']}
        }
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
    console.log(useroObj);

    // sign in goes here
    signIn(`${useroObj}`)

    return {
        message: 'signed up successfully'
    };

}